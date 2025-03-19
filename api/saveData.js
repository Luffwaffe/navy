import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        // const { name, email } = req.body;
        
        console.log(`Received data: ${name}, ${email}`);
        
        // Append data to the file
        const name = "quan";
        const email = "khuat";

        fetch("https://docs.google.com/spreadsheets/d/1X5lgewYPnPRbAXMF52DJ3aXXZO966zs8YhCtQOkXslI", { 
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: { "Content-Type": "application/json" }
        })
    } else {
        return res.status(404).json({ message: 'Route not found' });
    }
}