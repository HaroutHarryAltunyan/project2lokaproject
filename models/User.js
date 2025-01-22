const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

console.log('Dependencies for User model loaded.');

class User extends Model {
  // Method to check password
  checkPassword(loginPw) {
    console.log('Checking password for user...');
    const isValid = bcrypt.compareSync(loginPw, this.password);
    console.log('Password check result:', isValid);
    return isValid;
  }
}
console.log('User model class defined.');

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Minimum length of 8
      },
    },
  },
  {
    hooks: {
      // Hash password before creation
      beforeCreate: async (newUserData) => {
        console.log('beforeCreate hook triggered for user:', newUserData);
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        console.log('Password hashed before user creation.');
        return newUserData;
      },
      // Hash password before update
      beforeUpdate: async (updatedUserData) => {
        console.log('beforeUpdate hook triggered for user:', updatedUserData);
        if (updatedUserData.password) {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          console.log('Password hashed before user update.');
        }
        return updatedUserData;
      },
    },
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    underscored: true,
    timestamps: false,
  }
);
console.log('User model initialized with schema:');
console.log({
  id: 'INTEGER (primaryKey, autoIncrement)',
  name: 'STRING (not null)',
  email: 'STRING (unique, not null, validated as email)',
  password: 'STRING (not null, min length 8)',
});
console.log('Sequelize options:');
console.log({
  modelName: 'user',
  freezeTableName: true,
  underscored: true,
  timestamps: false,
});

module.exports = User;
console.log('User model exported.');

