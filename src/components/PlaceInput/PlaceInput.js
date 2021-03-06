import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const PlaceInput = props => {
  return (
    <DefaultInput
      placeholder="Place Name"
      value={props.placeData.value}
      valid={props.placeData.valid}
      touched={props.placeData.touched}
      onChangeText={props.onChangeText}
    />
  );
};

export default PlaceInput;
