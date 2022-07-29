import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import fTradeLogo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const [selectedButton, setSelectedButton] = useState();
  const navigate = useNavigate();
  const buttons = [
    { name: 'Find a mentor', value: 'find a mentor' },
    { name: 'Become a mentor', value: 'become a mentor' }
  ];

  return (
    <div className="main-background border-round-lg py-3 px-4 flex align-items-center">
      <img
        className="logo cursor-pointer"
        src={fTradeLogo}
        alt="f-trade logo"
        onClick={() => navigate('/')}
      />
      <div className="flex ml-auto align-items-center">
        <Button
          label="Create"
          className="p-button-warning mr-3"
          onClick={() => navigate('/create')}
        />
        <SelectButton
          className="header-button"
          value={selectedButton}
          options={buttons}
          optionLabel="name"
          onChange={(e) => setSelectedButton(e.value)}
        />
      </div>
    </div>
  );
};

export default Header;
