import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

const Logout = () => {
  const logoutUser = async () => {
    try {
      await firebase.auth().signOut();
      return <Redirect to='/' />;
    } catch (error) {
      console.error('error signing out...', error);
    }
  };

  return (
    <button
      className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
      onClick={logoutUser}
    >
      Logout
    </button>
  );
};

export default Logout;
