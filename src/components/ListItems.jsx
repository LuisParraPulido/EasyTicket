import React from 'react';
import '../assets/styles/components/ListItems.scss';

const ListItems = ({ children }) => (
  <section className='ticket__list'>
    <div className='ticket__list--header'>
      <h3 className='ListItems__title'>tiquetes</h3>
      <h3 className='ListItems__title'>Revendidos</h3>
    </div>
    {children}
  </section>
);

export default ListItems;
