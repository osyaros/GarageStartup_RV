import React from 'react'
import './AboutUs.scss';
const AboutUs = () => {
  return (
    <div className='about'>
        <div className='about__left'>
            <h2>О нас</h2>
            <h3>
                Мы - команда энтузиастов, предлагающая уникальные возможности для вашего незабываемого отдыха. Наша компания специализируется на аренде автодомов, призванных сделать ваше путешествие комфортным, увлекательным и беззаботным.
            </h3>
        </div>
        <div className='about__right'>
            <div className='about__right__btn'>
                <button>узнать больше</button>
            </div>
        </div>
        
    </div>
  )
};
export default AboutUs;
