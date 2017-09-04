
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Radio } from 'semantic-ui-react';

import './DetailShip.css';
import placeholder from './images/clawcraft.jpg';

class DetailShip extends Component {
  constructor() {
    super();
    this.state = {
      passengers: 0
    }
    
  }
  onChangePassengers = (ev) => {
      
    this.setState({passengers:ev.target.value})
    
  }
    
  render() {
    const props = this.props;
    const {passengers} = this.state;
    return (
      <div className='DetailShip'>
        <img alt={props.details.name} src={placeholder} />
        <p>{props.details.name}</p>
        <Form>
          <Form.Field>
            <Radio toggle label='Install interstellar turbo boost' />
          </Form.Field>
          <Form.Field>
            <label>Number of passengers</label>
            <input type='number' value={passengers} onChange={this.onChangePassengers}/>
          </Form.Field>
          <Form.Field
            label='Reservation Date'
            control='input'
            type='date' />
          <Form.Button onClick={() => props.onDetailSubmit(this.state)}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

DetailShip.propTypes = {
    passengers: PropTypes.bool
};

export default DetailShip;