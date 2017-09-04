
import React, { Component } from 'react';

import Loader from './Loader';
import DetailShip from './DetailShip';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      details: {},
      params: {passengers: 0}
    }
  }

  componentDidMount() {
    const shipID = this.props.match.params.id;
    fetch(`https://swapi.co/api/starships/${shipID}`)
      .then((response) => response.json())
      .then((details) => this.handlePromise(details));
  }

  handlePromise(details) {
    this.setState({ details, loading: false })
  }

  componentWillUnmount() {
    this.handlePromise = () => console.log('unmounted component');
  }

  onDetailSubmit = (state) =>
    this.setState({params: state})  
  

  render() {
    const { ...props } = this.state;
    return (
      <div>
        <Loader active={props.loading} />
        <DetailShip details={props.details} params={props.params} onDetailSubmit={this.onDetailSubmit}/>
      </div>
    );
  }
}

export default Detail;