import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const LoadingIndicator = () => {
  return (
    <div
      className="progress-wrapper h-screen w-screen flex fixed top-0 left-0 bg-black-alpha-20"
      style={{ zIndex: 9999 }}
    >
      <ProgressSpinner
        animationDuration=".6s"
        className="m-auto p-progress-spinner-circle"
        strokeWidth="2.5"
      />
    </div>
  );
};

export default LoadingIndicator;
