import React from 'react';
import { Page, Card } from '../components/ui';

export const Lists = () => {
  return (
    <Page>
      <div className='flex flex-col justify-start items-start w-full h-full'>
        <div className='w-full mb-3'>
          <h1 className='text-3xl border-b pb-2'>Your Checkmark Lists</h1>
        </div>
        <div className='flex flex-wrap items-start'>
          <Card
            title='Yard Project'
            tasks={[
              { title: 'Plant new flowers by deck', completed: false },
              { title: 'Add some fertilizer', completed: true },
              { title: 'Pick up tools', completed: false },
              { title: 'Add more flowers', completed: false },
            ]}
            keywords={['cleaning', 'lawn', 'tools']}
          />

          <Card
            title='Workshop Cleanup'
            tasks={[
              { title: 'Plant new flowers by deck', completed: false },
              { title: 'Add some fertilizer', completed: true },
            ]}
            keywords={['cleaning', 'lawn', 'tools']}
          />
        </div>
      </div>
    </Page>
  );
};
