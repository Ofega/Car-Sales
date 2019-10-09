import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export const AddedFeature = ({ feature, removeFeature }) => {
  return (
    <li>
      <button className="button" onClick={() => removeFeature(feature)}>X</button>
      {feature.name}
    </li>
  );
};

export default connect(
  state => state,
  actionCreators
)(AddedFeature);
