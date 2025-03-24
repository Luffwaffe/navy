// Vercel Serverless Function to handle POST request
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { fullName, phoneNumber } = req.body;  // Example data from frontend
      
      // You can add backend logic here (e.g., save data to a database or send it to a Google Sheet)
      console.log(`Received data: ${fullName}, ${phoneNumber}`);
      // const { MongoClient } = require("mongodb");

      // Replace with your MongoDB connection string
      const uri = "mongodb://localhost:27017"; // For local MongoDB
      
      // Respond with a success message
      return res.status(200).json({ message: 'Data saved successfully!' });
      
    } else {
      return res.status(404).json({ message: 'Route not found' });
    }
  }
  