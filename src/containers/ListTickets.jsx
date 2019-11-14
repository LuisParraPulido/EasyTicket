import React from 'react';
import { connect } from 'react-redux';
import ListItems from '../components/ListItems';
import TicketItem from '../components/TicketItem';

const ListTickets = ({ tickets }) => {
  return (
    <>
      <ListItems>
        {tickets.map((item) => <TicketItem key={item.id} {...item} />)}
      </ListItems>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};

export default connect(mapStateToProps, null)(ListTickets);
