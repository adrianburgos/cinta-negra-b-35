"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEnfermedadAccion = exports.addEnfermedadAccion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../../dataBase/models");

var addEnfermedadAccion =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(enfermedad, id) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.EnfermedadModel.create(enfermedad);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function addEnfermedadAccion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Actualiza la enfermedad con el filtro (para la consulta)
 * y el update indicando los campos que se desean modificar con sintaxis de mongoDB
 * @param {JSON} filter - valores para realizar la consulta
 * @param {JSON} update - datos a ser acutalizados
 */


exports.addEnfermedadAccion = addEnfermedadAccion;

var updateEnfermedadAccion =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(filter, update) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.EnfermedadModel.findOneAndUpdate(filter, update, {
              "new": true
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log("TCL: updateEnfermedadAccion -> error", _context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function updateEnfermedadAccion(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateEnfermedadAccion = updateEnfermedadAccion;
//# sourceMappingURL=accionesEnfermedad.js.map