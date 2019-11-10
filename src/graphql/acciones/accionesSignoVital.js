import { SignoVitalModel } from '../../dataBase/models';

const addSignoVitalAccion = async (signoVital) => {
    try {
        const result = await SignoVitalModel.create(signoVital);
        console.log("TCL: addSignoVitalAccion -> result", result)
        return result;
    } catch (error) {
        console.log(error);
    }
}

export {
    addSignoVitalAccion
}