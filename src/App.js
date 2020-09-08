import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Header, Footer } from './sections';
import {
  Home,
  About,
  Keywords,
  Lists,
  Login,
  Profile,
  Signup,
  NotFound,
} from './pages';

function App() {
  return (
    <Router>
      <div className='w-screen h-screen flex flex-col font-body'>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
