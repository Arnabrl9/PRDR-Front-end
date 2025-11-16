import React, { useState, useEffect } from 'react';
import PermissionCard from './PermissionCard';

const Dashboard = ({ username, onLogout }) => {
  const [permissions, setPermissions] = useState([
    {
      id: 1,
      name: "Admin Access",
      lastLogin: "2024-01-15 14:30:25",
      activity: "active",
      isRunning: false
    },
    {
      id: 2,
      name: "Data Management",
      lastLogin: "2024-01-15 10:15:42",
      activity: "idle",
      isRunning: false
    },
    {
      id: 3,
      name: "System Configuration",
      lastLogin: "2024-01-14 16:45:10",
      activity: "offline",
      isRunning: false
    },
    {
      id: 4,
      name: "Report Generation",
      lastLogin: "2024-01-15 09:20:33",
      activity: "active",
      isRunning: true
    },
    {
      id: 5,
      name: "User Management",
      lastLogin: "2024-01-15 11:55:18",
      activity: "idle",
      isRunning: false
    },
    {
      id: 6,
      name: "Security Settings",
      lastLogin: "2024-01-13 08:30:55",
      activity: "offline",
      isRunning: false
    },
    {
      id: 7,
      name: "Analytics & Monitoring",
      lastLogin: "2024-01-15 13:10:07",
      activity: "active",
      isRunning: false
    }
  ]);

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(/(\d+)\/(\d+)\/(\d+), (.+)/, '$3-$1-$2 $4');
  };

  const togglePRDR = (permissionId, start) => {
    setPermissions(prevPermissions =>
      prevPermissions.map(permission => {
        if (permission.id === permissionId) {
          const now = new Date();
          return {
            ...permission,
            isRunning: start,
            activity: start ? 'active' : 'idle',
            lastLogin: start ? formatDateTime(now) : permission.lastLogin
          };
        }
        return permission;
      })
    );

    const permission = permissions.find(p => p.id === permissionId);
    const action = start ? 'started' : 'stopped';
    console.log(`PRDR automation ${action} for ${permission?.name}`);
    
    // In a real application, you would send this to a server
    // fetch('/api/toggle-prdr', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ permissionId, start })
    // });
  };

  // Simulate activity updates for running permissions
  useEffect(() => {
    const interval = setInterval(() => {
      setPermissions(prevPermissions =>
        prevPermissions.map(permission => {
          if (permission.isRunning && Math.random() > 0.7) {
            const activities = ['active', 'idle'];
            return {
              ...permission,
              activity: activities[Math.floor(Math.random() * activities.length)]
            };
          }
          return permission;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Permission Dashboard</h1>
        <div className="user-info">
          <span className="user-name">{username}</span>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="permissions-grid">
        {permissions.map(permission => (
          <PermissionCard
            key={permission.id}
            permission={permission}
            onTogglePRDR={togglePRDR}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;


