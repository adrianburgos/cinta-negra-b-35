import { gql } from 'apollo-server';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`

    directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD
	# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

	# This "Book" type defines the queryable fields for every book in our data source.
	type Book {
		title: String
		author: String
    }
    
    type Food {
		name: String
		cal: Int
    }
    
    type Token{
        token: String,
    }

	type Usuario {
        _id: ID
        nombre: String
        apellido: String
        email: String
        genero: String
        clave: String
        enfermedades: [Enfermedad]
        signosVitales: [SignoVital]
    }
    
    input UsuarioInput {
        nombre: String
        apellido: String
        email: String
        genero: String
        clave: String
        imagenPerfil: Upload
    }

    type Enfermedad {
        _id: ID
        tipo: String
        nombre: String
        descripcion: String
        curada: Boolean
    }
    
    input EnfermedadInput {
        tipo: String
        nombre: String
        descripcion: String
    }

    type SignoVital{
        _id: ID
        tipoSigno: String
        valorInferior: String
        valorSuperior: String
        dimensionales: String
    }

    input SignoVitalInput{
        tipoSigno: String
        valorInferior: String
        valorSuperior: String
        dimensionales: String
    }
    
    

	# The "Query" type is special: it lists all of the available queries that
	# clients can execute, along with the return type for each. In this
	# case, the "books" query returns an array of zero or more Books (defined above).
	type Query {
        books: [Book] @AuthDirective,
        getUsuario: Usuario
    }
    
    type Mutation {
        addUsuario(input: UsuarioInput): Token
        addEnfermedad(input: EnfermedadInput): Enfermedad @AuthDirective
        updateEnfermedadNombre(nombre: String, enfermedadID: ID): Enfermedad @AuthDirective
        updateEnfermedadDescipcion(descripcion: String, enfermedadID: ID): Enfermedad @AuthDirective
        updateEnfermedadCurada(curada: Boolean, enfermedadID: ID): Enfermedad @AuthDirective
        addSignoVital(signo: SignoVitalInput): SignoVital @AuthDirective
        iniciarSesion(usuario: String, clave: String): Token
    }
`;

export default typeDefs;