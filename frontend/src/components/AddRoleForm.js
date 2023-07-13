import React, { useState } from 'react';
import axios from 'axios';

const AddRoleForm = ({ onRoleAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/roles', { name });
      onRoleAdded(response.data);
      setName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Role name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddRoleForm;
