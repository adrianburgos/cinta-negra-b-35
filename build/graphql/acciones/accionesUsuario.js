"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSignosVitalesFromUsuarioAccion = exports.getEnfermedadesFromUsuarioAccion = exports.getUsuarioAccion = exports.iniciarSesionAccion = exports.buscarUsuarioAccion = exports.updateUsuarioAccion = exports.addUsuarioAccion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _models = require("../../dataBase/models");

Date.prototype.agregarDias = function (dias) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + dias);
  return date;
};

var crearToken = function crearToken(dataUsuario) {
  //fecha de expiracion para el token (hoy + 5 dias)
  var exp = new Date().agregarDias(5).getTime();
  var payload = {
    _id: dataUsuario._id,
    email: dataUsuario.email,
    nombre: dataUsuario.nombre,
    apellido: dataUsuario.apellido,
    genero: dataUsuario.genero,
    exp: exp
  };

  var token = _jsonwebtoken["default"].sign(payload, process.env.JWT);

  return token;
};

var addUsuarioAccion =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(usuario) {
    var nuevoUsuario, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.UsuarioModel.create(usuario);

          case 3:
            nuevoUsuario = _context.sent;
            token = crearToken(nuevoUsuario);
            return _context.abrupt("return", {
              token: token
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log("TCL: addUsuarioAccion -> error", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function addUsuarioAccion(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Actualiza al usuario indicado en el filtro
 * @param {JSON} filter - valores para realizar la consulta
 * @param {JSON} update - datos a ser acutalizados
 */


exports.addUsuarioAccion = addUsuarioAccion;

var updateUsuarioAccion =
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
            return _context2.abrupt("return", _models.UsuarioModel.findOneAndUpdate(filter, update, {
              "new": true
            }));

          case 4:
            _context2.prev = 4;
            _context2.t0 = _context2["catch"](0);
            console.log("TCL: updateUsuarioAccion -> error", _context2.t0);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 4]]);
  }));

  return function updateUsuarioAccion(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateUsuarioAccion = updateUsuarioAccion;

var buscarUsuarioAccion =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(filter) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.UsuarioModel.findOne(filter);

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.log("TCL: buscarUsuarioAccion -> error", _context3.t0);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function buscarUsuarioAccion(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.buscarUsuarioAccion = buscarUsuarioAccion;

var iniciarSesionAccion =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(correoUsuario, clave) {
    var filter, usuario, valido, token;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            filter = {
              email: correoUsuario
            };
            _context4.next = 4;
            return buscarUsuarioAccion(filter);

          case 4:
            usuario = _context4.sent;
            console.log(usuario);
            _context4.next = 8;
            return _bcrypt["default"].compare(clave, usuario.clave);

          case 8:
            valido = _context4.sent;

            if (!valido) {
              _context4.next = 12;
              break;
            }

            token = crearToken(usuario);
            return _context4.abrupt("return", {
              token: token
            });

          case 12:
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            console.log("TCL: iniciarSesionAccion -> error", _context4.t0);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));

  return function iniciarSesionAccion(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

exports.iniciarSesionAccion = iniciarSesionAccion;

var getUsuarioAccion =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(usuario) {
    var infoUsuario;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _models.UsuarioModel.findById(usuario._id).populate('enfermedades').populate('signosVitales');

          case 3:
            infoUsuario = _context5.sent;
            console.log("TCL: getUsuarioAccion -> infoUsuario", infoUsuario);
            return _context5.abrupt("return", infoUsuario);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log("TCL: getUsuarioAccion -> error", _context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function getUsuarioAccion(_x7) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getUsuarioAccion = getUsuarioAccion;

var getEnfermedadesFromUsuarioAccion =
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(usuarioID) {
    var infoUsuario, enfermedades;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _models.UsuarioModel.findById(usuarioID).populate('enfermedades');

          case 3:
            infoUsuario = _context6.sent;
            enfermedades = infoUsuario.enfermedades;
            return _context6.abrupt("return", enfermedades);

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log("TCL: getEnfermedadesFromUsuarioAccion -> error", _context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function getEnfermedadesFromUsuarioAccion(_x8) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getEnfermedadesFromUsuarioAccion = getEnfermedadesFromUsuarioAccion;

var getSignosVitalesFromUsuarioAccion =
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(usuarioID) {
    var infoUsuario, signosVitales;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _models.UsuarioModel.findById(usuarioID).populate('signosVitales');

          case 3:
            infoUsuario = _context7.sent;
            signosVitales = infoUsuario.signosVitales;
            return _context7.abrupt("return", signosVitales);

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log("TCL: getSignosVitalesFromUsuarioAccion -> error", _context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function getSignosVitalesFromUsuarioAccion(_x9) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getSignosVitalesFromUsuarioAccion = getSignosVitalesFromUsuarioAccion;
//# sourceMappingURL=accionesUsuario.js.map