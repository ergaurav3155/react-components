import React from 'react';

function Props({ values, handleClick, index }) {
  const { name, image, profession, friends } = values;

  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-32 bg-sky-200'>
        <img 
          src={image} 
          alt={name} 
          className='w-full h-full object-cover' 
        />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-sm'>{profession}</h5>
        <button 
          onClick={() => handleClick(index)} 
          className='px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'
        >
          {friends === true ? "Remove Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Props;
