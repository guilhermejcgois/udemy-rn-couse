import * as actionTypes from "../actions/actionTypes";

i = 0;
uri = "https://yt3.ggpht.com/-FJXWJ1x1bEQ/AAAAAAAAAAI/AAAAAAAAAAA/ZtyuZ-elFr4/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";

const initialState = {
  places: [
    {key:++i,name:"São Paulo",image:{uri}},{key:++i,name:"Sorocaba"},{key:++i,name:"Pilar do Sul"},
    {key:++i,name:"São Paulo"},{key:++i,name:"Sorocaba"},{key:++i,name:"Pilar do Sul"},
    {key:++i,name:"São Paulo"},{key:++i,name:"Sorocaba"},{key:++i,name:"Pilar do Sul"},
    {key:++i,name:"São Paulo"},{key:++i,name:"Sorocaba"},{key:++i,name:"Pilar do Sul"},
    {key:++i,name:"São Paulo"},{key:++i,name:"Sorocaba"},{key:++i,name:"Pilar do Sul"},
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
     return  {
       places: state.places.concat({
         key: Math.random(),
         name: action.placeName,
         image: {uri}
       })
     }
      break;
    case actionTypes.DELETE_PLACE:
      return {
        places: state.places.filter(place => place.key !== action.placeKey),
      };
      break;
    default:
      return state;
  }
};

export default reducer;
