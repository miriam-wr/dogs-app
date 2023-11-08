import { INCREMENT_BREED_LIKES_COUNTER, SET_BREEDS_LIST, SET_COUNTER } from './actionTypes'

export const setBreedsList = breedsList => {
    return {
        type: SET_BREEDS_LIST,
        payload: {breedsList}
    };
};

export const setCounter = counter => {
    return {
        type: SET_COUNTER,
        payload: {counter}
    };
};

export const incrementBreedLikesCounter = (breed) => {
    return {
        type: INCREMENT_BREED_LIKES_COUNTER,
        payload: {breed}
    };
};
