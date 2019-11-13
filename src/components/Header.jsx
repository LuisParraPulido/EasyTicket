import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <div className='header__icons'>
      <img className='header__icons--img' src='../assets/img/icono-home.png' alt='plazi-video-logo' />
      <h1>EasyTicket</h1>
      <div className='header__icons--menu'>
        <div className='header__menu--profile'>
          <img src='../assets/img/icono-usuario.png' alt='' />
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
