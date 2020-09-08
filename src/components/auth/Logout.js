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
    <button
      className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
      onClick={logoutUser}
    >
      Logout
    </button>
  );
};

export default Logout;
