import mongoose from 'mongoose';

const schema = mongoose.Schema;

const usuarioSchema = new schema(
    {
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        genero: {
            type: String,
            enum: ['H', 'M']
        },
        enfermedades: [{
            type: schema.Types.ObjectId,
            ref: 'enfermedades'
        }]
    },
    { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

export default usuarioSchema;