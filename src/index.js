import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAKbi99XB62eprh5zL9DtLM4oov4KCHWqE",
    authDomain: "pruebagram-a988e.firebaseapp.com",
    projectId: "pruebagram-a988e",
    storageBucket: "pruebagram-a988e.appspot.com",
    messagingSenderId: "765407407455",
    appId: "1:765407407455:web:6c244af9be035585771aea",
    measurementId: "G-87CJMJTMVE"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
