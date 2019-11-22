import React from 'react';
import { connect } from 'react-redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import TicketItem from '../components/TicketItem';
import '../assets/styles/components/UserProfile.scss';

const UserProfile = (props) => {
  const { userTicket } = props;

  const hasTickets = Object.keys(userTicket).length > 0;
  return (
    <>
      <section className='user__container'>
        <h3>Usuario</h3>
      </section>
      <Tabs>
        <TabLink to='tab1'>Mis tiquetes</TabLink>
        <TabLink to='tab2'>Notificaciones</TabLink>

        <TabContent for='tab1'>
          {hasTickets ?
            <TicketItem key={userTicket.id} {...userTicket} /> :
            <h2>No tienes tickets para visualizar</h2>}
        </TabContent>
        <TabContent for='tab2'>
          <h2>No tienes noficaciones</h2>
        </TabContent>
      </Tabs>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userTicket: state.userTicket,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
