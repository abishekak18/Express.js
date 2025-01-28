import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

//    ----- Third Party Middleware  -----

// CORS Middleware
app.use(cors());
 // app.use(cors({ origin: 'http://example.com' }));  // Allow only mentioned domain
app.use(morgan('dev'));   //  'combined' , 'tiny', 'dev', 'common'

// Morgan Middleware
app.use(morgan('combined'));
morgan.token('custom-ip', (req) => req.ip);
app.use(morgan(':method :url :status - IP: :custom-ip'));

// Helmet (Security Middleware)  ---Helmet helps secure your Express apps by setting various HTTP headers.

//  Compression (Response Compression Middleware)  ---Compression is a Node.js middleware that will attempt to compress response bodies for all request that traverse through the middleware.

//  Body Parser (Request Body Parsing Middleware)  ---Body parser is a middleware that parses the incoming request bodies before your handlers, available under the req.body property.

//  Cookie Parser (Cookie Parsing Middleware)  ---Cookie parser is a middleware that parses the cookies attached to the client request object.

//  Session (Session Middleware)  ---Session middleware is a middleware that allows you to store session data on the server.

//  Passport (Authentication Middleware)  ---Passport is an authentication middleware that allows you to authenticate users using different strategies.

//  Express Validator (Request Data Validation Middleware)  ---Express validator is a middleware that validates the request data before your handlers, available under the req.validationErrors() property.

//  Connect Flash (Flash Message Middleware)  ---Connect flash is a middleware that allows you to store messages in the session and retrieve them later.

//  Connect Mongo (MongoDB Session Store Middleware)  ---Connect Mongo is a middleware that allows you to store session data in MongoDB.

//  Express Rate Limit (Rate Limiting Middleware)  ---Express rate limit is a middleware that allows you to limit the number of requests per IP.

//  Express Sanitizer (Request Data Sanitization Middleware)  ---Express sanitizer is a middleware that sanitizes the request data before your handlers, available under the req.sanitize() property.

//  Express Router (Router Middleware)  ---Express router is a middleware that allows you to create modular, mountable route handlers.

//  Express Generator (Project Generator)  ---Express generator is a tool that generates an Express project structure.

//  Express Handlebars (View Engine Middleware)  ---Express handlebars is a view engine that allows you to render views using handlebars.

//  Express Session (Session Middleware)  ---Express session is a middleware that allows you to store session data on the server.

//  Express Flash (Flash Message Middleware)  ---Express flash is a middleware that allows you to store messages in the session and retrieve them later.


app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views', 'index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});