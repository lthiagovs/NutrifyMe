import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authprovider'; // Use o hook para acessar o contexto

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Usa o hook de contexto

  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  return children;
};

export default ProtectedRoute;
