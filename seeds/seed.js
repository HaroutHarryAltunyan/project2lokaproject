const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

console.log('Dependencies and models loaded.');

const userData = require('./userData.json');
console.log('User data loaded from userData.json:', userData);

const blogData = require('./blogData.json');
console.log('Blog data loaded from blogData.json:', blogData);

const seedDatabase = async () => {
  try {
    console.log('Starting database seeding process...');

    // Synchronize database
    await sequelize.sync({ force: true });
    console.log('Database synced with force: true.');

    // Bulk create users
    console.log('Seeding user data...');
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('Users created:', users.map((user) => user.toJSON()));

    // Bulk create blogs with random user assignment
    console.log('Seeding blog data...');
    for (const blog of blogData) {
      console.log('Creating blog entry:', blog);
      const randomUser = users[Math.floor(Math.random() * users.length)];
      console.log('Assigning blog to user ID:', randomUser.id);

      await Blog.create({
        ...blog,
        user_id: randomUser.id,
      });
      console.log('Blog created with user assignment.');
    }

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error during database seeding:', err);
  } finally {
    console.log('Exiting seed script.');
    process.exit(0);
  }
};

seedDatabase();
console.log('Seed script executed.');
