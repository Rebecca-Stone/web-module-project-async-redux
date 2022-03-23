import { ADD_ALL_POKEMON } from "./action-types";

const initialPokemon = [];

function pokemon(state = initialPokemon, action) {
    console.log('state in the reducer', state);
    switch(action.type) {
        case ADD_ALL_POKEMON:
            return action.payload;
        default:
            return state 
    }
}

export default pokemon;