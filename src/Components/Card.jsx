import React from 'react';

function Card() {
  const data = [
    {
      image: 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D',
      name: "Amazon Basics",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis numquam nobis fuga.",
      inStock: true  // Corrected from inStoke to inStock
    },
    {
      image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D',
      name: "Game",
      description: "Lorem ipsum, dolor sit amet consect",
      inStock: false
    },
    {
      image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=1024x1024&w=is&k=20&c=JHHxZ25gIwgBtYyFxziTFrOuilyogTzs5KQKBhsaZhE=',
      name: "Coding",
      description: "Lorem ipsum, dolor sit amet",
      inStock: false
    }
  ];

  return (
    <div className='w-full h-screen bg-zinc-200 flex justify-center items-center gap-10'>
      {data.map((elem, index) => (
        <div key={index} className='w-52 h-64 bg-zinc-100 rounded-md overflow-hidden'>
          <div className='w-full h-32 bg-gray-300'>
            <img
              className='w-full h-full object-cover'
              src={elem.image}
              alt='Product Image'
            />
          </div>
          <div className='p-3'>
            <h1 className='text-lg font-semibold'>{elem.name}</h1>
            <p className='text-xs mt-3'>
              {elem.description}
            </p>
            <button className={`px-4 py-1 ${elem.inStock ? "bg-blue-600" : "bg-red-600"} text-xs rounded text-zinc-100 mt-3`}>
              {elem.inStock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;