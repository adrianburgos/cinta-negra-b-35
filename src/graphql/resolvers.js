import {
    addUsuarioAccion,
    updateUsuario,
    iniciarSesionAccion,
    obtenerUsuarioAccion
} from './acciones/accionesUsuario';
import { addEnfermedadAccion } from './acciones/accionesEnfermedad';
import { addSignoVitalAccion } from './acciones/accionesSignoVital';

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
                console.log("TCL: error", error)
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
                console.log("TCL: error", error)
            }
        },
        addEnfermedad: async (parent, data, context, info) => {
            try {
                const { input } = data;
                const { usuario } = context;
                const newEnfermedad = await addEnfermedadAccion(input);

                const filter = { _id: usuario._id };
                const update = { $push: { 'enfermedades': newEnfermedad._id } };

                const updatedUsuario = await updateUsuario(filter, update);
                console.log("TCL: updatedUsuario", updatedUsuario)
                return newEnfermedad
            } catch (error) {
                console.log("TCL: error", error)
            }
        },
        iniciarSesion: async (parent, data, context, info) => {
            try {
                const { usuario, clave } = data;
                return await iniciarSesionAccion(usuario, clave);
            } catch (error) {
                console.log("TCL: error", error)
            }
        },
        addSignoVital: async (parent, data, context, info) => {
            try {
                const { signo } = data;
                const { usuario } = context;
                console.log("TCL: usuario", usuario)
                const nuevoSigno = await addSignoVitalAccion(signo);

                const filter = { _id: usuario._id };
                const update = { $push: { signosVitales: nuevoSigno._id } }; //el objeto debe de llamarse igual que el esquema
                const usuarioActualizado = await updateUsuario(filter, update);
                console.log("TCL: usuarioActualizado", usuarioActualizado)

                return nuevoSigno;

            } catch (error) {
                console.log("TCL: error", error)
            }
        }
    }
};

export default resolvers;