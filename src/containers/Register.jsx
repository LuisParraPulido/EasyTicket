import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss';
import goolgeIcon from '../assets/static/google-icon.png';
import facebookIcon from '../assets/static/facebook-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Regiter = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Registrarme</button>
      </form>
      <section className='register__container--social-media'>
        <p>Registrate con</p>
        <div>
          <img src={facebookIcon} />
          <img src={twitterIcon} />
          <img src={goolgeIcon} />
        </div>
      </section>
      <Link to='/login'>
      Iniciar sesión
      </Link>
    </section>
  </section>
);

export default Regiter;
