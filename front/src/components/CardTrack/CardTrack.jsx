import React from 'react'
import './CardTrack.scss';
import bed from './bed.svg';
import shower from './shower.svg';
import track from './track.png';
import toilet from './toilet.svg';
import baseUrl from '../../../config.js';
const CardTrack = ({data}) => {
  let photo = data.photo;
  let name = data.name;
  let sleepplace = data.sleepplace;
  let license = data.license;
  let engine = data.engine;
  let shower_a = data.shower;
  let drivetype = data.drivetype;
  let toilet_a = data.toilet;
  return (
    <div className="card">
      <div className='card__photo'>
        <img src={baseUrl+'/'+photo} className="card__photo" alt="photo" />
      </div>
      <div className='card__content'>
        <div className='card__content__name'>
            <h3>{name}</h3>
        </div>
        <div className='card__content__info'>
          <div className="card__content__info__bedblock">
              <span>{sleepplace}</span>
              <img src={bed} width="22px" height="12px"/>
          </div>
          <div className='card__content__info__license'>
            <span> категория {license}</span>
          </div>
          <div className='card__content__info__engine'>
            <span>{engine}</span>
          </div>
          {shower_a ? 
          (<div className='card__content__info__showerblock'>
               <img src={shower} width="24px" height="24px" />
          </div>):null}
          <div className='card__content__info__type'>
              <span>{drivetype}</span>
          </div>
          {toilet_a ?
          (<div className='card__content__info__toilet'>
               <img src={toilet} width='16px' height='16px'/>
          </div>):null}
        </div>
      </div>
    </div>
  )
}
export default CardTrack;
