// //Dependencies and Initial Setup


// const express = require('express');
// //Imports the Express framework for building web applications.

// const path = require('path');
// //Imports Node.js’s built-in path module to handle file and directory paths.

// const session = require('express-session');
// //Imports express-session for managing user sessions.

// const exphbs = require('express-handlebars');
// //Imports express-handlebars, a templating engine for dynamic HTML rendering.

// require('dotenv').config();
// //Loads environment variables from a .env file into process.env.

// console.log('Dependencies loaded successfully.');
// // Logs a message to indicate successful loading of dependencies.

// // Sequelize and Session Store
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// // Configures Sequelize as a session store for express-session.

// const sequelize = require('./config/connection'); // Adjust to your Sequelize instance
// // Imports the Sequelize database connection.

// const routes = require('./controllers');
// // Imports application routes.

// const helpers = require('./utils/helpers');
// // Imports utility/helper functions.


// // Express Application Setup
// const app = express();
// // Initializes an Express application.
// const PORT = process.env.PORT || 3002;////////////////////////////////////////////change this port
// // Sets the port for the application (default: 3001).

// console.log(`Application initialized. PORT set to ${PORT}`);
// // Logs the port information.

// // Handlebars setup
// const hbs = exphbs.create({ helpers });
// // Creates a Handlebars instance, including custom helper functions.





// app.engine('handlebars', hbs.engine);
// // Sets Handlebars as the template engine for the application.
// app.set('view engine', 'handlebars');
// // Specifies Handlebars as the default view engine.
// // app.set('views', path.join(__dirname, 'views'));
// // Sets the directory for Handlebars view templates.
// console.log('Handlebars setup complete.');
// // Logs the completion of the Handlebars setup.

// // Session configuration
// const sess = {
//   secret: process.env.SESSION_SECRET || 'SuperSecretKey', // Replace with a secure key in production
//   cookie: {
//     maxAge: 300000, // 24 hours in milliseconds
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production', // Ensure HTTPS in production
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };
// // Defines the session configuration with options such as a secret key, cookie settings, and the Sequelize session store.
// console.log('Session configuration set:', sess);
// // Logs the session configuration.
// app.use(session(sess));
// // Adds session handling middleware to the application.

// // Middleware
// app.use(express.json());
// // Adds middleware to parse JSON request bodies.
// console.log('JSON middleware added.');
// // Logs the addition of JSON middleware.
// app.use(express.urlencoded({ extended: true }));
// // Adds middleware to parse URL-encoded request bodies.
// console.log('URL-encoded middleware added.');
// // Logs the addition of URL-encoded middleware.
// app.use(express.static(path.join(__dirname, 'public')));
// // Serves static files (e.g., CSS, JavaScript) from the public directory.
// console.log('Static middleware added with path:', path.join(__dirname, 'public'));
// // Logs the path of the static middleware.

// // Routes
// app.use(routes);
// // Adds application routes.
// console.log('Routes added.');
// // Logs the addition of routes.

// // Start server
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log('Database synced successfully.');
//   //  Syncs the database models with the database.  
//     app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
//   })
//   // Starts the server and listens for connections on the specified port.
//   .catch((err) => {
//     console.error('Database sync failed:', err);
//   });
//   // Logs an error if the database sync fails.











////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////this is starterserver.js code below

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

















  

