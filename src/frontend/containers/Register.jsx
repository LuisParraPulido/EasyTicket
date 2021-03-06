import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';

import '../assets/styles/components/Register.scss';
import goolgeIcon from '../assets/static/google-icon.png';
import facebookIcon from '../assets/static/facebook-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Regiter = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
            required
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
            required
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
            required
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <section className='register__container--social-media'>
          <p>Registrate con</p>
          <div>
            <img src={facebookIcon} alt='facebook-icon' />
            <img src={twitterIcon} alt='twitter-icon' />
            <img src={goolgeIcon} alt='google-icon' />
          </div>
        </section>
        <Link to='/login'>
        Iniciar sesión
        </Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Regiter);
