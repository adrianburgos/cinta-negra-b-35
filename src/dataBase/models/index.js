import mongoose from 'mongoose';

import usuarioSchema from '../schemas/usuarioSchema';
import enfermedadSchema from '../schemas/enfermedadSchema';
import signoVitalSchema from '../schemas/signoVitalSchema';

const UsuarioModel = mongoose.model('usuarios', usuarioSchema);
const EnfermedadModel = mongoose.model('enfermedades', enfermedadSchema);
const SignoVitalModel = mongoose.model('signosVitales', signoVitalSchema);

export {
    UsuarioModel,
    EnfermedadModel,
    SignoVitalModel,
}