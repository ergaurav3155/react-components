import React, { useState } from 'react';
// import Card from './Components/Card';
import Props from './Components/props';

function App() {
  const data = [
    {
      name: "Gaurav",
      profession: "Painter",
      image: "https://media.istockphoto.com/id/1542566108/photo/young-businessman-smiling-at-camera.webp?b=1&s=612x612&w=0&k=20&c=SSRim4buGj5YspappF0F9LPuewiMwH03QnODN7Lslp0=", friends: false
    },
    {
      name: "Anurag",
      profession: "Coder",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", friends: false
    },
    {
      name: "Aditya",
      profession: "Artist",
      image: "https://plus.unsplash.com/premium_photo-1672857822411-ad82b8180078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnRyYWl0fGVufDB8fDB8fHww", friends: false
    },
    {
      name: "Riya",
      profession: "Chef",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", friends: false
    }
  ];

  const [realdata, setRealData] = useState(data);

const handleFriendsButton = (cardeindex) => {
  setRealData((previous) => 
    previous.map((item, index) => {
      if (index === cardeindex) {
        return { ...item, friends: !item.friends };
      }
      return item;
    })
  );
};


  return (
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
      {realdata.map((item, index) => (
        <Props key={index} index={index} handleClick={handleFriendsButton} values={item} />
      ))}
    </div>
  );
}

export default App;
