import React, { useEffect } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";

import { connect } from "react-redux";
import * as actionCreators from "./state/action-creators";

function App(props) {
  const { pokemon, fetchAllPokemon } = props;
  useEffect(() => {
    fetchAllPokemon();
  }, []);
  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state,
  };
};

export default connect(mapStateToProps, actionCreators)(App);
