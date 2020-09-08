import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Header, Footer } from './sections';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col font-body'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
