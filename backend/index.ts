import express, { Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { sendContactEmail } from './send-email';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Contact Form API Endpoint
 */
app.post('/api/contact', async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Replace with the email address where you want to receive messages
        await sendContactEmail(
            "clientemail@example.com",
            `New Message from ${name}`,
            `Sender: ${name} (${email})\n\nMessage:\n${message}`
        );

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error: Failed to send message' });
    }
});

// Serve static React build files
// This assumes your frontend build output is in the 'build' directory
const buildPath = path.join(__dirname, '../build');
app.use(express.static(buildPath));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
