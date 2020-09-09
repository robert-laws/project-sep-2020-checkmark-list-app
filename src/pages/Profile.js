import React, { useContext } from 'react';
import { Page, PageHeading } from '../components/ui';
import UserContext from '../context/user/userContext';

export const Profile = () => {
  const userContext = useContext(UserContext);
  const { profile } = userContext;

  if (!profile) {
    return (
      <Page>
        <PageHeading title='Profile' />
        <div>
          <h3 className='inline-block text-black'>Loading...</h3>
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
