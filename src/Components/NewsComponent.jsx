import React from 'react';

function NewsComponent({ items }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((item, index) => (
        <a href={item.link} key={index} target="_blank" rel="noopener noreferrer" className="flex bg-stone-500 p-2 rounded-lg shadow-md mt-2 mb-5 max-w-screen-sm">
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-900 mb-4">{item.text}</p>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={item.author.image} alt={item.author.name} />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{item.author.name}</p>
                <p className="text-sm text-gray-900">{item.author.role}</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex justify-end ml-2">
            <img className="object-cover rounded-lg" src={item.image} alt={item.title} />
          </div>
        </a>
      ))}
    </div>
  );
}

export default NewsComponent;