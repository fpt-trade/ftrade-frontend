import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/slices/user';

const RouteGuard = ({ children }) => {
  const location = useLocation();
  const user = useSelector(selectUser);

  if (user.isLogin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RouteGuard;
