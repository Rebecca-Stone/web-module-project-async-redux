import React from "react";

export default class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log('pokemon in pokemon.js', pokemon);
    return <div>{pokemon}</div>;
  }
}
