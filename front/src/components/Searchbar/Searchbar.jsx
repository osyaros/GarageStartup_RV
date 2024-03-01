import React, { useState } from 'react'

const Searchbar = () => {
  let [inp,setInp] = useState('');
  return (
    <div className='searchbar'>
        <div className='searchbar__text'>
          <input placeholder='Поиск...' onChange={(e) => setInp(e.currentTarget.value)}></input>
        </div>
        <div className='searchbar__button'>

        </div>
    </div>
  )
}
export default Searchbar;