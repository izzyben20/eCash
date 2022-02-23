import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';
import SignInPage from './components/signin/SignInPage';


const App = () => {
  return (
    <Router>
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/signin' component={SignInPage} exact />
     </Switch>           
    </Router>
  );
};

export default App;
