import jwt from 'jsonwebtoken';

import { buscarUsuarioAccion } from './accionesUsuario';

import {
    SchemaDirectiveVisitor,
    AuthenticationError
} from 'apollo-server-express'

//permite extender las funcionalidades de los querys o mutations
class AuthDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async function (...args) {
            const context = args[2];
            if (context.usuario) {
                return await resolve.apply(this, args);
            } else {
                throw new AuthenticationError("Necesitas iniciar sesion");
            }
        }
    }
}

const getContext = (req) => {
    try {
        const token = req.headers.authorization;
        if (typeof token === typeof undefined) return req;

        return jwt.verify(
            token,
            process.env.JWT,
            async function (error, result) {
            /**
             * result trae la seccion del payload del token verificado
             */
            if (error) return req;
            try {
                const usuario = await buscarUsuarioAccion({ _id: result._id })
                return { ...req, usuario }
            } catch (error) {
                return req;
            }
        })
    } catch (error) {
        return req;
    }
}

export {
    AuthDirective,
    getContext,
}
