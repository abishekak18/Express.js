import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

//    ----- Error Handling Middleware  -----

const errorHandler = (err, req, res, next) => {
    console.error("Error:",err.message);
    res.status(500).send('Something broke!');
};

app.get('/error', (req, res, next) => {
    next(new Error('Something went wrong'));
});


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