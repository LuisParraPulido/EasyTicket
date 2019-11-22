import React from 'react';
import { connect } from 'react-redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import FlightStatus from '../components/FlightStatus';
import QrCode from '../components/QrCode';
import TicketItem from '../components/TicketItem';
import '../assets/styles/components/TicketProfile.scss';

const TicketProfile = (props) => {
  const { userTicket } = props;
  return (
    <section className='selling'>
      <h3>Mi tiquete</h3>
      <Tabs>
        <TabLink to='tab1'>Estado del vuelo</TabLink>
        <TabLink to='tab2'>Codigo QR</TabLink>
        <TabLink to='tab3'>Re-vender ticket</TabLink>

        <TabContent for='tab1'><FlightStatus /></TabContent>
        <TabContent for='tab2'><QrCode /></TabContent>
        <TabContent for='tab3'><TicketItem key={userTicket.id} {...userTicket} /></TabContent>
      </Tabs>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    userTicket: state.userTicket,
  };
};

export default connect(mapStateToProps, null)(TicketProfile);
