import React, { useContext } from 'react';
import spinner from '../images/spinner.gif';
import { Page, PageHeading } from '../components/ui';
import UserContext from '../context/user/userContext';

export const Profile = () => {
  const userContext = useContext(UserContext);
  const { profile } = userContext;

  if (!profile) {
    return (
      <Page>
        <PageHeading title='Profile' />
        <div className='w-72'>
          <img alt='spinner' src={spinner} />
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <PageHeading title='Profile' />
      <div>
        <div className='inline-block w-24 text-gray-700'>First Name:</div>
        <div className='inline-block text-black'>
          {profile ? profile.firstName : ''}
        </div>
      </div>
      <div>
        <div className='inline-block w-24 text-gray-700'>Last Name:</div>
        <div className='inline-block text-black'>
          {profile ? profile.lastName : ''}
        </div>
      </div>
      <div>
        <div className='inline-block w-24 text-gray-700'>Email:</div>
        <div className='inline-block text-black'>
          {profile ? profile.email : ''}
        </div>
      </div>
    </Page>
  );
};
