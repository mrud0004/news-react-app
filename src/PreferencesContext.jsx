import React, { createContext, useState, useEffect } from 'react';

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState(() => {
    const savedPreferences = sessionStorage.getItem('preferences');
    return savedPreferences ? JSON.parse(savedPreferences) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('preferences', JSON.stringify(preferences));
  }, [preferences]);

  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};