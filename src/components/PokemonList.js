import React from "react";
import Pokemon from "./Pokemon";

export default class PokemonList extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <h2>Pokemon: </h2>
        {pokemon.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon} />;
        })}
      </div>
    );
  }
}
