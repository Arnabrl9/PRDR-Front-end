import React from 'react';

const ServiceControl = ({ 
  serviceName, 
  columnType, 
  controlType, 
  isRunning, 
  onStart, 
  onStop,
  disabled 
}) => {
  const handleStart = () => {
    onStart(serviceName, columnType, controlType);
  };

  const handleStop = () => {
    onStop(serviceName, columnType, controlType);
  };

  return (
    <div className="service-control">
      <div className="control-header">
        <span className="control-type">{controlType}</span>
        <span className={`status-indicator ${isRunning ? 'running' : 'stopped'}`}>
          {isRunning ? '●' : '○'}
        </span>
      </div>
      <div className="control-buttons">
        <button
          className={`btn btn-start ${isRunning ? 'active' : ''}`}
          disabled={isRunning || disabled}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className={`btn btn-stop ${!isRunning ? 'active' : ''}`}
          disabled={!isRunning}
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default ServiceControl;

