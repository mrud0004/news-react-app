import React, { useContext, useState, useEffect } from 'react';
import { PreferencesContext } from './PreferencesContext';
import HeaderComponent from './Components/HeaderComponent';

function PreferencesPage() {
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const [preferenceList, setPreferenceList] = useState([
    'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
  ]);

  const handleTogglePreference = (preference) => {
    setPreferences((prevPreferences) => {
      if (prevPreferences.includes(preference)) {
        return prevPreferences.filter((item) => item !== preference);
      } else {
        return [...prevPreferences, preference];
      }
    });
  };

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);


  return (
    <div className="bg-neutral-800 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-5xl text-center font-bold text-white mb-1">Choose your Interests</h1>
      <div
          className={` mb-48 transition-opacity duration-500 ${
            showHeader ? 'opacity-100' : 'opacity-0'
          }`}
        >
        <HeaderComponent />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {preferenceList.map((preference, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 rounded-full shadow-md capitalize ${
              preferences.includes(preference) ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-900'
            }`}
            onClick={() => handleTogglePreference(preference)}
           
          >
            {preference}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreferencesPage;