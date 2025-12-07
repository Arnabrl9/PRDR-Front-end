import React from 'react';

const ServiceSelection = ({ onServiceSelect }) => {
  const services = ['DIGIGOV', 'NEXT-GEN', 'GST', 'GBSS'];

  return (
    <div className="service-selection">
      <div className="selection-header">
        <h2>Select a Service</h2>
        <p>Choose a service to manage its PR and DR controls</p>
      </div>
      <div className="services-list">
        {services.map(serviceName => (
          <div
            key={serviceName}
            className="service-card"
            onClick={() => onServiceSelect(serviceName)}
          >
            <div className="service-card-content">
              <h3>{serviceName}</h3>
              <span className="service-arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;

