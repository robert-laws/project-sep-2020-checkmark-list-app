import React, { useState, useContext } from 'react';
import { Button, Input, Heading } from '../components/ui';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import UserContext from '../context/user/userContext';

export const Signup = () => {
  const userContext = useContext(UserContext);
  const { addNewUser } = userContext;

  const history = useHistory();

  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
  });

  const [signUpError, setSignUpError] = useState('');

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const setFormErrors = (_callback) => {
    let firstNameError =
      newUser.firstName === '' ? 'Please enter a first name' : '';
    let lastNameError =
      newUser.lastName === '' ? 'Please enter a last name' : '';
    let emailError = newUser.email === '' ? 'Please enter an email' : '';
    let passwordError =
      newUser.password === '' ? 'Please enter a password' : '';

    let newErrors = {
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
    };

    setErrors({
      ...errors,
      ...newErrors,
    });

    const result = _callback();
    return result;
  };

  const checkValidity = () => {
    let formValid = true;

    for (const property in newUser) {
      if (newUser[property] === '') {
        formValid = false;
        break;
      }
    }

    return formValid;
  };

  const runValidationSuccess = () => {
    const result = setFormErrors(checkValidity);
    return result;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (runValidationSuccess()) {
      // console.log('no errors');
      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);

        // create new user
        if (user.uid) {
          await addNewUser(user.uid, newUser);

          history.push('/profile');
        }
      } catch (error) {
        setSignUpError(error.message);
      }
    }
  };

  return (
    <div className='flex justify-center  items-start mt-6 w-full h-full'>
      <div className='w-full xl:w-4/12 lg:w-1/2 md:w-3/4 sm:w-10/12 border rounded shadow-lg px-3 pb-3'>
        <form onSubmit={handleSubmit} className='bg-white px-4 pt-6'>
          <div className='mb-4'>
            <Heading>Signup for the Checkmark List App</Heading>
          </div>
          <div className='mb-4'>
            <p className='text-red-500 mt-2 text-sm italic'>{signUpError}</p>
          </div>
          <div className='mb-4'>
            <Input
              error={errors.firstNameError}
              id='firstName'
              name='firstName'
              type='text'
              placeholder='First Name'
              value={newUser.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <Input
              error={errors.lastNameError}
              id='lastName'
              name='lastName'
              type='text'
              placeholder='Last Name'
              value={newUser.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <Input
              error={errors.emailError}
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              value={newUser.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <Input
              error={errors.passwordError}
              id='password'
              name='password'
              type='password'
              placeholder='Password'
              value={newUser.password}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4 text-center'>
            <Button>Signup</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
