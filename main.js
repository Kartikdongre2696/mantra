const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mantra:Kartik@123@cluster01.pakor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  collection.
  client.close();
});