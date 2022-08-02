import { Button } from 'primereact/button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password';
import { login } from '../../redux/slices/user';
import logoFPTImg from '../../assets/images/logo_fpt.png';
import loginBackgroundImg from '../../assets/images/bg_right.jpg';
import './Login.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = () => {
    dispatch(login({ userName: 'LienNTK', email: 'LienNTK@fsoft.com.vn' }));
    navigate('/home');
  };

  return (
    <div className="login-page flex w-screen h-screen">
      <div className="left-panel flex flex-column align-items-center justify-content-center w-6">
        <img className="fpt-logo" src={logoFPTImg} alt="FPT logo" />
        <div className="login-form flex flex-column border-solid border-round-md border-1 border-300 p-4">
          <div className="flex flex-column mb-3">
            <label className="mb-1">Username</label>
            <InputText
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-column mb-3">
            <label className="mb-1">Password</label>
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              feedback={false}
            />
          </div>
          <div className="field-checkbox mb-4">
            <Checkbox
              inputId="binary"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.checked)}
            />
            <label>Remember me</label>
          </div>
          <Button
            className="login-button mb-3"
            label="Log In"
            onClick={onLogin}
          />
        </div>
        <p className="footer-text mt-auto">
          <b>FPT Software © 2022</b>, All rights reserved
        </p>
      </div>
      <div
        className="flex w-6 login-background"
        style={{
          background: `url(${loginBackgroundImg}) no-repeat center`,
          backgroundSize: 'cover'
        }}
      ></div>
    </div>
  );
};

export default Login;
