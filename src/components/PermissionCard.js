import React from 'react';

const PermissionCard = ({ permission, onTogglePRDR }) => {
  const handleStart = () => {
    onTogglePRDR(permission.id, true);
  };

  const handleStop = () => {
    onTogglePRDR(permission.id, false);
  };

  const getActivityStatusClass = (activity) => {
    return `activity-status status-${activity}`;
  };

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="permission-card">
      <div className="permission-header">
        <div>
          <div className="permission-title">{permission.name}</div>
        </div>
        <span className={`permission-badge ${permission.isRunning ? 'badge-active' : 'badge-inactive'}`}>
          {permission.isRunning ? 'Running' : 'Stopped'}
        </span>
      </div>
      <div className="permission-info">
        <div className="info-item">
          <span className="info-label">Last Login:</span>
          <span className="info-value">{permission.lastLogin}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Activity:</span>
          <span className={getActivityStatusClass(permission.activity)}>
            {capitalizeFirst(permission.activity)}
          </span>
        </div>
      </div>
      <div className="control-buttons">
        <button
          className="btn btn-start"
          disabled={permission.isRunning}
          onClick={handleStart}
        >
          <span>▶</span> Start PRDR
        </button>
        <button
          className="btn btn-stop"
          disabled={!permission.isRunning}
          onClick={handleStop}
        >
          <span>■</span> Stop PRDR
        </button>
      </div>
    </div>
  );
};

export default PermissionCard;


