import {FETCH_WEATHER} from '../actions/index';
export default function(state=[], action){
  // console.log(action);
  switch (action.type) {
    case FETCH_WEATHER:
      //return [action.payload.data]; // put it in array because we get a couple different data of weather and city.
      //return state.push(action.payload.data); // usually do this. to add new cities, but it get messed up, never set state by state = blablala, we only do it by setState.
      //Dont manipulate state directly

      //return state.concat([action.payload.data]); // doesnt do anything to the state array. it makes a new array.
      return [action.payload.data, ...state]; // es6, same as above , make new array, put action.payload.data in it. and get all things from state's array and put it in it.
  }

  return state
}
