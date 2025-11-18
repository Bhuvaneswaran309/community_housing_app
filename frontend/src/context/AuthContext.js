import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null); // 'admin' | 'owner' | 'renter'
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ role, setRole, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
