import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx';
import './index.css';

//configuracion de firebase
const firebaseConfig = {
  apiKey: "AIzaSyAPm32OnXiffkzRTDuYAakZWfMCm2Yl3m0",
  authDomain: "wild-harmony.firebaseapp.com",
  projectId: "wild-harmony",
  storageBucket: "wild-harmony.appspot.com",
  messagingSenderId: "43294573666",
  appId: "1:43294573666:web:cc4a01e232d29bea85fd3b"
};

//inicializacion de firebase
//const app = initializeApp(firebaseConfig); aca por defaultlo guarda en una constante poer nosotros no necesitamos
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
