import React from 'react';
import Routes from './routes';

function App() {
  const verifyv = JSON.parse(localStorage.getItem('tokenPortfolio') || 'false');
  if (!verifyv) {
    localStorage.setItem('tokenPortfolio', 'false');
  }
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
