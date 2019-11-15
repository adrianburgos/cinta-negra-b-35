"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var schema = _mongoose["default"].Schema;
var enfermedadSchema = new schema({
  tipo: {
    type: String,
    required: true,
    "enum": ['A', 'C'] //aguda o cronica

  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  curada: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

var _default = enfermedadSchema;
exports["default"] = _default;
//# sourceMappingURL=enfermedadSchema.js.map