// Vercel Serverless Function to handle POST request
import { MongoClient } from "mongodb";
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { fullName, phoneNumber } = req.body;  // Example data from frontend
      
      // You can add backend logic here (e.g., save data to a database or send it to a Google Sheet)
      console.log(`Received data: ${fullName}, ${phoneNumber}`);      
      // Respond with a success message
      return res.status(200).json({ message: 'Data saved successfully!' });
      
    } else {
      return res.status(404).json({ message: 'Route not found' });
    }
  }
  