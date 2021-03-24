import { state as initialState } from '../state.js';

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter((item, index) => (item.id === action.paylod) ? false : true)
            }
        case 'ADD':
            return {
                ...state,
                todos: [...state.todos, action.paylod]
            }
        case 'UPDATE':
            console.log(action.paylod);

            return {
                ...state,
                todos: state.todos.map((item, index) => {
                    if (item.id === action.paylod.id) {
                        item = action.paylod;
                    }

                    return item;
                })
            }
            return state;
        default:
            return state;   
    }
}