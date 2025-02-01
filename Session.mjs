import express from 'express';
import session from 'express-session';

const app = express();

/*The session middleware is used to store session data on the server. This data is then associated with a session ID, which is stored in a cookie on the client side. The session data can be accessed and modified throughout the user's session.*/
/*
secret: A string (or array) used to sign the session ID cookie. This ensures the cookie cannot be tampered with.
resave: When set to false, the session is not saved back to the session store if it wasn’t modified during the request.
saveUninitialized: When set to true, sessions that are new but not modified will be saved. Setting this to false is often preferred for login sessions or compliance reasons.
cookie: Contains settings for the session cookie (e.g., maxAge, secure, httpOnly). Note that if you set secure: true, the cookie will only be sent over HTTPS.*/
// Configure session middleware
app.use(session({
  secret: 'yourSecretKey',       // Replace with your secret
  resave: false,                 // Do not save session if unmodified
  saveUninitialized: true,       // Save new sessions
  cookie: {
    maxAge: 86400000,            // 1 day in milliseconds
    secure: false                // Set to true if using HTTPS
  }
}));

// Route to demonstrate session usage
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`<p>You have visited this page ${req.session.views} times</p>`);
  } else {
    req.session.views = 1;
    res.send('Welcome! Refresh the page to start tracking views.');
  }
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
