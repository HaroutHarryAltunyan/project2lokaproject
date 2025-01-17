const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars.js: Template engine with custom helpers
const hbs = exphbs.create({ helpers });

// Configure session with Sequelize storage
const sess = {
  secret: process.env.SESSION_SECRET || 'Super secret secret',
  cookie: {
    maxAge: 300000, // 5 minutes
    httpOnly: true, // Prevent client-side JavaScript from accessing cookies
    secure: process.env.NODE_ENV === 'production', // Set secure cookies in production
    sameSite: 'strict', // Protect against CSRF
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set Handlebars.js as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// API and View routes
app.use(routes);

// Catch-all for handling 404 errors
app.use((req, res) => {
  res.status(404).render('404', { layout: false });
});

// Start the server and connect to the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to sync database:', err);
});