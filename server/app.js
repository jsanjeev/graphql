const express = require('express');
const graphQlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb://jsanjeev:test1234@ds139841.mlab.com:39841/graphql');

mongoose.connection.once('open', () => {
  console.log('Connected to database.')
})

app.use("/graphql", graphQlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening for request on port 4000');
})
