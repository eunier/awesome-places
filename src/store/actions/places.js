import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    const placeData = {
      name: placeName,
      location: location
    };

    fetch(
      'https://us-central1-awesome-places-43811.cloudfunctions.net/storeImage',
      {
        method: 'POST',
        body: JSON.stringify({
          image: image.base64
        })
      }
    )
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
      })
      .catch(err => console(err));

    // fetch('https://awesome-places-43811.firebaseio.com/places.json', {
    //   method: 'POST',
    //   body: JSON.stringify(placeData)
    // })
    //   .then(res => res.json())
    //   .then(parsedRes => {
    //     console.log(parsedRes);
    //   })
    //   .catch(err => console.log(err));
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};
