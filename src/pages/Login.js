import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Heading } from '../components/ui';
import { signIn } from '../components/auth/signIn';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    loginError: '',
  });

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === '' && password === '') {
      setErrors({
        emailError: 'Please enter an email',
        passwordError: 'Please enter a password',
        loginError: '',
      });
    } else if (email === '') {
      setErrors({
        emailError: 'Please enter an email',
        passwordError: '',
        loginError: '',
      });
    } else if (password === '') {
      setErrors({
        ...errors,
        emailError: '',
        passwordError: 'Please enter a password',
        loginError: '',
      });
    } else {
      try {
        await signIn(email, password);
        history.push('/lists');
      } catch (error) {
        setErrors({
          ...errors,
          emailError: '',
          passwordError: '',
          loginError: 'Error logging in',
        });
      }
    }
  };

  return (
    <div className='flex justify-center items-start mt-6 w-full h-full'>
      <div className='w-full xl:w-4/12 lg:w-1/2 md:w-3/4 sm:w-10/12 border rounded shadow-lg px-3 pb-3'>
        <form onSubmit={handleSubmit} className='bg-white px-4 pt-6'>
          <div className='mb-4'>
            <Heading>Login to the Checkmark List App</Heading>
          </div>
          <div className='mb-4'>
            <Input
              id='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <Input
              id='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-4 text-center'>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
