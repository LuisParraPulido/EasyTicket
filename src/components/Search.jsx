import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchRequest } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const [form, setValues] = useState({
    from: '',
    to: '',
    departure: new Date(),
    returningDate: new Date(),
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchRequest(form);
    props.history.push('/listTickets');
  };

  return (
    <section className='main'>
      <div className='main__img'>
        <p>Vive experiencias únicas.</p>
      </div>
      <section className='main__container'>
        <form className='main__container--form' onSubmit={handleSubmit}>
          <h3>ORIGEN</h3>
          <input
            name='from'
            className='input'
            type='text'
            onChange={handleInput}
          />
          <h3>DESTINO</h3>
          <input
            name='to'
            className='input'
            type='text'
            onChange={handleInput}
          />
          <div className='main__container--form--div'>
            <div>
              <label>IDA</label>
              <input
                name='departure'
                className='input'
                type='date'
                placeholder='dd/mm/aaaa'
                onChange={handleInput}
              />
            </div>
            <div>
              <label>VUELTA</label>
              <input
                name='returningDate'
                className='input'
                type='date'
                placeholder='dd/mm/aaaa'
                onChange={handleInput}
              />
            </div>
          </div>
          <button type='submit'>Buscar</button>
        </form>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  searchRequest,
};

export default connect(null, mapDispatchToProps)(withRouter(Search));
