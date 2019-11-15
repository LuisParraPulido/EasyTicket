import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import FlightStatus from '../components/FlightStatus';
import QrCode from '../components/QrCode';
import SellTicket from '../components/SellTicket';
import '../assets/styles/components/TicketProfile.scss';

const TicketProfile = () => {

  return (
    <section className='selling'>
      <h3>Mi tiquete</h3>
      <Tabs>
        <TabLink to='tab1'>Estado del vuelo</TabLink>
        <TabLink to='tab2'>Codigo QR</TabLink>
        <TabLink to='tab3'>Re-vender ticket</TabLink>

        <TabContent for='tab1'><FlightStatus /></TabContent>
        <TabContent for='tab2'><QrCode /></TabContent>
        <TabContent for='tab3'><SellTicket /></TabContent>
      </Tabs>
    </section>
  );
};

export default TicketProfile;
