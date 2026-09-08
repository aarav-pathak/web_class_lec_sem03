const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h2>Welcome to the App</h2><p><a href="/login">Login</a> or <a href="/signup">Signup</a></p>');
});

// Signup Route
app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.render('signup', { error: 'Username already exists' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Save user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.render('signup', { error: 'An error occurred during signup' });
    }
});

// Login Route
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user
        const user = await User.findOne({ username });
        if (!user) {
            return res.render('login', { error: 'Invalid username or password' });
        }

        // Verify password using bcrypt.compare
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.send(`<div style="font-family: sans-serif; text-align: center; margin-top: 50px;"><h2>Welcome, ${username}!</h2><p>Login successful.</p><a href="/login" style="padding: 10px; background-color: #dc3545; color: white; text-decoration: none; border-radius: 3px;">Logout</a></div>`);
        } else {
            res.render('login', { error: 'Invalid username or password' });
        }
    } catch (err) {
        console.error(err);
        res.render('login', { error: 'An error occurred during login' });
    }
});

module.exports = app;
