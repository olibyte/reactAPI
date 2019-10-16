import React from 'react';
import './App.css';
import News from './News/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My feed</h1>
      </header>
      <News/>
    </div>
  );
}

export default App;
