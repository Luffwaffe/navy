// Vercel Serverless Function to handle POST request
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phoneNumber } = req.body;  // Data from the frontend
    
    // Log received data (for debugging purposes)
    console.log(`Received data: ${fullName}, ${phoneNumber}`);

    // Define the file path (in this case, saving to 'data.txt')
    const filePath = path.join(process.cwd(), 'data.txt');

    // Prepare the data to be saved
    const data = `Full Name: ${fullName}, Phone Number: ${phoneNumber}\n`;

    // Write data to the file
    fs.appendFile(filePath, data, (err) => {
      if (err) {
        console.error('Error writing to file', err);
        return res.status(500).json({ message: 'Error saving data to file' });
      }

      // Respond with a success message
      return res.status(200).json({ message: 'Data saved successfully!' });
    });
    
  } else {
    return res.status(404).json({ message: 'Route not found' });
  }
}

  