import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

const Logout = () => {
  const history = useHistory();

  const logoutUser = async () => {
    try {
      await firebase.auth().signOut();
      history.push('/');
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
