import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModifyPermissionForm = ({ roleId }) => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/roles/${roleId}`);
        setPermissions(response.data.permissions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRole();
  }, [roleId]);

  const handlePermissionChange = (permission, isChecked) => {
    if (isChecked) {
      setPermissions((prevPermissions) => [...prevPermissions, permission]);
    } else {
      setPermissions((prevPermissions) =>
        prevPermissions.filter((p) => p !== permission)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/roles/${roleId}/permissions`, { permissions });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="checkbox"
          checked={permissions.includes('user')}
          onChange={(e) =>
            handlePermissionChange('user', e.target.checked)
          }
        />
        <label>User Page</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={permissions.includes('device')}
          onChange={(e) =>
            handlePermissionChange('device', e.target.checked)
          }
        />
        <label>Device Page</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={permissions.includes('facility')}
          onChange={(e) =>
            handlePermissionChange('facility', e.target.checked)
          }
        />
        <label>Facility Page</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={permissions.includes('ward')}
          onChange={(e) =>
            handlePermissionChange('ward', e.target.checked)
          }
        />
        <label>Ward Page</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={permissions.includes('room')}
          onChange={(e) =>
            handlePermissionChange('room', e.target.checked)
          }
        />
        <label>Room Page</label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ModifyPermissionForm;
