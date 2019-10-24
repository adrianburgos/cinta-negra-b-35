import {UserModel} from '../dataBase/models'

const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
];

const foods = [
	{
		name: 'meat',
		cal: 200
	},
	{
		name: 'cookies',
		cal: 500
	}
]


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
		books: () => books
    },
    Mutation: {
        //en todas las funciones de los resolves se reciben 4 parametros,
        // parent - funciones necesarias para manejo interno de graphql
        // data - argumentos de la funcion resolver
        // context - variables globales entre resolvers
        // info - informacion del user agent (quien pide la informacion)
        addUser: async (parent, data, context, info) => {
            try {
                const newUser = await UserModel.create(data.data);
                console.log(newUser);
            } catch (error) {
                console.log(error);
            }
        }
    }
};

export default resolvers;