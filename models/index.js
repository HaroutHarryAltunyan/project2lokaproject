const User = require('./User');
console.log('User model loaded.');

const Blog = require('./Blog');
console.log('Blog model loaded.');

const Comment = require('./Comment');
console.log('Comment model loaded.');

// User -> Blog
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
console.log('User hasMany Blog relationship defined.');

// Blog -> User
Blog.belongsTo(User, {
  foreignKey: 'user_id',
});
console.log('Blog belongsTo User relationship defined.');

// Blog -> Comment
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});
console.log('Blog hasMany Comment relationship defined.');

// Comment -> Blog
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});
console.log('Comment belongsTo Blog relationship defined.');

// User -> Comment
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
console.log('User hasMany Comment relationship defined.');

// Comment -> User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});
console.log('Comment belongsTo User relationship defined.');

module.exports = { User, Blog, Comment };
console.log('Models exported: User, Blog, Comment.');



// const User = require('./User');
// const Blog = require('./Blog');
// const Comment = require('./Comment');

// // User -> Blog
// User.hasMany(Blog, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

// Blog.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// // Blog -> Comment
// Blog.hasMany(Comment, {
//   foreignKey: 'blog_id',
//   onDelete: 'CASCADE',
// });

// Comment.belongsTo(Blog, {
//   foreignKey: 'blog_id',
// });

// // User -> Comment
// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// module.exports = { User, Blog, Comment };