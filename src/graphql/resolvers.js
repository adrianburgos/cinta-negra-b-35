import {
    addUsuarioAccion,
    updateUsuarioEnfermedadAccion,
    iniciarSesionAccion,
    obtenerUsuarioAccion
} from './acciones/accionesUsuario';
import { addEnfermedadAccion } from './acciones/accionesEnfermedad';

const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const foods = [
    {
        name: 'meat',
        cal: 200
    },
    {
        name: 'cookies',
        cal: 500
    }
]


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
        obtenerUsuario: async (parent, data, context, info) => {
            try {
                const { usuario } = context;
                return await obtenerUsuarioAccion(usuario);
            } catch (error) {
                console.log(error);
            }
        }
    },

    Mutation: {
        //en todas las funciones de los resolves se reciben 4 parametros,
        // parent - funciones necesarias para manejo interno de graphql
        // data - argumentos de la funcion resolver
        // context - variables globales entre resolvers
        // info - informacion del user agent (quien pide la informacion)
        addUsuario: async (parent, data, context, info) => {
            try {
                return await addUsuarioAccion(data.input);
            } catch (error) {
                console.log(error);
            }
        },
        addEnfermedad: async (parent, data, context, info) => {
            try {
                const { input, usuarioID } = data;
                const newEnfermedad = await addEnfermedadAccion(input);

                const filter = { _id: usuarioID };
                const update = { $push: { 'enfermedades': newEnfermedad._id } };

                const updatedUsuario = await updateUsuarioEnfermedadAccion(filter, update);
                console.log(updatedUsuario);
                return newEnfermedad
            } catch (error) {
                console.log(error);
            }
        },
        iniciarSesion: async (parent, data, context, info) => {
            try {
                const { usuario, clave } = data;
                return await iniciarSesionAccion(usuario, clave);
            } catch (error) {
                console.log(error);
            }
        },
        addSignoVital: async(parent, data, context, info) => {
            try {
                
            } catch (error) {
                console.log(error);
            }
        }
    }
};

export default resolvers;