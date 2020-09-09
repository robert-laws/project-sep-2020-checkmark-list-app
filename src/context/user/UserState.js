import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { GET_USER_BY_UID, REMOVE_USER, ADD_NEW_USER } from '../types';
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

  const addNewUser = async (uid, newUser) => {
    const { firstName, lastName, email } = newUser;
    try {
      await firebase
        .firestore()
        .collection('users')
        .doc(uid)
        .set({ firstName, lastName, email });
      dispatch({ type: ADD_NEW_USER, payload: { firstName, lastName, email } });
    } catch (error) {
      console.log('Error adding new user: ', error);
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
        addNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
