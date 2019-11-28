import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/icono-home.png';
import userIcon from '../assets/static/icono-usuario.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  return (
    <header className='header'>
      <div className='header__icons'>
        <Link to='/'>
          <img className='header__icons--img' src={logo} alt='EasyTicket-logo' />
        </Link>
        <h1>EasyTicket</h1>
        <div className='header__icons--menu'>
          <div className='header__menu--profile'>
            {hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='' />}
            <p>Perfil</p>
          </div>
          <div>
            <ul>
              {hasUser ?
                <li><a href='/'>Cuenta</a></li> :
                null}

              {hasUser ?
                <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> : (
                  <li>
                    <Link to='/login'>
                  Iniciar Sesión
                    </Link>
                  </li>
                )}
            </ul>
          </div>
        </div>
      </div>

    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
