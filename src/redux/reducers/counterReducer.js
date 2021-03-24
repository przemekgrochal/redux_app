import { state as initialState } from '../state.js';

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        default:
            return state;   
    }
}