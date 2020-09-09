import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { GET_USER_BY_UID, REMOVE_USER } from '../types';
import firebase from 'firebase/app';

const UserState = ({ children }) => {
  const initialState = {
    profile: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUserByUid = async (uid) => {
    try {
      const userDoc = await firebase
        .firestore()
        .collection('users')
        .doc(uid)
        .get();

      const profile = userDoc.data();

      dispatch({ type: GET_USER_BY_UID, payload: profile });
    } catch (error) {
      console.error('Error getting user profile: ', error);
    }
  };

  const removeUser = () => {
    dispatch({ type: REMOVE_USER });
  };

  return (
    <UserContext.Provider
      value={{
        profile: state.profile,
        getUserByUid,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
