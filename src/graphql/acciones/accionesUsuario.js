import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UsuarioModel } from '../../dataBase/models'


Date.prototype.agregarDias = function (dias) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + dias);
    return date;
}

const crearToken = (dataUsuario) => {
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

const updateUsuarioEnfermedadAccion = async (filter, update) => {
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

const iniciarSesionAccion = async (usuario, clave) => {
    try {
        const filter = { email: usuario };
        const usuario = buscarUsuarioAccion(filter);
        const valido = await bcrypt.compare(clave, usuario.clave);
        if (valido) {
            const token = crearToken(usuario);
            return { token };
        }
    } catch (error) {
        console.log(error);
    }
}

const obtenerUsuarioAccion = async (usuario) => {
    try {
        const infoUsuario = await UsuarioModel.findById(usuario._id).populate('enfermedades');
        console.log(infoUsuario);
        return infoUsuario;
    } catch (error) {
        console.log(error);
    }
}


export {
    addUsuarioAccion,
    updateUsuarioEnfermedadAccion,
    buscarUsuarioAccion,
    iniciarSesionAccion,
    obtenerUsuarioAccion
}