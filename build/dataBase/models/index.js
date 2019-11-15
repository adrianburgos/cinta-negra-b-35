"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignoVitalModel = exports.EnfermedadModel = exports.UsuarioModel = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _usuarioSchema = _interopRequireDefault(require("../schemas/usuarioSchema"));

var _enfermedadSchema = _interopRequireDefault(require("../schemas/enfermedadSchema"));

var _signoVitalSchema = _interopRequireDefault(require("../schemas/signoVitalSchema"));

var UsuarioModel = _mongoose["default"].model('usuarios', _usuarioSchema["default"]);

exports.UsuarioModel = UsuarioModel;

var EnfermedadModel = _mongoose["default"].model('enfermedades', _enfermedadSchema["default"]);

exports.EnfermedadModel = EnfermedadModel;

var SignoVitalModel = _mongoose["default"].model('signosVitales', _signoVitalSchema["default"]);

exports.SignoVitalModel = SignoVitalModel;
//# sourceMappingURL=index.js.map