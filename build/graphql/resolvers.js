"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _accionesUsuario = require("./acciones/accionesUsuario");

var _accionesEnfermedad = require("./acciones/accionesEnfermedad");

var _accionesSignoVital = require("./acciones/accionesSignoVital");

var _uploader = require("./acciones/utils/uploader");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _books = [{
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K. Rowling'
}, {
  title: 'Jurassic Park',
  author: 'Michael Crichton'
}];
var foods = [{
  name: 'meat',
  cal: 200
}, {
  name: 'cookies',
  cal: 500
}]; // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

var resolvers = {
  Query: {
    books: function books() {
      return _books;
    },
    getUsuario: function () {
      var _getUsuario = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parent, data, context, info) {
        var usuario;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                usuario = context.usuario;
                _context.next = 4;
                return (0, _accionesUsuario.getUsuarioAccion)(usuario);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log("TCL: error", _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getUsuario(_x, _x2, _x3, _x4) {
        return _getUsuario.apply(this, arguments);
      }

      return getUsuario;
    }(),
    getEnfermedades: function () {
      var _getEnfermedades = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(parent, data, context, info) {
        var usuario;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                usuario = context.usuario;
                _context2.next = 4;
                return (0, _accionesUsuario.getEnfermedadesFromUsuarioAccion)(usuario._id);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("TCL: error", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function getEnfermedades(_x5, _x6, _x7, _x8) {
        return _getEnfermedades.apply(this, arguments);
      }

      return getEnfermedades;
    }(),
    getSignosVitales: function () {
      var _getSignosVitales = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parent, data, context, info) {
        var usuario;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                usuario = context.usuario;
                _context3.next = 4;
                return (0, _accionesUsuario.getSignosVitalesFromUsuarioAccion)(usuario._id);

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log("TCL: error", _context3.t0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function getSignosVitales(_x9, _x10, _x11, _x12) {
        return _getSignosVitales.apply(this, arguments);
      }

      return getSignosVitales;
    }()
  },
  Mutation: {
    //en todas las funciones de los resolves se reciben 4 parametros,
    // parent - funciones necesarias para manejo interno de graphql
    // data - argumentos de la funcion resolver
    // context - variables globales entre resolvers
    // info - informacion del user agent (quien pide la informacion)
    addUsuario: function () {
      var _addUsuario = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parent, data, context, info) {
        var _ref, createReadStream, stream, _ref2, url, infoUsuario;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return data.input.imagenPerfil;

              case 3:
                _ref = _context4.sent;
                createReadStream = _ref.createReadStream;
                stream = createReadStream();
                _context4.next = 8;
                return (0, _uploader.storeUpload)(stream, 'image');

              case 8:
                _ref2 = _context4.sent;
                url = _ref2.url;
                //registra usuario
                infoUsuario = _objectSpread({}, data.input, {
                  imagenPerfil: url
                });
                _context4.next = 13;
                return (0, _accionesUsuario.addUsuarioAccion)(infoUsuario);

              case 13:
                return _context4.abrupt("return", _context4.sent);

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);
                console.log("TCL: error", _context4.t0);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 16]]);
      }));

      function addUsuario(_x13, _x14, _x15, _x16) {
        return _addUsuario.apply(this, arguments);
      }

      return addUsuario;
    }(),
    addEnfermedad: function () {
      var _addEnfermedad = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parent, data, context, info) {
        var input, usuario, newEnfermedad, filter, update, updatedUsuario;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                input = data.input;
                usuario = context.usuario;
                _context5.next = 5;
                return (0, _accionesEnfermedad.addEnfermedadAccion)(input);

              case 5:
                newEnfermedad = _context5.sent;
                filter = {
                  _id: usuario._id
                };
                update = {
                  $push: {
                    'enfermedades': newEnfermedad._id
                  }
                };
                _context5.next = 10;
                return (0, _accionesUsuario.updateUsuarioAccion)(filter, update);

              case 10:
                updatedUsuario = _context5.sent;
                console.log("TCL: updatedUsuario", updatedUsuario);
                return _context5.abrupt("return", newEnfermedad);

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](0);
                console.log("TCL: error", _context5.t0);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 15]]);
      }));

      function addEnfermedad(_x17, _x18, _x19, _x20) {
        return _addEnfermedad.apply(this, arguments);
      }

      return addEnfermedad;
    }(),
    updateEnfermedadNombre: function () {
      var _updateEnfermedadNombre = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parent, data, context, info) {
        var nombre, enfermedadID, filter, update;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                nombre = data.nombre, enfermedadID = data.enfermedadID;
                filter = {
                  _id: enfermedadID
                };
                update = {
                  $set: {
                    nombre: nombre
                  }
                };
                _context6.next = 6;
                return (0, _accionesEnfermedad.updateEnfermedadAccion)(filter, update);

              case 6:
                return _context6.abrupt("return", _context6.sent);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                console.log("TCL: error", _context6.t0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9]]);
      }));

      function updateEnfermedadNombre(_x21, _x22, _x23, _x24) {
        return _updateEnfermedadNombre.apply(this, arguments);
      }

      return updateEnfermedadNombre;
    }(),
    updateEnfermedadDescipcion: function () {
      var _updateEnfermedadDescipcion = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(parent, data, context, info) {
        var descripcion, enfermedadID, filter, update;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                descripcion = data.descripcion, enfermedadID = data.enfermedadID;
                filter = {
                  _id: enfermedadID
                };
                update = {
                  $set: {
                    descripcion: descripcion
                  }
                };
                _context7.next = 6;
                return (0, _accionesEnfermedad.updateEnfermedadAccion)(filter, update);

              case 6:
                return _context7.abrupt("return", _context7.sent);

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);
                console.log("TCL: error", _context7.t0);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 9]]);
      }));

      function updateEnfermedadDescipcion(_x25, _x26, _x27, _x28) {
        return _updateEnfermedadDescipcion.apply(this, arguments);
      }

      return updateEnfermedadDescipcion;
    }(),
    updateEnfermedadCurada: function () {
      var _updateEnfermedadCurada = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(parent, data, context, info) {
        var curada, enfermedadID, filter, update;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                curada = data.curada, enfermedadID = data.enfermedadID;
                filter = {
                  _id: enfermedadID
                };
                update = {
                  $set: {
                    curada: curada
                  }
                };
                _context8.next = 6;
                return (0, _accionesEnfermedad.updateEnfermedadAccion)(filter, update);

              case 6:
                return _context8.abrupt("return", _context8.sent);

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](0);
                console.log("TCL: updateEnfermedadCurada: -> error", _context8.t0);

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 9]]);
      }));

      function updateEnfermedadCurada(_x29, _x30, _x31, _x32) {
        return _updateEnfermedadCurada.apply(this, arguments);
      }

      return updateEnfermedadCurada;
    }(),
    iniciarSesion: function () {
      var _iniciarSesion = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(parent, data, context, info) {
        var usuario, clave;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                usuario = data.usuario, clave = data.clave;
                _context9.next = 4;
                return (0, _accionesUsuario.iniciarSesionAccion)(usuario, clave);

              case 4:
                return _context9.abrupt("return", _context9.sent);

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                console.log("TCL: error", _context9.t0);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 7]]);
      }));

      function iniciarSesion(_x33, _x34, _x35, _x36) {
        return _iniciarSesion.apply(this, arguments);
      }

      return iniciarSesion;
    }(),
    addSignoVital: function () {
      var _addSignoVital = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(parent, data, context, info) {
        var signo, usuario, nuevoSigno, filter, update, usuarioActualizado;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                signo = data.signo;
                usuario = context.usuario;
                console.log("TCL: usuario", usuario);
                _context10.next = 6;
                return (0, _accionesSignoVital.addSignoVitalAccion)(signo);

              case 6:
                nuevoSigno = _context10.sent;
                filter = {
                  _id: usuario._id
                };
                update = {
                  $push: {
                    signosVitales: nuevoSigno._id
                  }
                }; //el objeto debe de llamarse igual que el esquema

                _context10.next = 11;
                return (0, _accionesUsuario.updateUsuarioAccion)(filter, update);

              case 11:
                usuarioActualizado = _context10.sent;
                console.log("TCL: usuarioActualizado", usuarioActualizado);
                return _context10.abrupt("return", nuevoSigno);

              case 16:
                _context10.prev = 16;
                _context10.t0 = _context10["catch"](0);
                console.log("TCL: error", _context10.t0);

              case 19:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 16]]);
      }));

      function addSignoVital(_x37, _x38, _x39, _x40) {
        return _addSignoVital.apply(this, arguments);
      }

      return addSignoVital;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;
//# sourceMappingURL=resolvers.js.map