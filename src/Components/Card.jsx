import React from 'react';

function Components() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex justify-center items-center'>
      <div className='w-52 h-64 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-gray-300'>
          <img
            className='w-full h-full object-cover'
            src='https://plus.unsplash.com/premium_photo-1679168116865-7f9d1fafd328?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Product Image'
          />
        </div>
        <div className='p-3'>
          <h1 className='text-lg font-semibold'>Amazon Basics</h1>
          <p className='text-xs mt-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis numquam nobis fuga.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Components;
