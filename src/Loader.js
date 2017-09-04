import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';

const Loading = (props) => (
  <div>
      <Dimmer active={props.active}>
        <Loader>Loading</Loader>
      </Dimmer>
  </div>
)

export default Loading