import React from 'react';
import './Header.scss';
import logo from './../../assets/logo.svg';
const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo'>
            <img src={logo}></img>
        </div>
        <div className='header__navigation'>
            <li>
                каталог
            </li>
            <li>
                о нас
            </li>
            <li>
                карта
            </li>
            <li>
                маршруты
            </li>
        </div>
    </div>
  )
};
export default Header;
