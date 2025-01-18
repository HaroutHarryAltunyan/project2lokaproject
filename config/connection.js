const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// If deploying to Render or another service, you might set process.env.DATABASE_URL
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
    }
  );
}

// Test the connection (optional but helpful during dev)
sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;