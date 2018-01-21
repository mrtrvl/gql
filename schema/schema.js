const { buildSchema } = require('graphql');

exports.schema = buildSchema(`
type Query {
    hello: String,
    africa: String
}
`);
