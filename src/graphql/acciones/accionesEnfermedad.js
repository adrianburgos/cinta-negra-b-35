import { EnfermedadModel } from '../../dataBase/models';

const addEnfermedadAccion = async (enfermedad, id) => {
    try {
        return await EnfermedadModel.create(enfermedad);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Actualiza la enfermedad con el filtro (para la consulta)
 * y el update indicando los campos que se desean modificar con sintaxis de mongoDB
 * @param {JSON} filter - valores para realizar la consulta
 * @param {JSON} update - datos a ser acutalizados
 */
const updateEnfermedadAccion = async (filter, update) => {
    try {
        return await EnfermedadModel.findOneAndUpdate(filter, update, { new: true });
    } catch (error) {
        console.log("TCL: updateEnfermedadAccion -> error", error);
    }
}

export {
    addEnfermedadAccion,
    updateEnfermedadAccion,
}