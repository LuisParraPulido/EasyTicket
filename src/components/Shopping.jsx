import React from 'react';
import '../assets/styles/components/Shopping.scss';

const Shopping = () => (
  <section className='main'>
    <div className='main_checkbox'>
      <h2>¿Cómo deseas pagar?</h2>
      <ul>
        <label className='container'>
          Tarjeta de crédito
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <label className='container'>
          Tarjeta de débito
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <label className='container'>
          Bitcoin
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        <label className='container'>
          Efecty
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
      </ul>
    </div>

    <div className='main_form'>
      <div className='main_form-container'>
        <h2>¿Quiénes viajan?</h2>
        <form className='main_form--data'>
          <h3>NOMBRES</h3>
          <input className='input' type='text' />
          <h3>APELLIDOS</h3>
          <input className='input' type='text' />
          <h3>PAÍS DE RESIDENCIA</h3>
          <input className='input' type='text' />
          <h3>NÚMERO DE DOCUMENTO</h3>
          <input className='input' type='text' />
          <h3>FECHA DE NACIMIENTO</h3>
          <input className='input' type='date' />
        </form>
      </div>
    </div>

    <div className='main_result'>
      <div className='main_result-items'>
        <h2>Datos de la compra:</h2>
        <h3>Fecha:</h3>
        <p>Ida: sábado 20 diciembre 2019, 07:00hs</p>
        <p>Vuelta: lunes 22 diciembre 2019, 13:00hs</p>
        <h3>Pasajeros:</h3>
        <p>Nombre: Pepe</p>
        <p>Apellidos: Suarez</p>
        <p>Documento de identidad: 1019064154</p>
      </div>
    </div>

    <div className='main_price'>
      <p>
        <input type='checkbox' />
        leí y acepto las condiciones de compra y políticas de privacidad de EasyTicket
      </p>
      <h2>Total: $1.600.000</h2>
    </div>
    <button className='button' type='button'>Comprar</button>
  </section>
);

export default Shopping;
