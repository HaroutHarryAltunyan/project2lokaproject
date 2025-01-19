// --------------------------------------------this code had issues with error handling 
// 
// 
// 
// const express = require('express');
// const path = require('path');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// require('dotenv').config();

// console.log('Dependencies loaded successfully.');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sequelize = require('./config/connection');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// console.log(`Application initialized. PORT set to ${PORT}`);

// // Handlebars setup
// const hbs = exphbs.create({ helpers });
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));
// console.log('Handlebars setup complete.');

// // Session configuration
// const sess = {
//     secret: process.env.SESSION_SECRET || 'SuperSecretKey',
//     cookie: { maxAge: 86400000, httpOnly: true, secure: false, sameSite: 'strict' },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({ db: sequelize }),
// };
// console.log('Session configuration set:', sess);
// app.use(session(sess));

// // Middleware
// app.use(express.json());
// console.log('JSON middleware added.');
// app.use(express.urlencoded({ extended: true }));
// console.log('URL-encoded middleware added.');
// app.use(express.static(path.join(__dirname, 'public')));
// console.log('Static middleware added with path:', path.join(__dirname, 'public'));

// // Routes
// app.use(routes);
// console.log('Routes added.');

// // 404 handler
// app.use((req, res) => {
//     console.log(`404 error for URL: ${req.url}`);
//     res.status(404).render('404');
// });

// // Error handler
// app.use((err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || 'Internal Server Error';
//     console.error(`Error occurred: ${message}`);
//     console.error(err.stack);
//     res.status(status).render('error', { status, message });
// });

// // Start server
// sequelize.sync({ force: false }).then(() => {
//     console.log('Database synced successfully.');
//     app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
// }).catch(err => {
//     console.error('Database sync failed:', err);
// });





//-----------------------------------------------------------------------------------------this is updated code 




const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();

console.log('Dependencies loaded successfully.');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection'); // Adjust to your Sequelize instance
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

console.log(`Application initialized. PORT set to ${PORT}`);

// Handlebars setup
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
console.log('Handlebars setup complete.');

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET || 'SuperSecretKey', // Replace with a secure key in production
  cookie: {
    maxAge: 86400000, // 24 hours in milliseconds
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
console.log('Session configuration set:', sess);
app.use(session(sess));

// Middleware
app.use(express.json());
console.log('JSON middleware added.');
app.use(express.urlencoded({ extended: true }));
console.log('URL-encoded middleware added.');
app.use(express.static(path.join(__dirname, 'public')));
console.log('Static middleware added with path:', path.join(__dirname, 'public'));

// Routes
app.use(routes);
console.log('Routes added.');

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});
console.log('Health check route added.');

// Test JSON parsing
app.post('/test-json', (req, res) => {
  console.log('Request body:', req.body);
  res.json({ body: req.body });
});
console.log('Test JSON route added.');

// Test session handling
app.get('/test-session', (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views += 1;
  }
  res.send(`Session views: ${req.session.views}`);
});
console.log('Test session route added.');

// Test error handling
app.get('/test-error', (req, res) => {
  throw new Error('This is a test error!');
});
console.log('Test error route added.');

// 404 handler
app.use((req, res) => {
  console.log(`404 error for URL: ${req.url}`);
  res.status(404).render('404');
});

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(`[${new Date().toISOString()}] Error occurred:`);
  console.error(`Status: ${status}`);
  console.error(`Message: ${message}`);
  console.error(err.stack);
  res.status(status).render('error', { status, message });
});

// Start server
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Database sync failed:', err);
  });







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