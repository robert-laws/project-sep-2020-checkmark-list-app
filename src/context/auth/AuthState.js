import React, { useEffect, useReducer } from 'react';
import firebase from 'firebase/app';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { UPDATE_AUTH } from '../types';

const AuthState = ({ children }) => {
  const initialState = {
    user: null,
    isLoading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = addAuthListener((user) => {
      const data = { user, isLoading: false };
      updateAuth(data);
    });

    return unsubscribe;
  }, []);

  const addAuthListener = (callback) => {
    const onChange = (user) => {
      if (user) {
        callback(user.uid);
      } else {
        callback(null);
      }
    };

    return firebase.auth().onAuthStateChanged(onChange);
  };

  const updateAuth = (user) => {
    dispatch({ type: UPDATE_AUTH, payload: user });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
