import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/icono-home.png';
import userIcon from '../assets/static/icono-usuario.png';

const Header = () => (
  <header className='header'>
    <div className='header__icons'>
      <img className='header__icons--img' src={logo} alt='plazi-video-logo' />
      <h1>EasyTicket</h1>
      <div className='header__icons--menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <div>
          <ul>
            <li><a href='/'>Cuenta</a></li>
            <li><a href='/'>Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>

  </header>
);

export default Header;
