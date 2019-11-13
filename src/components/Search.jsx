import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='main'>
    <div className='main__img'>
      <p>Vive experiencias únicas.</p>
    </div>
    <section className='main__container'>
      <form className='main__container--form'>
        <h3>ORIGEN</h3>
        <input className='input' type='text' />
        <h3>DESTINO</h3>
        <input className='input' type='text' />
        <div className='main__container--form--div'>
          <div>
            <label>IDA</label>
            <input className='input' type='date' placeholder='dd/mm/aaaa' />
          </div>
          <div>
            <label>VUELTA</label>
            <input className='input' type='date' placeholder='dd/mm/aaaa' />
          </div>
        </div>
        <input className='input' type='number' placeholder='N° Pasajeros' />
        <button type='button'>Buscar</button>
      </form>
    </section>
  </section>
);

export default Search;
