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
















// // ----------------------use this after you figure out what is happening in miniproject

// // Import Dependencies
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// console.log('Dependencies loaded successfully.');

// // Define sequelize Instance
// let sequelize;

// // Check for DATABASE_URL for Remote Deployment
// if (process.env.DATABASE_URL) {
//   console.log('DATABASE_URL detected. Setting up Sequelize with DATABASE_URL.');
//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false, // Necessary for some hosting services
//       },
//     },
//   });
//   console.log('Sequelize configured for remote database connection with SSL.');
// } else {
//   // Fallback to Local Database Configuration
//   console.log('DATABASE_URL not detected. Configuring Sequelize for local development.');
//   console.log('DB_NAME:', process.env.DB_NAME);
//   console.log('DB_USER:', process.env.DB_USER);
//   console.log('DB_PASSWORD:', '****'); // Masking the password for security
//   console.log('DB_HOST:', process.env.DB_HOST || 'localhost');
//   console.log('DB_PORT:', process.env.DB_PORT || 5432);

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
//   console.log('Sequelize configured for local database connection.');
// }

// // Test the connection
// console.log('Testing database connection...');
// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected successfully!'))
//   .catch((err) => console.error('Unable to connect to the database:', err));

// // Export the Sequelize Instance
// module.exports = sequelize;
// console.log('Sequelize instance exported.');





