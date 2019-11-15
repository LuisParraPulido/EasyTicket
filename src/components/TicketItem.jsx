import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setTicket } from '../actions';
import '../assets/styles/components/TicketItem.scss';

const TicketItem = (props) => {
  const { departing, returning, price } = props;
  const handleSetTicket = () => {
    props.setTicket({
      departing, returning, price,
    });
    props.history.push('/buyTickets');
  };

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
        <button type='button' onClick={handleSetTicket}>Comprar</button>
      </div>
    </section>
  );
};

TicketItem.propTypes = {
  price: PropTypes.number,
};

const mapDispatchToProps = {
  setTicket,
};

export default connect(null, mapDispatchToProps)(withRouter(TicketItem));
