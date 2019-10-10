import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const AdditionalFeature = ({ feature, buyItem }) => {
  return (
    <li>
      <button className="button" onClick={() => buyItem(feature)}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(
  state => state,
  actionCreators
)(AdditionalFeature);
