import './App.css';
import AppRouter from './common/AppRouter';
import React from 'react';
import Header from './common/Header'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className='main'>
          <AppRouter />
        </div>
      </header>
    </div>
  );
}

export default App;
