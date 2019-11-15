import React from 'react';
import { connect } from 'react-redux';
import TicketItem from '../components/TicketItem';
import '../assets/styles/components/UserProfile.scss';

const UserProfile = (props) => {
  const { userTickets } = props;
  const hasTickets = userTickets.length > 0;
  return (
    <>
      <section className='user__container'>
        <h3>Usuario</h3>
        <div className='user__notifications'>
          <p className='border'>Mis tiquetes</p>
          <p>Notificaciones</p>
        </div>
      </section>
      {hasTickets ?
        <TicketItem /> :
        <h2>No tienes tickets para visualizar</h2>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userTickets: state.userTickets,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
