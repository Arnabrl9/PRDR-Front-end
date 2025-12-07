import React from 'react';
import ServiceOption from './ServiceOption';

const ServiceDetail = ({ serviceName, serviceState, onControlChange, onBack }) => {
  return (
    <div className="service-detail">
      <div className="detail-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Services
        </button>
        <h2>{serviceName} - PR/DR Controls</h2>
      </div>
      <ServiceOption
        serviceName={serviceName}
        serviceState={serviceState}
        onControlChange={onControlChange}
      />
    </div>
  );
};

export default ServiceDetail;

