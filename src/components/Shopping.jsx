import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUserTicket } from '../actions';
import '../assets/styles/components/Shopping.scss';

const Shopping = (props) => {
  const { userTicket } = props;
  const [form, setValues] = useState({
    name: '',
    lastname: '',
    country: '',
    document: '',
    birthday: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createUserTicket({
      ...userTicket,
      'user': form,
    });
    props.history.push('/user-profile');
  };
  return (
    <section className='main'>
      <div className='main_checkbox'>
        <h2>¿Cómo deseas pagar?</h2>
        <ul>
          <label className='container' >
            Tarjeta de crédito
            <input type='checkbox' />
            <span className='checkmark' />
          </label>
          <label className='container'>
            Tarjeta de débito
            <input type='checkbox' />
            <span className='checkmark' />
          </label>
          <label className='container'>
            Bitcoin
            <input type='checkbox' />
            <span className='checkmark' />
          </label>
          <label className='container'>
            Efecty
            <input type='checkbox' />
            <span className='checkmark' />
          </label>
        </ul>
      </div>

      <div className='main_form'>
        <div className='main_form-container'>
          <h2>¿Quiénes viajan?</h2>
          <form className='main_form--data' onSubmit={handleSubmit}>
            <h3>NOMBRES</h3>
            <input
              name='name'
              className='input'
              type='text'
              onChange={handleInput}
            />
            <h3>APELLIDOS</h3>
            <input
              name='lastname'
              className='input'
              type='text'
              onChange={handleInput}
            />
            <h3>PAÍS DE RESIDENCIA</h3>
            <input
              name='country'
              className='input'
              type='text'
              onChange={handleInput}
            />
            <h3>NÚMERO DE DOCUMENTO</h3>
            <input
              name='document'
              className='input'
              type='text'
              onChange={handleInput}
            />
            <h3>FECHA DE NACIMIENTO</h3>
            <input
              name='birthday'
              className='input'
              type='date'
              onChange={handleInput}
            />
            <div className='main_result'>
              <div className='main_result-items'>
                <h2>Datos de la compra:</h2>
                <h3>Fecha:</h3>
                <p>{`IDA: ${userTicket.departing.date}, ${userTicket.departing.hour}`}</p>
                <p>{`VUELTA: ${userTicket.returning.date}, ${userTicket.returning.hour}`}</p>
              </div>
            </div>

            <div className='main_price'>
              <p>
                <input type='checkbox' />
                leí y acepto las condiciones de compra y políticas de privacidad de EasyTicket
              </p>
              <h2>{`TOTAL: $${userTicket.price}`}</h2>
            </div>
            <button className='button' type='submit'>Comprar</button>
          </form>
        </div>
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
  createUserTicket,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Shopping));

