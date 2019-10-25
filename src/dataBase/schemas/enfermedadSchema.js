import mongoose from 'mongoose';

const schema = mongoose.Schema;

const enfermedadSchema = new schema(
    {
        tipo: {
            type: String,
            required: true,
            enum: ['A', 'C'] //aguda o cronica
        },
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

export default enfermedadSchema;