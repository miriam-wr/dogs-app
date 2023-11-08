import { INCREMENT_BREED_LIKES_COUNTER, SET_BREEDS_LIST, SET_COUNTER } from '../actions/actionTypes'

const initialState = {
  breedsList: null,
  counter: null
}

export default (state = initialState, action) => {

  const { payload } = action;

  switch (action.type) {
    case SET_BREEDS_LIST: {
      const { breedsList } = payload;
      const newState = {...state, breedsList}
      return newState;
    }
    case SET_COUNTER: {
      const { counter } = payload;
      const newState = {...state, counter}
      return newState;
    }
    case INCREMENT_BREED_LIKES_COUNTER: {
      const { breed } = payload;
      const breedCounter = state.counter[breed];
      breedCounter.likes++;
      const newState = { ...state, counter: { ...state.counter, [breed]: breedCounter } }
      return newState;
    }
    default:
      return state;
  }
};