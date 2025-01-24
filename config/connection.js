// // Import Dependencies
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// // Define sequelize Instance
// let sequelize;

// // Check for DATABASE_URL for Remote Deployment
// if (process.env.DATABASE_URL) {

//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false, // Necessary for some hosting services
//       },
//     },
//   });

// } else {

//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: process.env.DB_HOST || 'localhost',
//       port: process.env.DB_PORT || 5432,
//       dialect: 'postgres',
//     },
//   );

// }

// // Test the connection

// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected successfully!'))
//   .catch((err) => console.error('Unable to connect to the database:', err));

// // Export the Sequelize Instance
// module.exports = sequelize;




const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;


