import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='body'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
