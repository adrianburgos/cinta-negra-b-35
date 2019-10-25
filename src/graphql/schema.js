import { gql } from 'apollo-server';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
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

	type Usuario {
        _id: ID
        nombre: String
        apellido: String
        email: String
        genero: String
    }
    
    input UsuarioInput {
        nombre: String
        apellido: String
        email: String
        genero: String
    }

    type Enfermedad {
        _id: ID
        tipo: String
        nombre: String
        descripcion: String
    }
    
    input EnfermedadInput {
        tipo: String
        nombre: String
        descripcion: String
    }
    
    

	# The "Query" type is special: it lists all of the available queries that
	# clients can execute, along with the return type for each. In this
	# case, the "books" query returns an array of zero or more Books (defined above).
	type Query {
		books: [Book]
    }
    
    type Mutation {
        addUsuario(input: UsuarioInput): Usuario
        addEnfermedad(input: EnfermedadInput, usuarioID: String): Enfermedad
    }
`;

export default typeDefs;