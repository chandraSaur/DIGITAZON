import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Simulazione from './components/prova-react/AppSimulazione'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <App />
       {/* <Simulazione /> */}
  </React.StrictMode>
);
