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
            <div className='home__wrap__extablocks__block'>

            </div>
          </div>
      </div>
      
    </div>
    
  )
}
export default Home;
