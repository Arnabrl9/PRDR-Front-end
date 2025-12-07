import React from 'react';
import ServiceControl from './ServiceControl';

const ServiceOption = ({ serviceName, serviceState, onControlChange }) => {
  const controlTypes = ['WEB', 'APP', 'DB'];
  const columnTypes = ['PR', 'DR'];

  const handleStart = (serviceName, columnType, controlType) => {
    onControlChange(serviceName, columnType, controlType, true);
  };

  const handleStop = (serviceName, columnType, controlType) => {
    onControlChange(serviceName, columnType, controlType, false);
  };

  const isControlRunning = (columnType, controlType) => {
    return serviceState[columnType]?.[controlType] || false;
  };

  const isControlDisabled = (columnType, controlType) => {
    // If starting PR's control, disable DR's same control
    if (columnType === 'DR') {
      const oppositeRunning = isControlRunning('PR', controlType);
      return oppositeRunning;
    }
    // If starting DR's control, disable PR's same control
    if (columnType === 'PR') {
      const oppositeRunning = isControlRunning('DR', controlType);
      return oppositeRunning;
    }
    return false;
  };

  return (
    <div className="service-option">
      <h2 className="service-title">{serviceName}</h2>
      <div className="service-columns">
        {columnTypes.map(columnType => (
          <div key={columnType} className="service-column">
            <div className="column-header">
              <h3>{columnType}</h3>
            </div>
            <div className="column-controls">
              {controlTypes.map(controlType => (
                <ServiceControl
                  key={`${columnType}-${controlType}`}
                  serviceName={serviceName}
                  columnType={columnType}
                  controlType={controlType}
                  isRunning={isControlRunning(columnType, controlType)}
                  onStart={handleStart}
                  onStop={handleStop}
                  disabled={isControlDisabled(columnType, controlType)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOption;

