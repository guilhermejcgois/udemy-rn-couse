import * as actionTypes from "./actionTypes";

export const addPlace = (placeName) => ({
  type: actionTypes.ADD_PLACE,
  placeName
});

export const deletePlace = (placeKey) => ({
  type: actionTypes.DELETE_PLACE,
  placeKey
});
