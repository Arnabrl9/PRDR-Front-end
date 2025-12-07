import React, { useState } from 'react';
import ServiceSelection from './ServiceSelection';
import ServiceDetail from './ServiceDetail';

const Dashboard = ({ username, onLogout }) => {
  const [selectedService, setSelectedService] = useState(null);
  
  // Initialize state for all services
  // Each service has PR and DR columns, each with WEB, APP, DB controls
  const [servicesState, setServicesState] = useState({
    'DIGIGOV': {
      PR: { WEB: false, APP: false, DB: false },
      DR: { WEB: false, APP: false, DB: false }
    },
    'NEXT-GEN': {
      PR: { WEB: false, APP: false, DB: false },
      DR: { WEB: false, APP: false, DB: false }
    },
    'GST': {
      PR: { WEB: false, APP: false, DB: false },
      DR: { WEB: false, APP: false, DB: false }
    },
    'GBSS': {
      PR: { WEB: false, APP: false, DB: false },
      DR: { WEB: false, APP: false, DB: false }
    }
  });

  const handleServiceSelect = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  const handleControlChange = (serviceName, columnType, controlType, start) => {
    setServicesState(prevState => {
      const newState = { ...prevState };
      
      if (start) {
        // Starting a control
        // First, stop the opposite column's same control (mutual exclusivity)
        const oppositeColumn = columnType === 'PR' ? 'DR' : 'PR';
        
        newState[serviceName] = {
          ...newState[serviceName],
          [columnType]: {
            ...newState[serviceName][columnType],
            [controlType]: true
          },
          [oppositeColumn]: {
            ...newState[serviceName][oppositeColumn],
            [controlType]: false
          }
        };
      } else {
        // Stopping a control
        newState[serviceName] = {
          ...newState[serviceName],
          [columnType]: {
            ...newState[serviceName][columnType],
            [controlType]: false
          }
        };
      }
      
      return newState;
    });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Service Management Dashboard</h1>
        <div className="user-info">
          <span className="user-name">{username}</span>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>

      {!selectedService ? (
        <ServiceSelection onServiceSelect={handleServiceSelect} />
      ) : (
        <ServiceDetail
          serviceName={selectedService}
          serviceState={servicesState[selectedService]}
          onControlChange={handleControlChange}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default Dashboard;
