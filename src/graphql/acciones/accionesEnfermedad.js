import { EnfermedadModel } from '../../dataBase/models';

const addEnfermedadAccion = async (enfermedad, id) => {
    try {
        return await EnfermedadModel.create(enfermedad);
    } catch (error) {
        console.log(error);
    }
}

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