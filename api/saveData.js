import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body;
        
        console.log(`Received data: ${name}, ${email}`);
        
        // Define the file path
        const filePath = path.join(process.cwd(), 'data.txt');
        
        // Format data as a string
        const data = `Name: ${name}, Email: ${email}\n`;
        
        // Append data to the file
        fs.appendFile(filePath, data, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).json({ message: 'Error saving data' });
            }
            return res.status(200).json({ message: 'Data saved successfully!' });
        });
    } else {
        return res.status(404).json({ message: 'Route not found' });
    }
}