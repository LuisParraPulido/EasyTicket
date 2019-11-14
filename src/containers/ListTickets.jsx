import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import TicketItem from '../components/TicketItem';
import useInitalState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const ListTickets = () => {
  const initialState = useInitalState(API);
  return (
    <>
      <Header />
      {initialState.tickets !== undefined && (
        <ListItems>
          {initialState.tickets.map((item) => <TicketItem key={item.id} {...item} />)}
        </ListItems>
      )}
    </>
  );
};

export default ListTickets;
