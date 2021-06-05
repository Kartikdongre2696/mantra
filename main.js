const MongoClient = require('mongodb').MongoClient;
const env = require("dotenv");
env.config();

const uri = process.env.URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  collection.
  client.close();
});