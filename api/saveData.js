import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phoneNumber } = req.body;
    console.log(`Received data: ${fullName}, ${phoneNumber}`);
    
    const { MongoClient } = require("mongodb");
    const uri = "mongodb+srv://khuathongquan8396:Hohenzollern1996@quankh.nrja9.mongodb.net/?retryWrites=true&w=majority&appName=quankh"

    const client = new MongoClient(uri);

    async function run() {
    try {
      // Connect to the MongoDB cluster
      await client.connect();

      console.log("Connected to MongoDB!");

      // Specify the database and collection
      const db = client.db("myDatabase");
      const collection = db.collection("myCollection");

      // Sample data to insert
      const data = { name: "Alice", age: 30, city: "New York" };

      // Insert one document
      const result = await collection.insertOne(data);

      console.log(`Data inserted with _id: ${result.insertedId}`);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      } finally {
        await client.close(); // Close the connection
      }
    }

    run().catch(console.dir);
    
  } else {
    return res.status(404).json({ message: 'Route not found' });
  }
}

  