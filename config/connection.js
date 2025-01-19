// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.DB_URL) {
//   sequelize = new Sequelize(process.env.DB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'postgres'
//     }
//   );
// }

// module.exports = sequelize;






// // THIS IS FOR THE PROJECT



// // //Import Dependencies
// const Sequelize = require('sequelize');
// require('dotenv').config();
// console.log('Dependencies loaded successfully.');
// // //1.	require('sequelize'): Imports Sequelize, an ORM (Object-Relational Mapping) library for working with relational databases.
// // //2.	require('dotenv').config(): Loads environment variables from a .env file into process.env for configuration.
// // //3.	console.log('Dependencies loaded successfully.'): Outputs a message to confirm dependencies are loaded.

// // //Define sequelize Instance
// let sequelize;
// // //•	Declares a variable sequelize to hold the Sequelize instance, which will manage the database connection.

// // //Check for DATABASE_URL
// // Deploying to Render or another service, set process.env.DATABASE_URL
// if (process.env.DATABASE_URL) {
//   console.log('DATABASE_URL detected. Setting up Sequelize with DATABASE_URL.');
//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   });
//   console.log('Sequelize configured for remote database connection with SSL.');
// } 
// // //1.	Checks if DATABASE_URL (a common environment variable for remote databases) is defined.
// // //2.	Logs that DATABASE_URL was detected.
// // //3.	new Sequelize(process.env.DATABASE_URL, options):
// // //•	Creates a new Sequelize instance with DATABASE_URL (a full database connection string).
// // //•	Configures the dialect as postgres (indicating a PostgreSQL database).
// // //•	Enables SSL (Secure Socket Layer) for secure communication with the database server, setting rejectUnauthorized: false to bypass certificate validation.
// // //4.	Logs a message indicating the Sequelize instance is set up for a remote database.


// // //Local Database Configuration (Fallback)
// else {
//   console.log('DATABASE_URL not detected. Configuring Sequelize for local development.');
//   console.log('DB_NAME:', process.env.DB_NAME);
//   console.log('DB_USER:', process.env.DB_USER);
//   console.log('DB_PASSWORD:', '****'); // Masking the password for security
//   console.log('DB_HOST:', process.env.DB_HOST || 'localhost');
//   console.log('DB_PORT:', process.env.DB_PORT || 5432);
// //  //1.	If DATABASE_URL is not found:
// //	//•	Logs that a local development setup is being configured.
// //	//•	Outputs DB_NAME, DB_USER, and other relevant configuration variables (masking DB_PASSWORD for security).

// // const sequelize = new Sequelize(
// //   process.env.DB_NAME,
// //   process.env.DB_USER,
// //   process.env.DB_PW,
// //   {
// //     host: 'localhost',
// //     dialect: 'postgres'
// //   },
// // );

// // let sequelize;

// // if (process.env.DB_URL) {
// //   sequelize = new Sequelize(process.env.DB_URL);
// // } else {
// //   sequelize = new Sequelize(
// //     process.env.DB_NAME,
// //     process.env.DB_USER,
// //     process.env.DB_PW,
// //     {
// //       host: 'localhost',
// //       dialect: 'postgres',
// //     },
// //   );
// // }


// require('dotenv').config();
// const { Sequelize } = require('sequelize');

// let sequelize;

// if (process.env.DB_URL) {
//   // If a DB_URL is provided, use it for the connection
//   sequelize = new Sequelize(process.env.DB_URL, {
//     dialect: 'postgres',
//   });
// } else {
//   // Fallback to individual environment variables
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

// module.exports = sequelize;



//   // sequelize = new Sequelize(
//   //   process.env.DB_NAME,
//   //   process.env.DB_USER,
//   //   process.env.DB_PASSWORD,
//   //   {
//   //     host: process.env.DB_HOST || 'localhost',
//   //     port: process.env.DB_PORT || 5432,
//   //     dialect: 'postgres',
//   //   }
//   // );



//   console.log('Sequelize configured for local database connection.');
// }
// // //2.	new Sequelize(name, user, password, options):
// // //•	Creates a Sequelize instance with local configuration details:
// // //•	DB_NAME: The database name.
// // //•	DB_USER: The database user.
// // //•	DB_PASSWORD: The database password.
// // //•	host: Defaults to 'localhost' if DB_HOST is not defined.
// // //•	port: Defaults to 5432 (PostgreSQL’s standard port).
// // //•	dialect: Specifies the PostgreSQL database engine.
// // //3.	Logs a message confirming the local connection is configured.

// // Test the connection (optional but helpful during dev)
// console.log('Testing database connection...');
// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected successfully!'))
//   .catch((err) => console.error('Unable to connect to the database:', err));
// // //1.	Logs that the connection test is starting.
// // //2.	sequelize.authenticate():
// // //•	Tests the database connection by attempting to authenticate.
// // //•	If successful, logs “Database connected successfully!”.
// // //•	If there’s an error, logs “Unable to connect to the database” and the error details.

// // //Export the Sequelize Instance
// module.exports = sequelize;
// console.log('Sequelize instance exported.');
// // //1.	Exports the sequelize instance so other files in the application can use it to interact with the database.
// // //2.	Logs a message indicating the instance is exported.


// // //Purpose

// // //This code dynamically configures a Sequelize instance for connecting to either:
// // 	//1.	A remote database (if DATABASE_URL is provided).
// // 	//2.	A local development database (if individual parameters like DB_NAME and DB_USER are set in .env).

// // It also includes a connection test and exports the configured Sequelize instance for use in the application.





// Import Dependencies
const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('Dependencies loaded successfully.');

// Define sequelize Instance
let sequelize;

// Check for DATABASE_URL for Remote Deployment
if (process.env.DATABASE_URL) {
  console.log('DATABASE_URL detected. Setting up Sequelize with DATABASE_URL.');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Necessary for some hosting services
      },
    },
  });
  console.log('Sequelize configured for remote database connection with SSL.');
} else {
  // Fallback to Local Database Configuration
  console.log('DATABASE_URL not detected. Configuring Sequelize for local development.');
  console.log('DB_NAME:', process.env.DB_NAME);
  console.log('DB_USER:', process.env.DB_USER);
  console.log('DB_PASSWORD:', '****'); // Masking the password for security
  console.log('DB_HOST:', process.env.DB_HOST || 'localhost');
  console.log('DB_PORT:', process.env.DB_PORT || 5432);

  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
    },
  );
  console.log('Sequelize configured for local database connection.');
}

// Test the connection
console.log('Testing database connection...');
sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Export the Sequelize Instance
module.exports = sequelize;
console.log('Sequelize instance exported.');










// break


//these are from render-deploy 















// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// // Deploying to Render or another service, set process.env.DATABASE_URL
// if (process.env.DATABASE_URL) {
//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
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
//     }
//   );
// }

// // Test the connection (optional but helpful during dev)
// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected successfully!'))
//   .catch((err) => console.error('Unable to connect to the database:', err));

// module.exports = sequelize;