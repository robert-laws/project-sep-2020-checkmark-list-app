import React from 'react';
import firebase from 'firebase/app';

const Logout = () => {
  const logoutUser = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('error signing out...', error);
    }
  };

  return (
    <button className='mx-6 hover:text-red-400' onClick={logoutUser}>
      Logout
    </button>
  );
};

export default Logout;
