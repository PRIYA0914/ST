import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/globalEffects.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';


const FilmGrain = () => <div className="film-grain-overlay flicker" />;

const CustomCursor = () => {
  React.useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const move = (e) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX - 16}px,${e.clientY - 16}px,0)`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div id="custom-cursor" className="custom-cursor" />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <FilmGrain />
      <CustomCursor />
      <App />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
