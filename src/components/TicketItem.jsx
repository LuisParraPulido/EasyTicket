import React from 'react';
import '../assets/styles/components/TicketItem.scss';

const TicketItem = () => (
  <section className='ticket'>
    <div className='ticket__data'>
      <div className='ticket__data--title'>
        <p>IDA</p>
        <p>mar.3 dic. 2019</p>
      </div>
      <div className='ticket__data--info'>
        <h3>Avianca</h3>
        <div className='ticket__data--details'>
          <p>
            Bogotá
            <br />
            21:00
          </p>
          <p>1 escala</p>
          <p>
            Mex
            <br />
            12:15
          </p>
        </div>
        <p>Duración: 14h 15m</p>
      </div>
    </div>
    <div className='ticket__data'>
      <div className='ticket__data--title'>
        <p>Vuelta</p>
        <p>mar.10 dic. 2019</p>
      </div>
      <div className='ticket__data--info'>
        <h3>Avianca</h3>
        <div className='ticket__data--details'>
          <p>
            Mex
            <br />
            12:15
          </p>
          <p>1 escala</p>
          <p>
            Bogotá
            <br />
            21:00
          </p>
        </div>
        <p>Duración: 14h 15m</p>
      </div>
    </div>
    <div className='ticket__price'>
      <h3>Precio final</h3>
      <p>$1.380.000</p>
      <button type='button'>Comprar</button>
    </div>
  </section>
);

export default TicketItem;
