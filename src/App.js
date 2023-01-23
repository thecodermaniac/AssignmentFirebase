import React from 'react';
import Home from './components/Home';
import AppState from './Context/AppState';

function App() {

  return (
    <AppState>
      <Home />
    </AppState>
  );
}

export default App;
