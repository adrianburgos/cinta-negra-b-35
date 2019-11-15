"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var schema = _mongoose["default"].Schema;
var usuarioSchema = new schema({
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
    "enum": ['Hombre', 'Mujer'],
    required: true
  },
  clave: {
    type: String,
    required: true
  },
  imagenPerfil: {
    type: String
  },
  enfermedades: [{
    type: schema.Types.ObjectId,
    ref: 'enfermedades'
  }],
  signosVitales: [{
    type: schema.Types.ObjectId,
    ref: 'signosVitales'
  }]
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

usuarioSchema.pre("save", function (next) {
  var usuario = this;

  _bcrypt["default"].genSalt(10, function (error, salt) {
    _bcrypt["default"].hash(usuario.clave, salt, function (error, hash) {
      if (error) return next(error);
      usuario.clave = hash;
      next();
    });
  });
});
var _default = usuarioSchema;
exports["default"] = _default;
//# sourceMappingURL=usuarioSchema.js.map