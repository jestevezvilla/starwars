
import React from 'react';
import { Link } from 'react-router-dom';

import './Ship.css';
import placeholder from './images/clawcraft.jpg';

const getShipID = (url) => {
  const result = url.split('/');
  return result[result.length - 2];
}


const Ship = (props) => (
  <Link className='Card' to={`/ship/${getShipID(props.ship.url)}`}>
    <img alt={props.ship.name} src={placeholder} />
    <p>{props.ship.name}</p>
  </Link>

)

export default Ship;