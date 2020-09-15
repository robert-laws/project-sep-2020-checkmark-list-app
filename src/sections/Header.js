import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/checkmark-outline.svg';
import { ReactComponent as UserIcon } from '../images/user.svg';
import Logout from '../components/auth/Logout';
import AuthContext from '../context/auth/authContext';
import UserContext from '../context/user/userContext';

export const Header = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const userContext = useContext(UserContext);
  const { profile } = userContext;

  const [toggle, setToggle] = useState(false);

  return (
    <header className='w-full bg-green-800 flex-initial flex flex-col md:flex-row p-3'>
      <div className='flex flex-row flex-1 items-center justify-between h-auto my-3 ml-3'>
        <NavLink
          exact
          to='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          <Logo
            className='h-12 w-12'
            style={{
              fill: '#9ae6b4',
              filter: 'drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7))',
            }}
          />
        </NavLink>
        <div
          className='px-4 cursor-pointer md:hidden'
          id='burger'
          onClick={() => setToggle(!toggle)}
        >
          <svg viewBox='0 0 20 20' fill='#FFF' className='menu w-8 h-8'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row flex-initial justify-center md:justify-end self-center ${
          toggle ? 'block' : 'hidden'
        } md:block`}
      >
        <NavLink
          exact
          to='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white text-center'
        >
          Home
        </NavLink>

        {user ? (
          <>
            <NavLink
              to='/lists'
              className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white text-center'
            >
              To Do Lists
            </NavLink>
            <NavLink
              to='/profile'
              className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white text-center'
            >
              Profile
            </NavLink>
            <NavLink
              to='/keywords'
              className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white text-center'
            >
              Keywords
            </NavLink>
          </>
        ) : (
          ''
        )}

        <NavLink
          to='/about'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white text-center'
        >
          About
        </NavLink>

        {!user ? (
          <>
            <NavLink
              to='/signup'
              className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white text-center'
            >
              Signup
            </NavLink>
            <NavLink
              to='/login'
              className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white text-center'
            >
              Login
            </NavLink>
          </>
        ) : (
          <Logout />
        )}

        {profile ? (
          <>
            <div className='ml-8 mr-4 my-1 text-lg text-white font-bold inline-block'>
              <span>Welcome, {profile.firstName}</span>
              <UserIcon
                className='h-6 w-6 inline-block ml-2'
                style={{
                  fill: '#FFF',
                }}
              />
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};
