const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err) {
    if (err) {
        console.error('Error occurred while connecting to MongoDB', err);
        return;
    }
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    // You can perform database operations here

    // Close the connection
    client.close();
});