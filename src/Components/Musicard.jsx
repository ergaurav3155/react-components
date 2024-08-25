
import React from 'react';

function Card() {
  const data=[
    {name:'nirvan astakama', description:"realaction between mind and sole mahadav har har mahadav"},
    {name:'rudhar astakama', description:"realaction between mind and sole mahadav har har mahadavfewedcvef vefve edvdfv"}
  ];

  const handleClickDownload=()=>{alert("chal raha hai")};
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center' >
      {data.map((item,index)=>(
        <div className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
        <h3 className='font-semibold text-xl'>{item.name}</h3>
        <p className='text-xs mt-2'>{item.description}</p>
        <button onMouseOver={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs fount-semibold text bg-zinc-100 rounded' >Download now</button>
      </div>
      ))}
    </div>
  )
}

export default Musicard;

