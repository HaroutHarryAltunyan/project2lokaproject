// // //Dependencies and Initial Setup :
// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// // // Imports application routes.
// const helpers = require('./utils/helpers');

// // console.log('Dependencies loaded successfully.');
// // // Logs a message to indicate successful loading of dependencies.

// // require('dotenv').config(); 
// // //Loads environment variables from a .env file into process.env.

// const sequelize = require('./config/connection');
// // // Imports the Sequelize database connection.

// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// // // Configures Sequelize as a session store for express-session.

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Set up Handlebars.js engine with custom helpers
// const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// // Inform Express.js on which template engine to use
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });



// this code doesnt let homepage navbar work 
// Error: Failed to lookup view "404" in views directory "/Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/views"
//     at Function.render (/Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/application.js:597:17)
//     at ServerResponse.render (/Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/response.js:1049:7)
//     at /Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/controllers/index.js:19:19
//     at Layer.handle [as handle_request] (/Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/router/layer.js:95:5)
//     at trim_prefix (/Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/router/index.js:328:13)
//     at /Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/router/index.js:286:9
//     at Function.process_params (/Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/router/index.js:346:12)
//     at next (/Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/router/index.js:280:10)
//     at /Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/router/index.js:646:15
//     at next (/Users/haroutaltunyan/Desktop/bootcamp2024/project2lokaproject/project2lokaproject/node_modules/express/lib/router/index.js:265:14)





























// // --------------------------------------------this code had issues with error handling 
// // 
// // 
// // 
// // const express = require('express'); !

// // const path = require('path'); !

// // const session = require('express-session'); !

// // const exphbs = require('express-handlebars'); !

// // require('dotenv').config(); 

// // console.log('Dependencies loaded successfully.');

// // const SequelizeStore = require('connect-session-sequelize')(session.Store); !
// // const sequelize = require('./config/connection'); !
// // const routes = require('./controllers'); !
// // const helpers = require('./utils/helpers'); !

// // const app = express(); !
// // const PORT = process.env.PORT || 3001;!

// // console.log(`Application initialized. PORT set to ${PORT}`);

// // // Handlebars setup
// // const hbs = exphbs.create({ helpers });
// // app.engine('handlebars', hbs.engine);
// // app.set('view engine', 'handlebars');
// // app.set('views', path.join(__dirname, 'views'));
// // console.log('Handlebars setup complete.');

// // // Session configuration
// // const sess = {
// //     secret: process.env.SESSION_SECRET || 'SuperSecretKey',
// //     cookie: { maxAge: 86400000, httpOnly: true, secure: false, sameSite: 'strict' },
// //     resave: false,
// //     saveUninitialized: true,
// //     store: new SequelizeStore({ db: sequelize }),
// // };
// // console.log('Session configuration set:', sess);
// // app.use(session(sess));

// // // Middleware
// // app.use(express.json());
// // console.log('JSON middleware added.');
// // app.use(express.urlencoded({ extended: true }));
// // console.log('URL-encoded middleware added.');
// // app.use(express.static(path.join(__dirname, 'public')));
// // console.log('Static middleware added with path:', path.join(__dirname, 'public'));

// // // Routes
// // app.use(routes);
// // console.log('Routes added.');

// // // 404 handler
// // app.use((req, res) => {
// //     console.log(`404 error for URL: ${req.url}`);
// //     res.status(404).render('404');
// // });

// // // Error handler
// // app.use((err, req, res, next) => {
// //     const status = err.status || 500;
// //     const message = err.message || 'Internal Server Error';
// //     console.error(`Error occurred: ${message}`);
// //     console.error(err.stack);
// //     res.status(status).render('error', { status, message });
// // });

// // // Start server
// // sequelize.sync({ force: false }).then(() => {
// //     console.log('Database synced successfully.');
// //     app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
// // }).catch(err => {
// //     console.error('Database sync failed:', err);
// // });





// //-----------------------------------------------------------------------------------------------------------------------------------------------------this one below is updated code 


//Dependencies and Initial Setup


const express = require('express');
//Imports the Express framework for building web applications.

const path = require('path');
//Imports Node.js’s built-in path module to handle file and directory paths.

const session = require('express-session');
//Imports express-session for managing user sessions.

const exphbs = require('express-handlebars');
//Imports express-handlebars, a templating engine for dynamic HTML rendering.

require('dotenv').config();
//Loads environment variables from a .env file into process.env.








console.log('Dependencies loaded successfully.');
// Logs a message to indicate successful loading of dependencies.

// Sequelize and Session Store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Configures Sequelize as a session store for express-session.

const sequelize = require('./config/connection'); // Adjust to your Sequelize instance
// Imports the Sequelize database connection.

const routes = require('./controllers');
// Imports application routes.

const helpers = require('./utils/helpers');
// Imports utility/helper functions.


// Express Application Setup
const app = express();
// Initializes an Express application.
const PORT = process.env.PORT || 3001;
// Sets the port for the application (default: 3001).

console.log(`Application initialized. PORT set to ${PORT}`);
// Logs the port information.

// Handlebars setup
const hbs = exphbs.create({ helpers });
// Creates a Handlebars instance, including custom helper functions.





app.engine('handlebars', hbs.engine);
// Sets Handlebars as the template engine for the application.
app.set('view engine', 'handlebars');
// Specifies Handlebars as the default view engine.
// app.set('views', path.join(__dirname, 'views'));
// Sets the directory for Handlebars view templates.
console.log('Handlebars setup complete.');
// Logs the completion of the Handlebars setup.

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET || 'SuperSecretKey', // Replace with a secure key in production
  cookie: {
    maxAge: 300000, // 24 hours in milliseconds
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Ensure HTTPS in production
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// Defines the session configuration with options such as a secret key, cookie settings, and the Sequelize session store.
console.log('Session configuration set:', sess);
// Logs the session configuration.
app.use(session(sess));
// Adds session handling middleware to the application.

// Middleware
app.use(express.json());
// Adds middleware to parse JSON request bodies.
console.log('JSON middleware added.');
// Logs the addition of JSON middleware.
app.use(express.urlencoded({ extended: true }));
// Adds middleware to parse URL-encoded request bodies.
console.log('URL-encoded middleware added.');
// Logs the addition of URL-encoded middleware.
app.use(express.static(path.join(__dirname, 'public')));
// Serves static files (e.g., CSS, JavaScript) from the public directory.
console.log('Static middleware added with path:', path.join(__dirname, 'public'));
// Logs the path of the static middleware.

// Routes
app.use(routes);
// Adds application routes.
console.log('Routes added.');
// Logs the addition of routes.

// Start server
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database synced successfully.');
  //  Syncs the database models with the database.  
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  // Starts the server and listens for connections on the specified port.
  .catch((err) => {
    console.error('Database sync failed:', err);
  });
  // Logs an error if the database sync fails.




// =============================================================================================================USE THIS CODE FROM ABOVE ^

  //break












  

// const express = require('express');
// const path = require('path');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// require('dotenv').config();

// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sequelize = require('./config/connection');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Handlebars setup
// const hbs = exphbs.create({ helpers });
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));

// // Session configuration
// const sess = {
//     secret: process.env.SESSION_SECRET || 'SuperSecretKey',
//     cookie: { maxAge: 86400000, httpOnly: true, secure: false, sameSite: 'strict' },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({ db: sequelize }),
// };
// app.use(session(sess));

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.use(routes);

// // 404 handler
// app.use((req, res) => {
//     res.status(404).render('404');
// });

// // Error handler
// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || 'Internal Server Error';
//     console.error(err.stack);
//     res.status(status).render('error', { status, message });
// });

// // Start server
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
// }).catch(err => console.error('Database sync failed:', err));





// const express = require('express');
// const path = require('path');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// require('dotenv').config();

// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sequelize = require('./config/connection');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Handlebars setup
// const hbs = exphbs.create({ helpers });
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));

// // Session configuration
// const sess = {
//     secret: process.env.SESSION_SECRET || 'SuperSecretKey',
//     cookie: { maxAge: 86400000, httpOnly: true, secure: false, sameSite: 'strict' },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({ db: sequelize }),
// };
// app.use(session(sess));

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.use(routes);

// // 404 handler
// app.use((req, res) => {
//     res.status(404).render('404');
// });

// // Error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).render('error', { message: 'Internal Server Error' });
// });

// // Start server
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
// }).catch(err => console.error('Database sync failed:', err));

// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || 'Internal Server Error';
  
//     console.error(err.stack);
  
//     res.status(status).render('error', {
//       status,
//       message,
//     });
//   });

//   const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super Secret',
//   cookie: { maxAge: 60000 },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize, // Ensure `sequelize` is properly configured
//   }),
// };

// app.use(session(sess));