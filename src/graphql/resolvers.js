import {
    addUsuarioAccion,
    updateUsuarioAccion,
    iniciarSesionAccion,
    getUsuarioAccion,
    getEnfermedadesFromUsuarioAccion,
    getSignosVitalesFromUsuarioAccion
} from './acciones/accionesUsuario';
import {
    addEnfermedadAccion,
    updateEnfermedadAccion
} from './acciones/accionesEnfermedad';
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
        getUsuario: async (parent, data, context, info) => {
            try {
                const { usuario } = context;
                return await getUsuarioAccion(usuario);
            } catch (error) {
                console.log("TCL: error", error)
            }
        },
        getEnfermedades: async (parent, data, context, info) => {
            try {
                const { usuario } = context;
                return await getEnfermedadesFromUsuarioAccion(usuario._id);
            } catch (error) {
                console.log("TCL: error", error);
            }
        },
        getSignosVitales: async (parent, data, context, info) => {
            try {
                const { usuario } = context;
                return await getSignosVitalesFromUsuarioAccion(usuario._id);
            } catch (error) {
                console.log("TCL: error", error);
            }
        },
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

                const updatedUsuario = await updateUsuarioAccion(filter, update);
                console.log("TCL: updatedUsuario", updatedUsuario)
                return newEnfermedad
            } catch (error) {
                console.log("TCL: error", error)
            }
        },
        updateEnfermedadNombre: async (parent, data, context, info) => {
            try {
                const { nombre, enfermedadID } = data;
                const filter = { _id: enfermedadID };
                const update = { $set: { nombre } };
                return await updateEnfermedadAccion(filter, update);
            } catch (error) {
                console.log("TCL: error", error);
            }
        },
        updateEnfermedadDescipcion: async (parent, data, context, info) => {
            try {
                const { descripcion, enfermedadID } = data;
                const filter = { _id: enfermedadID };
                const update = { $set: { descripcion } };
                return await updateEnfermedadAccion(filter, update);
            } catch (error) {
                console.log("TCL: error", error);
            }
        },
        updateEnfermedadCurada: async (parent, data, context, info) => {
            try {
                const { curada, enfermedadID } = data;
                const filter = { _id: enfermedadID };
                const update = { $set: { curada: curada } };
                return await updateEnfermedadAccion(filter, update);
            } catch (error) {
                console.log("TCL: updateEnfermedadCurada: -> error", error)
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
                const usuarioActualizado = await updateUsuarioAccion(filter, update);
                console.log("TCL: usuarioActualizado", usuarioActualizado)

                return nuevoSigno;

            } catch (error) {
                console.log("TCL: error", error)
            }
        },
    }
};

export default resolvers;