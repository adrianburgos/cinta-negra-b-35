import mongoose from 'mongoose';

const schema = mongoose.Schema;

const signoVitalSchema = new schema(
    {
        tipoSigno: {
            type: String,
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
        },
        activo: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

export default signoVitalSchema;