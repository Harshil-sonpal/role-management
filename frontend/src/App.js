import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRolePage from './pages/AddRolePage';
import ModifyPermissionPage from './pages/ModifyPermissionPage';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
        <Route path="/" element={<AddRolePage />} />
        <Route path="/modify-permission" element={<ModifyPermissionPage />} />
      </Routes>
       </Router>
     
    </div>
  );
}

export default App;
