import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Login.scss';
import goolgeIcon from '../assets/static/google-icon.png';
import facebookIcon from '../assets/static/facebook-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />Recuérdame 
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <p>Inicia sesión con</p>
        <div>
          <img src={facebookIcon} />
          <img src={twitterIcon} />
          <img src={goolgeIcon} />
        </div>
      </section>
      <p className='login__container--register'>No tienes ninguna cuenta </p>
      <Link to='/register'>
      Regístrate
      </Link>
    </section>
  </section>
);

export default Login;
