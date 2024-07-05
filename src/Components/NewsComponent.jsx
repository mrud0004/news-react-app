import React from 'react';

function NewsComponent({ image, title, text, author }) {
  return (
    <div className="flex bg-stone-500 p-4 rounded-lg shadow-md mt-4 max-w-screen-md">
      <div className="w-2/3">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-900 mb-4">{text}</p>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={author.image} alt={author.name} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-900">{author.role}</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex justify-end">
        <img className="object-cover rounded-lg" src={image} alt={title} />
      </div>
    </div>
  );
}

export default NewsComponent;
