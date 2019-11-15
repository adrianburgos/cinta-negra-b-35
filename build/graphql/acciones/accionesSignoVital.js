"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSignoVitalAccion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../../dataBase/models");

var addSignoVitalAccion =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(signoVital) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.SignoVitalModel.create(signoVital);

          case 3:
            result = _context.sent;
            console.log("TCL: addSignoVitalAccion -> result", result);
            return _context.abrupt("return", result);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function addSignoVitalAccion(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addSignoVitalAccion = addSignoVitalAccion;
//# sourceMappingURL=accionesSignoVital.js.map