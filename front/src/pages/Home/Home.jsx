import React from 'react'
import Header from '../../components/Header/Header.jsx'
import './Home.scss';
import backphoto from './background.png';
export const Home = () => {
  return (  
    <div className='home'>
      <Header />
      <div className="home__wrap">
        <div className='home__wrap__background'>
          <img src={backphoto}/>
          <div className='home__wrap__background__extra'>
            <div className='home__wrap__background__extra__title'>
                <span>Комфортно наедине с природой </span>
              </div>
              <div className='home__wrap__background__extra__downtitle'>
                <h3>
                Почему Вы должны попробовать путешествие с автодомом?
                </h3>
              </div>
            </div>
          </div>
          
          <div className='home__wrap__extrablocks'>
            <div className='home__wrap__extrablocks__att'>
              <span>Самый выгодный и <b>необычный</b> туризм</span>
            </div>
            <div className='home__wrap__extrablocks__block'>
              <h2>
                Автодома – это просто
              </h2>
              <span>
                Давайте это докажем
              </span>
              <a href="https://t.me/STT_manager_bot">
              <button >
                <span>
                решить вопросики
                </span>
                  <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.472 6.08L14.512 9.992L13.192 8.672L15.16 6.704L15.136 6.488H0.496V4.376H15.136L15.16 4.184L13.192 2.216L14.512 0.871999L18.472 4.832V6.08Z" fill="black"/>
                  </svg>
              </button>
              </a>
              
            </div>
          </div>
      </div>
      
    </div>
    
  )
}
export default Home;
