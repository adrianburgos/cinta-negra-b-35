"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var schema = _mongoose["default"].Schema;
var signoVitalSchema = new schema({
  tipoSigno: {
    type: String,
    "enum": ["Presion", "Temperatura", "Glucosa"],
    required: true
  },
  valorInferior: {
    type: String,
    required: true
  },
  valorSuperior: {
    type: String
  },
  dimensionales: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

var _default = signoVitalSchema;
exports["default"] = _default;
//# sourceMappingURL=signoVitalSchema.js.map