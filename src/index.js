import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import './assets/custom.css';
import App from './App';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDtOyKLG2xe9nLYkUuqD4U-_TeoP1cPVSc',
  authDomain: 'rdl-todoapp.firebaseapp.com',
  databaseURL: 'https://rdl-todoapp.firebaseio.com',
  projectId: 'rdl-todoapp',
  storageBucket: 'rdl-todoapp.appspot.com',
  messagingSenderId: '189851570873',
  appId: '1:189851570873:web:1e1b409f7471d3974b0168',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
