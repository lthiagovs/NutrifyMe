import React, { createContext, useState, useContext, useEffect } from 'react';

// Criação do contexto de autenticação
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se há um token no localStorage e atualiza o estado
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    // Armazena o token no localStorage e marca como autenticado
    localStorage.setItem('jwt', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove o token do localStorage e desmarca como autenticado
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
