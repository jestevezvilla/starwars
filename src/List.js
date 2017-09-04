
import React, { Component } from 'react';

import Ship from './Ship';
import Loader from './Loader';

class List extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      ships: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships')
      .then((response) => response.json())
      .then(({ results: items }) => this.handlePromise(items));
  }

  handlePromise(ships) {
    this.setState({ ships, loading: false })
  }

  componentWillUnmount() {
    this.handlePromise = () => console.log('unmounted component');
  }

  render() {
    const { ships, loading } = this.state;
    return (
      <div>
        <Loader active={loading} />
        {ships.map((ship) =>
          <Ship key={ship.name} ship={ship} />
        )}
      </div>
    );
  }
}

export default List;