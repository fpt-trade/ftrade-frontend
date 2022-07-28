import React from 'react';
import { Button } from 'primereact/button';

const Footer = () => {
  return (
    <div className="main-background border-round-lg p-4 flex">
      <div className="ml-auto">
        <Button label="About Us" className="p-button-secondary p-button-text" />
        <Button label="Products" className="p-button-secondary p-button-text" />
        <Button label="Service" className="p-button-secondary p-button-text" />
        <Button label="Support" className="p-button-secondary p-button-text" />
      </div>
    </div>
  );
};

export default Footer;
