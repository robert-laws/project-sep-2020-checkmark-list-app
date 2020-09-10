import React from 'react';
import { useParams } from 'react-router-dom';

export const List = () => {
  const { id } = useParams();

  return (
    <div>
      List - <span>id: {id}</span>
    </div>
  );
};
