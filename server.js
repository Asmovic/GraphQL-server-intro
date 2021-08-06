const express = require('express'),
    expressGraphQL = require('express-graphql').graphqlHTTP,
    app = express(),
    schema = require('./schema/schema'),
    PORT = process.env.PORT || 5000;

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.send("Welcome to GraphQL");
});

app.listen(PORT, () => console.log('Server running on PORT ' + PORT));