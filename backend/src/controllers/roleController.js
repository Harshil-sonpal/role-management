const { Role } = require('../models/role');

// Add a new role
exports.addRole = async (req, res) => {
  try {
    const { name } = req.body;
    console.log("name:-", name);
    const role = await Role.create({ name });
    res.status(201).json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Modify role's permissions
exports.modifyPermissions = async (req, res) => {
  try {
    const { roleId, permissions } = req.body;
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    role.permissions = permissions;
    await role.save();
    res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
