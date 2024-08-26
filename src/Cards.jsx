import React from 'react';
import FCard from './FCard';

function Cards({ users,handalRemove }) {
  return (
    <div className='w-full h-96 max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
      {users.map((item, index) => (
        <FCard handalRemove={handalRemove} id={index} key={index} user={item} />
      ))}
    </div>
  );
}

export default Cards;
