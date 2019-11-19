import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { setTicket, sellTicket } from '../actions';
import '../assets/styles/components/TicketItem.scss';

const TicketItem = (props) => {
  const { id, departing, returning, price, user } = props;
  const userTicket = props;
  let buttonTitle = '';
  let buttonFunction;
  let buttonPath;

  const handleSetTicket = () => {
    props.setTicket({
      id, departing, returning, price, user,
    });
    props.history.push(`${buttonPath}`);
  };

  const handleSellTicket = () => {
    props.sellTicket({
      id, departing, returning, price, user,
    });
    props.history.push(`${buttonPath}`);
  };

  if (window.location.pathname === '/listTickets') {
    buttonTitle = 'Comprar';
    buttonFunction = handleSetTicket;
    buttonPath = '/buyTickets';
  } else if (window.location.pathname === '/user-profile') {
    buttonTitle = 'Información';
    buttonFunction = handleSetTicket;
    buttonPath = '/ticket-profile';
  } else if (window.location.pathname === '/ticket-profile') {
    buttonTitle = 'Revender';
    buttonFunction = handleSellTicket;
    buttonPath = '/user-profile';
  }

  return (
    <section className='ticket'>
      <div className='ticket__data'>
        <div className='ticket__data--title'>
          <p>IDA</p>
          <p>{departing.date}</p>
        </div>
        <div className='ticket__data--info'>
          <h3>Avianca</h3>
          <div className='ticket__data--details'>
            <p>
              {departing.from}
              <br />
              {departing.hour}
            </p>
            <p>
              {departing.stops}
              <br />
              escalas
            </p>
            <p>
              {departing.to}
              <br />
              {departing.arrive}
            </p>
          </div>
          <p>
            Duración:
            {departing.travelTime}
          </p>
        </div>
      </div>
      <div className='ticket__data'>
        <div className='ticket__data--title'>
          <p>Vuelta</p>
          <p>{returning.date}</p>
        </div>
        <div className='ticket__data--info'>
          <h3>Avianca</h3>
          <div className='ticket__data--details'>
            <p>
              {returning.from}
              <br />
              {returning.hour}
            </p>
            <p>
              {returning.stops}
              escalas
            </p>
            <p>
              {returning.to}
              <br />
              {returning.arrive}
            </p>
          </div>
          <p>
            Duración:
            {returning.travelTime}
          </p>
        </div>
      </div>
      <div className='ticket__price'>
        <h3>Precio final</h3>
        <p>
          $
          {price}
        </p>
        <button type='button' onClick={buttonFunction}>{buttonTitle}</button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    userTicket: state.userTicket,
  };
};

const mapDispatchToProps = {
  setTicket,
  sellTicket,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TicketItem));
