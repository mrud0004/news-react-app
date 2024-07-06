import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Feed from './Feed';
import Preferences from './Preferences';
import { PreferencesProvider } from './PreferencesContext';


function App() {
  return (
    <PreferencesProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
    </PreferencesProvider>
  );
}

export default App;