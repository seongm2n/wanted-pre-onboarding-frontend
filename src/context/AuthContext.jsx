import React, { createContext, useContext, useEffect, useState } from 'react';
import { signIn } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  currentUser: null,
  signOut: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setCurrentUser({ email: signIn.email });
      const getUserInfo = async () => {
        try {
          const res = await signIn({ email });
          const { email } = res.data;
          setCurrentUser({ email });
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log('로그인 실패:', error.message);
        }
      };
      getUserInfo();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  const handleSignOut = () => {
    localStorage.removeItem('access_token');
    setCurrentUser(null);
    navigate(`/`);
  };

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <AuthContext.Provider value={{ currentUser, signOut: handleSignOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
