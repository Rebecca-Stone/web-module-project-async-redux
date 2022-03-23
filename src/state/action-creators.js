import axios from "axios";

import { ADD_ALL_POKEMON } from "./action-types";

export const pokemonNames = [];
export const fetchAllPokemon = () => (dispatch) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      for (let i = 0; i < res.data.results.length; i++) {
        pokemonNames.push(res.data.results[i].name);
      }
      dispatch({ type: ADD_ALL_POKEMON, payload: pokemonNames });
    })
    .catch((err) => {
        debugger
    });
};
