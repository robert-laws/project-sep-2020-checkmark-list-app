import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/checkmark-outline.svg';

export const Header = () => {
  return (
    <header className='w-full bg-green-800 flex-initial flex flex-col md:flex-row items-center p-3'>
      <div className='flex flex-col flex-1 md:flex-initial justify-center items-center w-20 h-auto my-3 ml-3'>
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
      </div>
      <div className='flex flex-col md:flex-row flex-1 justify-center md:justify-end items-center'>
        <NavLink
          exact
          to='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Home
        </NavLink>
        <NavLink
          to='/lists'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          To Do Lists
        </NavLink>
        <NavLink
          to='/profile'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Profile
        </NavLink>
        <NavLink
          to='/keywords'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Keywords
        </NavLink>
        <NavLink
          to='/about'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          About
        </NavLink>
        <NavLink
          to='/login'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Login
        </NavLink>
        <NavLink
          to='/signup'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Signup
        </NavLink>
      </div>
    </header>
  );
};
