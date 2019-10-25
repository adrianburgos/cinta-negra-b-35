import { EnfermedadModel } from '../../dataBase/models';

const addEnfermedadAccion = async (enfermedad, id) => {
    try {
        return await EnfermedadModel.create(enfermedad);
    } catch (error) {
        console.log(error);
    }
}

export {
    addEnfermedadAccion,
}