import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Header, Footer } from './sections';
import ProtectedRoute from './components/auth/ProtectedRoute';
import {
  Home,
  About,
  Keywords,
  List,
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
    // eslint-disable-next-line
  }, [user]);

  return (
    <Router>
      <div className='w-screen h-screen flex flex-col font-body'>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/'>
              <Home hasUser={!!user} />
            </Route>

            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />

            <ProtectedRoute
              isAuthed={!!user}
              isLoading={isLoading}
              path='/profile'
              exact
            >
              <Profile />
            </ProtectedRoute>

            <ProtectedRoute
              isAuthed={!!user}
              isLoading={isLoading}
              path='/keywords'
              exact
            >
              <Keywords />
            </ProtectedRoute>

            <ProtectedRoute
              isAuthed={!!user}
              isLoading={isLoading}
              path='/lists'
              exact
            >
              <Lists />
            </ProtectedRoute>

            <ProtectedRoute
              isAuthed={!!user}
              isLoading={isLoading}
              path='/list/:id'
              exact
            >
              <List />
            </ProtectedRoute>

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
