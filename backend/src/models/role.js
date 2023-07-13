const { DataTypes } = require('sequelize');
const db = require('../db');

const Role = db.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permissions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: ['user', 'device', 'facility', 'ward', 'room'],
  },
});

module.exports = Role;
