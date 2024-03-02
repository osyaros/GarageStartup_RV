import React from 'react'
import Header from '../../components/Header/Header.jsx'
import './Home.scss';
import AboutUs from '../../components/AboutUs/AboutUs.jsx';
export const Home = () => {
  return (  
    <div className='home'>
      <Header />
      <div className="background">
        <div className='background__title'>
          <span>Комфортно наедине с природой </span>
        </div>
        <div className='background__downtitle'>
          <h3>
            Аренда автодомов и уникальные маршруты для незабываемых путешествий по всей стране. Путешествуйте с комфортом и свободой, изучайте новые места с нами!
          </h3>
        </div>
        <div className='background__btn'>
          <button>начать путешествие </button>
        </div>
        
      </div>
      <div>
        <h3>
          Мы организуем путешествия на автодомах и сдаем их в аренду по всему миру. Работаем с проверенными турецкими прокатными компаниями.
        </h3>
      </div>
      <AboutUs />
    </div>
    
  )
}
export default Home;
