const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

console.log('Dependencies for Blog model loaded.');

class Blog extends Model {}
console.log('Blog model class defined.');

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'blog',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  }
);
console.log('Blog model initialized with schema:');
console.log({
  id: 'INTEGER (primaryKey, autoIncrement)',
  title: 'STRING (not null)',
  content: 'TEXT (not null)',
  date_created: 'DATE (default NOW, not null)',
  user_id: 'INTEGER (references user.id)',
});
console.log('Sequelize options:');
console.log({
  modelName: 'blog',
  freezeTableName: true,
  underscored: true,
  timestamps: false,
});

module.exports = Blog;
console.log('Blog model exported.');
