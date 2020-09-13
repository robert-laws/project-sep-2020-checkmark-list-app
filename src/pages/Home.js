import React from 'react';
import { Button } from '../components/ui';
import { useHistory } from 'react-router-dom';
import hero from '../images/checkmark-hero.jpg';

export const Home = ({ hasUser }) => {
  const history = useHistory();

  return (
    <div className='flex h-full w-full justify-between'>
      <div className='bg-white flex-1 flex flex-col h-full w-full'>
        <div className='flex-1 flex w-full justify-between'>
          <div className='flex-1'></div>
          <div className='flex-1 hero-pattern'></div>
        </div>
        <div className='flex-1 px-24'>
          <h1 className='text-4xl font-bold text-green-800 mb-2 leading-none'>
            Checkmark Lists{' '}
            <span className='block text-3xl text-green-500'>
              Keep Track of your Tasks
            </span>
          </h1>
          <p className='mb-6 px-3'>
            Stylish To Do App to create multiple lists and tasks fast. Take
            control of your tasks now.
          </p>
          <div className='flex w-full justify-between'>
            {hasUser ? (
              <Button
                onClick={() => history.push('/lists')}
                type='button'
                color='blue'
                style={{ width: '100%' }}
              >
                View your Lists
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => history.push('/signup')}
                  type='button'
                  color='blue'
                  style={{ width: '100%' }}
                >
                  Signup
                </Button>
                <Button
                  onClick={() => history.push('/login')}
                  type='button'
                  color='green'
                  style={{ width: '100%' }}
                >
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
        <div className='flex-1 flex w-full justify-between'>
          <div className='flex-1 hero-pattern'></div>
          <div className='flex-1'></div>
        </div>
      </div>
      <div className='flex-1 hero-image'>
        <img
          className='h-full w-full object-cover'
          src={hero}
          alt='checkmark list'
        />
      </div>
    </div>
  );
};
