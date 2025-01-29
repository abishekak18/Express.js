import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// check email is valid or not
app.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],

  //  curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"name": "Abishek", "email": "abishek@example.com", "password": "mypassword"}'

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User registered successfully!');
  }
);


// check email already exists or not

const existingUsers = ['test@example.com', 'user@example.com'];

app.post(
  '/register',
  [
    body('email')
      .isEmail()
      .withMessage('Invalid email')
      .custom(async (value) => {
        if (existingUsers.includes(value)) {
          throw new Error('Email already in use');
        }
        return true;
      }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Registration successful');
  }
);

// if password have atleadt one uppercase letter or not

app.post(
    '/signup',
    [
      body('password')
        .custom((value) => {
          if (!/[A-Z]/.test(value)) {
            throw new Error('Password must contain at least one uppercase letter');
          }
          return true;
        })
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      res.send('Signup successful!');
    }
  );
  


app.listen(3000, () => console.log('Server running on port 3000'));
