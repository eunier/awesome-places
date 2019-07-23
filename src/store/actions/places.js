import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    const placeData = {
      name: placeName,
      location: location
    };

    fetch('https://awesome-places-43811.firebaseio.com/places.json', {
      method: 'POST',
      body: JSON.stringify(placeData)
    })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
      })
      .catch(err => console.log(err));
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};
