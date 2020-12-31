import React from 'react';
import Routes from './routes';

function App() {
  const verifyv = JSON.parse(localStorage.getItem(String(process.env.REACT_APP_BASE_URL)) || 'false');
  if (!verifyv) {
    localStorage.setItem(String(process.env.REACT_APP_BASE_URL), 'false');
  }
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
