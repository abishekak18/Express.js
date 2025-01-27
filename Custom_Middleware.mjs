import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

//  ------- Custom Middleware -------

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}]`);
    next();
});

//    ----Custom Middleware With Specific Routes ----

const verify = (req, res, next) => {
    if (req.query.user === 'admin') {
        next();
    }else{
        res.send(403).send("Access Denied");
    }
};

app.get('/admin', verify, (req, res) => {
    res.send('Welcome Admin');
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