import React, { useState, useEffect } from 'react';

// import Home from '../containers/Home';
import ListTickets from '../containers/ListTickets';
// import BuyTicket from '../containers/BuyTicket';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const [ tickets, setTickets ] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setTickets(data));
  }, []);

  return (
    <div className='App'>
      <ListTickets />

    </div>
  );
};

export default App;
