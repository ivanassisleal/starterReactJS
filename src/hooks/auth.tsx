import React, { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  let fakeUser: User = {
    name: 'Fulano',
    email: 'fulano@gmail.com'
  }

  const [user, setUser] = useState<User | null>(null);

  function signIn() {
    //const response = await auth.signIn();

    setUser(user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("hook must be used with an Provider")
  }

  return context;
}

export { AuthProvider, useAuth };