const { Sequelize } = require('sequelize');

// Replace 'your_database_name', 'your_username', and 'your_password' with your actual database credentials
const sequelize = new Sequelize('role_management', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
