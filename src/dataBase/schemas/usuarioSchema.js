import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
            enum: ['Hombre', 'Mujer'],
            required: true
        },
        clave: {
            type: String,
            required: true
        },
        imagenPerfil: {
            type: String,
        },
        enfermedades: [{
            type: schema.Types.ObjectId,
            ref: 'enfermedades'
        }],
        signosVitales: [{
            type: schema.Types.ObjectId,
            ref: 'signosVitales'
        }]
    },
    { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

usuarioSchema.pre("save", function(next){
    let usuario = this;
    bcrypt.genSalt(10, function(error, salt) {
        bcrypt.hash(usuario.clave, salt, function(error, hash){
            if(error) return next(error);
            usuario.clave = hash;
            next();
        });
    });
});

export default usuarioSchema;