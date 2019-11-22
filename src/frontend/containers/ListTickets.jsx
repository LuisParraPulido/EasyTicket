import React from 'react';
import { connect } from 'react-redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import ListItems from '../components/ListItems';
import TicketItem from '../components/TicketItem';

const ListTickets = ({ search, resoldTickets }) => {
  const { from, to, departure, returningDate } = search;
  const hasResoldTickets = resoldTickets.length > 0;
  const tickets = [];

  for (let i = 0; i < 5; i++) {
    const departingHour = Math.floor(Math.random() * (24));
    const departingMinutes = Math.floor(Math.random() * (60));
    const arriveHour = Math.floor(Math.random() * (24));
    const arriveMinutes = Math.floor(Math.random() * (60));

    const ticket =
    {
      'id': i,
      'departing':
        {
          'date': departure,
          'hour': `${departingHour}:${departingMinutes}`,
          'from': from,
          'to': to,
          'arrive': `${arriveHour}:${arriveMinutes}`,
          'stops': Math.floor(Math.random() * (5)),
          'travelTime': `${Math.abs(departingHour - arriveHour)}h ${Math.abs(departingMinutes - arriveMinutes)}m`,
        },
      'returning':
        {
          'date': returningDate,
          'hour': `${arriveHour}:${departingMinutes}`,
          'from': to,
          'to': from,
          'arrive': `${departingHour}:${arriveMinutes}`,
          'stops': Math.floor(Math.random() * (5)),
          'travelTime': `${Math.abs(departingHour - arriveHour)}h ${Math.abs(departingMinutes - arriveMinutes)}m`,
        },
      'price': Math.floor(Math.random() * (9999999 - 555555) + 555555),
      'Qr': {},
      'user': {},
    };
    tickets.push(ticket);
  };

  return (
    <>
      <Tabs>
        <TabLink to='tab1'>Tickets</TabLink>
        <TabLink to='tab2'>Revendidos</TabLink>

        <TabContent for='tab1'>
          <ListItems>
            {tickets.map((item) => <TicketItem key={item.id} {...item} />)}
          </ListItems>
        </TabContent>
        <TabContent for='tab2'>
          <ListItems>
            {hasResoldTickets ? resoldTickets.map((item) => <TicketItem key={item.id} {...item} />) : <h2>No hay tickets Revendidos</h2>}
          </ListItems>
        </TabContent>
      </Tabs>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    resoldTickets: state.resoldTickets,
  };
};

export default connect(mapStateToProps, null)(ListTickets);
