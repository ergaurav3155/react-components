
import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {
  const [val, setVal] = useState(false);

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-60 h-32 rounded-md overflow-hidden relative'>
        {/* First Image */}
        <img
          className={`absolute transition-transform duration-500 ${val ? "-translate-x-full" : "translate-x-0"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1566578312612-d903c67c4ad2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww"
          alt=""
        />
        {/* Second Image */}
        <img
          className={`absolute transition-transform duration-500 ${val ? "translate-x-0" : "translate-x-full"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1556763298-45dd094af54e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <span 
          onClick={() => setVal(!val)}
          className='w-8 h-8 bg-[#dadada8b] flex items-center justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg cursor-pointer'>
          <FaArrowRightLong size={'.8em'} />
        </span>
      </div>
    </div>
  );
}

export default Swipeimp;
