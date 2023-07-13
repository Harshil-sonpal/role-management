import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddRoleForm from '../components/AddRoleForm';

const AddRolePage = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/roles');
        setRoles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoles();
  }, []);

  const handleRoleAdded = (role) => {
    setRoles((prevRoles) => [...prevRoles, role]);
  };

  return (
    <div>
      <h1>Add Role</h1>
      <AddRoleForm onRoleAdded={handleRoleAdded} />
      <h2>Roles:</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddRolePage;
