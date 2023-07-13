import React from 'react';
import ModifyPermissionForm from '../components/ModifyPermissionForm';

const ModifyPermissionPage = () => {
  const roleId = '123'; // Replace with the actual role ID

  return (
    <div>
      <h1>Modify Permission</h1>
      <ModifyPermissionForm roleId={roleId} />
    </div>
  );
};

export default ModifyPermissionPage;
