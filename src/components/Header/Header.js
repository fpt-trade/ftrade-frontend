import React, { useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import fTradeLogo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const [selectedButton, setSelectedButton] = useState();
  const buttons = [
    { name: 'Find a mentor', value: 'find a mentor' },
    { name: 'Become a mentor', value: 'become a mentor' },
    { name: 'Log in', value: 'log in' },
    { name: 'Sign up', value: 'sign up' }
  ];

  return (
    <div className="main-background border-round-lg py-3 px-4 flex align-items-center">
      <img className="logo" src={fTradeLogo} alt="f-trade logo" />
      <SelectButton
        className="header-button ml-auto"
        value={selectedButton}
        options={buttons}
        optionLabel="name"
        onChange={(e) => setSelectedButton(e.value)}
      />
    </div>
  );
};

export default Header;
