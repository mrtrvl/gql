require('dotenv').config();
const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const port = process.env.PORT;

/* const schema = buildSchema(`
    type Query {
        hello: String
    }
`); */

const { schema } = require('./schema/schema');

const root = { africa: () => 'Hello Africa!' };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`Server running on port: ${ port }`);
});