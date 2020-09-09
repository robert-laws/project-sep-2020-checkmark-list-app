import React, { useContext, useEffect } from 'react';
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
import AuthContext from './context/auth/authContext';
import UserContext from './context/user/userContext';

function App() {
  const authContext = useContext(AuthContext);
  const { isLoading, user } = authContext;

  const userContext = useContext(UserContext);
  const { getUserByUid, removeUser } = userContext;

  useEffect(() => {
    if (user !== null) {
      getUserByUid(user);
    } else {
      removeUser();
    }
  }, [user]);

  return (
    <Router>
      <div className='w-screen h-screen flex flex-col font-body'>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />

            <Route path='/profile' component={Profile} />
            <Route path='/keywords' component={Keywords} />
            <Route path='/lists' component={Lists} />

            <Route path='/about' component={About} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
