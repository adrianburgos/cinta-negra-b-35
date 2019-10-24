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

const persons = [
    {
        name: 'Adrian',
        age: 27,
        books
    },
    {
        name: 'Jenny',
        age: 26,
        books
    }
]

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
		books: () => books,
        foods: () => foods,
        persons: () => persons
    },
};

export default resolvers;