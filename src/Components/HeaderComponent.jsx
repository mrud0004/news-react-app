import React from 'react';
import { Link } from 'react-router-dom';


function HeaderComponent() {
    return (
        <>
      <div className="flex justify-center mt-10 space-x-8 mr-6">
        <Link to="/" className="text-white text-xl hover:underline">
          Home
        </Link>
        <Link to="/feed" className="text-white text-xl hover:underline">
          Feed
        </Link>
        <Link to="/preferences" className="text-white text-xl hover:underline">
          Preferences
        </Link>
      </div>
      </>
    );
  }
  
  export default HeaderComponent;