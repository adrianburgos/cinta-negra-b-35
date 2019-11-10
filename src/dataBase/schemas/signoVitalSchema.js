import mongoose from 'mongoose';

const schema = mongoose.Schema;

const signoVitalSchema = new schema(
    {
        tipoSigno: {
            type: String,
            enum: ["Presion", "Temperatura", "Glucosa"],
            required: true,
        },
        valorInferior: {
            type: String,
            required: true,
        },
        valorSuperior: {
            type: String,
        },
        dimensionales: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

export default signoVitalSchema;