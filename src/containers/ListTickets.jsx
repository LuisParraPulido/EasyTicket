import React from 'react';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import TicketItem from '../components/TicketItem';

const ListTickets = () => (
  <>
    <Header />

    <ListItems>
      <TicketItem />
      <TicketItem />
    </ListItems>
  </>
);

export default ListTickets;
