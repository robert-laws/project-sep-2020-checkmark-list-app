import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/checkmark-outline.svg';
import AuthContext from '../context/auth/authContext';

export const Footer = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <footer className='flex flex-initial flex-col items-center w-full bg-green-800 pb-2'>
      <div className='flex flex-initial flex-col md:flex-row items-center md:items-start md:justify-center w-full text-white p-4'>
        <div className='flex flex-col items-center my-3 md:w-64'>
          <h4 className='font-bold'>Explore</h4>
          <Link to='/' className='hover:text-green-300 text-gray-400'>
            Home
          </Link>
          {user ? (
            <>
              <Link to='/lists' className='hover:text-green-300 text-gray-400'>
                Checkmark Lists
              </Link>
              <Link
                to='/profile'
                className='hover:text-green-300 text-gray-400'
              >
                Profile
              </Link>
              <Link
                to='/keywords'
                className='hover:text-green-300 text-gray-400'
              >
                Keywords
              </Link>
            </>
          ) : (
            ''
          )}
          <Link to='/about' className='hover:text-green-300 text-gray-400'>
            About
          </Link>
        </div>
        <div className='flex flex-col items-center my-3 md:w-64'>
          <h4 className='font-bold'>Follow</h4>
          <a
            href='https://www.google.com'
            className='hover:text-green-300 text-gray-400'
          >
            Twitter
          </a>
          <a
            href='https://www.google.com'
            className='hover:text-green-300 text-gray-400'
          >
            Facebook
          </a>
          <a
            href='https://www.google.com'
            className='hover:text-green-300 text-gray-400'
          >
            Instagram
          </a>
          <a
            href='https://www.google.com'
            className='hover:text-green-300 text-gray-400'
          >
            Github
          </a>
        </div>
        <div className='flex flex-row md:order-first justify-center my-3 md:w-64'>
          <Link to='/'>
            <Logo
              className='h-6 w-6 mx-2'
              style={{
                fill: '#9ae6b4',
                filter: 'drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7))',
              }}
            />{' '}
          </Link>
          <h3>Checkmark List</h3>
        </div>
      </div>
      <div className='text-sm mt-4 mb-2 text-gray-500'>
        &copy; 2020 Checkmark List. All Rights Reserved.
      </div>
    </footer>
  );
};
