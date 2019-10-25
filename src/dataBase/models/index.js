import mongoose from 'mongoose';

import usuarioSchema from '../schemas/usuarioSchema';
import enfermedadSchema from '../schemas/enfermedadSchema';

const UsuarioModel = mongoose.model('usuarios', usuarioSchema);
const EnfermedadModel = mongoose.model('enfermedades', enfermedadSchema);

export {
    UsuarioModel,
    EnfermedadModel,
}