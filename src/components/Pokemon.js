import React from "react";

export default class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return <div>{pokemon}</div>;
  }
}
