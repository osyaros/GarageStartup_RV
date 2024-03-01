import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo'>
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5823 3L12 17.6709H22.038L33.2342 3H23.5823Z" fill="black"/>
                <path d="M26 60.6013L38.7405 44H49.5506L35.6519 60.6013H26Z" fill="black"/>
                <path d="M21.6205 21.6204H11.5825L24.7091 40.152L18.5319 49.4178H28.5699L35.5192 40.152L21.6205 21.6204Z" fill="black" stroke="black"/>
                <path d="M31.6582 12.3545H41.6961L35.5189 21.2342L48.6455 40.152H38.6075L25.481 21.6203L31.6582 12.3545Z" fill="black" stroke="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30.5C0 27.1268 0.5476 23.8815 1.55875 20.8481H6.88997C5.67161 23.8253 5 27.0842 5 30.5C5 44.5833 16.4167 56 30.5 56C34.3761 56 38.0502 55.1352 41.3399 53.588L35.3858 60.6108C33.795 60.8669 32.163 61 30.5 61C13.6553 61 0 47.3447 0 30.5ZM58.2198 43.2403C60.0046 39.3633 61 35.0479 61 30.5C61 13.6553 47.3447 0 30.5 0C28.7878 0 27.1085 0.14109 25.4732 0.412279L20.2678 7.13593C23.3998 5.7623 26.8609 5 30.5 5C44.5833 5 56 16.4167 56 30.5C56 35.1406 54.7604 39.4918 52.5942 43.2403H58.2198Z" fill="black"/>
            </svg>
            <h1>CTT</h1>
        </div>
        <div className='header__navigation'>
            <li>
                МОДЕЛИ
            </li>
            <li>
                КУПИ ОНЛАЙН
            </li>
            <li>
                СИСТЕМА СЕРВИСОВ
            </li>
            <li>
                ДИЛЛЕРЫ
            </li>
            <li>
                АРЕНДА
            </li>
        </div>
        <div className='header__toolbar'>
            <div className='header__toolbar__profile'>
                <svg width="51" height="44" viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50.4421" height="44" rx="22" fill="white"/>
                    <path d="M16 34C17.9627 30.9898 21.3595 29 25.2211 29C29.0826 29 32.4794 30.9898 34.4421 34" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="24.5" cy="17.5" r="6.5" stroke="black" stroke-width="2"/>
                </svg>
            </div>
            <div className='header__toolbar__profile'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.44214 18V16H21.4421V18H3.44214ZM3.44214 13V11H21.4421V13H3.44214ZM3.44214 8V6H21.4421V8H3.44214Z" fill="black"/>
                </svg>
                МЕНЮ
            </div>
        </div>
    </div>
  )
};
export default Header;
