import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import ListTickets from '../containers/ListTickets';
import BuyTicket from '../containers/BuyTicket';
import Register from '../containers/Register';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/listTickets' component={ListTickets} />
        <Route exact path='/buyTickets' component={BuyTicket} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
