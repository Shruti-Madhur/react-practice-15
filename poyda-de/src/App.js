import React, { useState } from 'react';
import './App.css';
import PoydaList from './PoydaList';
import info from './info';

function App() {
  const [user, setUser] = useState(info);
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h1>{user.length} Poyda des</h1>
          <PoydaList mamun = {user}/>
          <button onClick={() => setUser([])}>clear all</button>
        </div>
      </header>
    </div>
  );
}

export default App;
