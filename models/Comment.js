const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    blog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'blog',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;









































// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// console.log('Dependencies for Comment model loaded.');

// class Comment extends Model {}
// console.log('Comment model class defined.');

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//     blog_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'blog',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     modelName: 'comment',
//     freezeTableName: true,
//     underscored: true,
//     timestamps: false,
//   }
// );
// console.log('Comment model initialized with schema:');
// console.log({
//   id: 'INTEGER (primaryKey, autoIncrement)',
//   content: 'TEXT (not null)',
//   date_created: 'DATE (default NOW, not null)',
//   user_id: 'INTEGER (references user.id)',
//   blog_id: 'INTEGER (references blog.id)',
// });
// console.log('Sequelize options:');
// console.log({
//   modelName: 'comment',
//   freezeTableName: true,
//   underscored: true,
//   timestamps: false,
// });

// module.exports = Comment;
// console.log('Comment model exported.');
