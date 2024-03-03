import React from 'react';
import './CardsHomeBlock.scss';
import CardTrack from '../CardTrack/CardTrack.jsx'

const CardsHomeBlock = () => {
  return (
    <div className='block'>
        <div className='block__text'>
            <h2>
                Автомобли 
            </h2>
        </div>
        <div className='block__cards'>
            {/*
                        latestPets.map((data, index) => {
                        return (
                            <CardTrack key={index} data={data} />
                        )
                    })
            */}
            <CardTrack data = {{ photo:'./das',name: 'Fdsfsdf',}}/>
        </div>
         
    </div>
  )
};
export default CardsHomeBlock;
