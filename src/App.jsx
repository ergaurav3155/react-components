import React, { useState } from 'react';

function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      {val.map((item, index) => <h1 key={index}>{item}</h1>)}
      <button 
        onClick={() => setVal(val.filter((item, index) => index !== val.length - 1))}
        className='px-2 py-1 bg-blue-400 rounded-full text-white text-xs'
      >
        click
      </button>
    </div>
  );
}

export default App;
