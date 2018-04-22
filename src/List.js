import React from "react";
import { connect } from "react-redux";
import { compose, withState, withHandlers } from "recompose";

import { confirmFetch, fetchStarWarsRequest } from "./actions";

import Ship from "./Ship";
import Loader from "./Loader";

const List = props => {
  const { confirmFetch, onFetchClick, open, people, loading } = props;
  return (
    <div>
      <div
        style={{ position: "absolute", display: `${open ? "block" : "none"}` }}
      >
        <button onClick={confirmFetch}>Confirm</button>
      </div>
      <button onClick={onFetchClick}>Click</button>
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
  confirmFetch: () => dispatch(confirmFetch())
});

const connectedList = connect(mapStateToProps, bindActionsToDispatch);

export default compose(
  connectedList,
  withState("open", "handleOpen", false),
  withHandlers({
    onFetchClick: props => () => {
      props.handleOpen(true);
      props.fetchStarWarsRequest();
    }
  })
)(List);
