import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username) => {
    setCurrentUser(username);
    setIsAuthenticated(true);
    sessionStorage.setItem('currentUser', username);
  };

  const handleLogout = () => {
    setCurrentUser('');
    setIsAuthenticated(false);
    sessionStorage.removeItem('currentUser');
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard username={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;



