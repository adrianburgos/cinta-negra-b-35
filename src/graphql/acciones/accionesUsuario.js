import { UsuarioModel } from '../../dataBase/models'

const addUsuarioAccion = async (usuario) => {
    try {
        return await UsuarioModel.create(usuario);
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

export {
    addUsuarioAccion,
    updateUsuarioEnfermedadAccion
}