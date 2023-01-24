import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
            <Route path='' element={<Navigate to='experience' />} />
            <Route path='*' element={<Navigate to='experience' />} />
            <Route path='experience' element={<Experience />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
          </ Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
