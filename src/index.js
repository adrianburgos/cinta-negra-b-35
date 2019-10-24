import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';


const url = process.env.DATA_BASE;
mongoose.connect(url, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});
const mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, "Error de conexion!!!"));
mongodb.on('open', () => console.log('Conectado a BD'));

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});