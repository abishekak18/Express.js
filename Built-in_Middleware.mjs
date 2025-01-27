import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());                // Parses incoming JSON requests and populates req.body

app.use(express.static('public'));     // Serve static files from 'public' directory

app.use(express.urlencoded({ extended: true })); // Parses incoming requests with urlencoded payloads and is based on body-parser

app.use(express.text());                // Parses incoming requests with text payloads

app.use(express.raw());                 // Parses incoming raw requests body as BUFFER

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views', 'index.html'));
});

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});