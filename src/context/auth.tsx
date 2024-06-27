// AuthContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

import {useEffect} from 'react'
import{UserDTO} from '../dto/userDTO'

interface LogInCredential{
    email: string;
    password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  logIn: (credential: LogInCredential) => Promise<void>
  logOut: () => void;
  user: UserDTO;
}




const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({children}: AuthProviderProps){
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<UserDTO>({} as UserDTO)

  async function logIn() {
 
  }
  

  function logOut () {
    setAuthenticated(false);
    localStorage.setItem('authState', JSON.stringify({ isAuthenticated: false, data: {} }));
    
  };

  useEffect(() => {
    const storedAuthState = localStorage.getItem('authState');
    if (storedAuthState) {
      const parsedAuthState = JSON.parse(storedAuthState);
      setAuthenticated(parsedAuthState.isAuthenticated);
      setData(parsedAuthState.data);
    }

    
  }, []);

  return (
    <AuthContext.Provider value={{
        isAuthenticated,
        user: data,
        logIn,
        logOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};




export { AuthProvider, useAuth };
