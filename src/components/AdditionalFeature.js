import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const AdditionalFeature = ({ feature, state }) => {
  return (
    <li>
      <button className="button" onClick={state.buyItem}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(
  state => state,
  actionCreators
)(AdditionalFeature);
