import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Bills from './pages/Bills';
import Complaints from './pages/Complaints';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<UserDashboard />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/bills' element={<Bills />} />
        <Route path='/complaints' element={<Complaints />} />
      </Routes>
    </Router>
  );
}

export default App;
