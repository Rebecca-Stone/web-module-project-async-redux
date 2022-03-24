import React from "react";
import Pokemon from "./Pokemon";

export default class PokemonList extends React.Component {
  render() {
    const { pokemon } = this.props;
    // console.log("pokemon in PokemonList", pokemon);

    return (
      <div>
        <h2>Pokemon: </h2>
        {pokemon.map((pokemon) => {
          //   for (let i = 0; i < pokemon.length; i++) {

          return <Pokemon pokemon={pokemon} key={pokemon} />;
          //   }
        })}
      </div>
    );
  }
}
