"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n\n    directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD\n\n    scalar Date\n\t# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\n\n\t# This \"Book\" type defines the queryable fields for every book in our data source.\n\ttype Book {\n\t\ttitle: String\n\t\tauthor: String\n    }\n    \n    type Food {\n\t\tname: String\n\t\tcal: Int\n    }\n    \n    type Token{\n        token: String,\n    }\n\n\ttype Usuario {\n        _id: ID\n        nombre: String\n        apellido: String\n        email: String\n        genero: String\n        clave: String\n        enfermedades: [Enfermedad]\n        signosVitales: [SignoVital]\n    }\n    \n    input UsuarioInput {\n        nombre: String\n        apellido: String\n        email: String\n        genero: String\n        clave: String\n        imagenPerfil: Upload\n    }\n\n    type Enfermedad {\n        _id: ID\n        tipo: String\n        nombre: String\n        descripcion: String\n        curada: Boolean\n    }\n    \n    input EnfermedadInput {\n        tipo: String\n        nombre: String\n        descripcion: String\n    }\n\n    type SignoVital{\n        _id: ID\n        tipoSigno: String\n        valorInferior: String\n        valorSuperior: String\n        dimensionales: String\n        createdAt: Date\n        updatedAt: Date\n    }\n\n    input SignoVitalInput{\n        tipoSigno: String\n        valorInferior: String\n        valorSuperior: String\n        dimensionales: String\n    }\n    \n    \n\n\t# The \"Query\" type is special: it lists all of the available queries that\n\t# clients can execute, along with the return type for each. In this\n\t# case, the \"books\" query returns an array of zero or more Books (defined above).\n\ttype Query {\n        books: [Book] @AuthDirective\n        getUsuario: Usuario @AuthDirective\n        getEnfermedades: [Enfermedad] @AuthDirective\n        getSignosVitales: [SignoVital] @AuthDirective\n    }\n    \n    type Mutation {\n        addUsuario(input: UsuarioInput): Token\n        addEnfermedad(input: EnfermedadInput): Enfermedad @AuthDirective\n        updateEnfermedadNombre(nombre: String, enfermedadID: ID): Enfermedad @AuthDirective\n        updateEnfermedadDescipcion(descripcion: String, enfermedadID: ID): Enfermedad @AuthDirective\n        updateEnfermedadCurada(curada: Boolean, enfermedadID: ID): Enfermedad @AuthDirective\n        addSignoVital(signo: SignoVitalInput): SignoVital @AuthDirective\n        iniciarSesion(usuario: String, clave: String): Token\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
var typeDefs = (0, _apolloServer.gql)(_templateObject());
var _default = typeDefs;
exports["default"] = _default;
//# sourceMappingURL=schema.js.map