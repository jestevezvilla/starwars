import React from 'react';
import { connect } from 'react-redux';

import { fetchStarWarsRequest } from './actions';

import Ship from './Ship';
import Loader from './Loader';

const List = props => {
  const { fetchStarWarsRequest, people = [], loading } = props;
  console.log(props);
  return (
    <div>
      <button onClick={fetchStarWarsRequest}>Click</button>
      <Loader active={loading} />
      {people.map(ship => <Ship key={ship.name} ship={ship} />)}
    </div>
  );
};

const mapStateToProps = ({ peopleSuccess }) => {
  return { people: peopleSuccess.people };
};

const bindActionsToDispatch = dispatch => ({
  fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
});

export default connect(mapStateToProps, bindActionsToDispatch)(List);
