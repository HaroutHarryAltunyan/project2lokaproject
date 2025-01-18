const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Bulk create users
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    // Bulk create blogs, random user assignment
    for (const blog of blogData) {
      await Blog.create({
        ...blog,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }

    console.log('Database seeded!');
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
};

seedDatabase();
