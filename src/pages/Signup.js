import React from 'react';
import { Button, Input, Heading } from '../components/ui';

export const Signup = () => {
  return (
    <div className='flex justify-center  items-start mt-6 w-full h-full'>
      <div className='w-full xl:w-4/12 lg:w-1/2 md:w-3/4 sm:w-10/12 border rounded shadow-lg px-3 pb-3'>
        <form className='bg-white px-4 pt-6'>
          <div className='mb-4'>
            <Heading>Signup for the Checkmark List App</Heading>
          </div>
          <div className='mb-4'>
            <Input id='firstName' type='text' placeholder='First Name' />
          </div>
          <div className='mb-4'>
            <Input id='lastName' type='text' placeholder='Last Name' />
          </div>
          <div className='mb-4'>
            <Input id='email' type='email' placeholder='Email' />
          </div>
          <div className='mb-4'>
            <Input id='password' type='password' placeholder='Password' />
          </div>
          <div className='mb-4 text-center'>
            <Button>Signup</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
