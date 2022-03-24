import React, {useEffect} from 'react';
import './App.css';
import PokemonList from "./components/PokemonList"

import { connect } from 'react-redux';
import * as actionCreators from './state/action-creators'


function App(props) {
  const { 
    pokemon,
    fetchAllPokemon
  } = props
  // console.log('props in app.js', pokemon)
  useEffect(() => {
    fetchAllPokemon()
  }, [])
  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

const mapStateToProps = state => {
  // console.log('state in app.js', state)
  return {
    pokemon: state,
  }
};


export default connect(mapStateToProps, actionCreators)(App);