import React from 'react';
import '../assets/styles/components/ListItems.scss';

const ListItems = ({ children }) => {
  return (
    <section className='ticket__list'>
      {children}
    </section>
  );
};

export default ListItems;
