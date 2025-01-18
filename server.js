const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars setup
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Session configuration
const sess = {
    secret: process.env.SESSION_SECRET || 'SuperSecretKey',
    cookie: { maxAge: 86400000, httpOnly: true, secure: false, sameSite: 'strict' },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize }),
};
app.use(session(sess));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

// 404 handler
app.use((req, res) => {
    res.status(404).render('404');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { message: 'Internal Server Error' });
});

// Start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}).catch(err => console.error('Database sync failed:', err));