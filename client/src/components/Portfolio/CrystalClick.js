import React from 'react';
import CrystalClickPic from '../../assets/images/crystalClick.png';

import './Portfolio.css';

const CrystalClick = (props) => {
return (
  <div >
    <a href="https://bubblink.herokuapp.com/"><img className='CrystalClick' src={CrystalClickPic} alt='Crystal Click'/></a>
  </div>
)
}



export default CrystalClick;