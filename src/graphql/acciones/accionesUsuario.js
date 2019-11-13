import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UsuarioModel } from '../../dataBase/models'


Date.prototype.agregarDias = function (dias) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + dias);
    return date;
}

const crearToken = (dataUsuario) => {
    //fecha de expiracion para el token (hoy + 5 dias)
    const exp = new Date().agregarDias(5).getTime();
    const payload = {
        _id: dataUsuario._id,
        email: dataUsuario.email,
        nombre: dataUsuario.nombre,
        apellido: dataUsuario.apellido,
        genero: dataUsuario.genero,
        exp,
    }
    const token = jwt.sign(payload, process.env.JWT);
    return token;
}

const addUsuarioAccion = async (usuario) => {
    try {
        // return await UsuarioModel.create(usuario);
        const nuevoUsuario = await UsuarioModel.create(usuario);
        const token = crearToken(nuevoUsuario);
        return { token };
    } catch (error) {
        console.log(error);
    }
};

/**
 * Actualiza al usuario indicado en el filtro
 * @param {JSON} filter - valores para realizar la consulta
 * @param {JSON} update - datos a ser acutalizados
 */
const updateUsuarioAccion = async (filter, update) => {
    try {
        return UsuarioModel.findOneAndUpdate(filter, update, { new: true }); // { new: true } para que devuelva el objeto actualizado
    } catch (error) {
        console.log(error);
    }
}

const buscarUsuarioAccion = async (filter) => {
    try {
        return await UsuarioModel.findOne(filter);
    } catch (error) {
        console.log(error);
    }
}

const iniciarSesionAccion = async (correoUsuario, clave) => {
    try {
        const filter = { email: correoUsuario };
        const usuario = await buscarUsuarioAccion(filter);
        console.log(usuario);
        const valido = await bcrypt.compare(clave, usuario.clave);
        if (valido) {
            const token = crearToken(usuario);
            return { token };
        }
    } catch (error) {
        console.log(error);
    }
}

const getUsuarioAccion = async (usuario) => {
    try {
        const infoUsuario = await UsuarioModel.findById(usuario._id).populate('enfermedades').populate('signosVitales');
        console.log(infoUsuario);
        return infoUsuario;
    } catch (error) {
        console.log(error);
    }
}

export {
    addUsuarioAccion,
    updateUsuarioAccion,
    buscarUsuarioAccion,
    iniciarSesionAccion,
    getUsuarioAccion
}