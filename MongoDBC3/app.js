// Require the MongoDB Node.js Driver
const { MongoClient } = require('mongodb');

// Connection URI for MongoDB (replace with your connection string)
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

// Database Name
const dbName = 'sampleDB'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // Select the database
        const db = client.db(dbName);

        // Insert a document
        await insertDocument(db);

        // Find documents
        await findDocuments(db);
    } catch (err) {
        console.error(err);
    } finally {
        // Close the client connection
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

async function insertDocument(db) {
    // Get the collection
    const collection = db.collection('documents');

    // Insert a single document
    const result = await collection.insertOne({ name: 'John Doe', age: 30 });
    console.log(`Document inserted with _id: ${result.insertedId}`);
}

async function findDocuments(db) {
    // Get the collection
    const collection = db.collection('documents');

    // Find all documents
    const cursor = collection.find();

    // Print documents
    await cursor.forEach(doc => {
        console.log(doc);
    });
}
main().catch(console.error);
