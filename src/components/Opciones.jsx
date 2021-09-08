import React, { Component, Fragment } from "react";

export default class Opciones extends Component {
  handleOnClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.props.onClick(value, e);
  };

  render() {
    const { opcionA, opcionB } = this.props;
    return (
      <Fragment>
        <div className="opciones">
          <div className="opcion">
            <button
              className="botones"
              onClick={this.handleOnClick}
              value={"a"}
            >
              👉🏻A
            </button>
            <h2>{opcionA}</h2>
          </div>
          <div className="opcion">
            <button
              className="botones"
              onClick={this.handleOnClick}
              value={"b"}
            >
              👉🏻B
            </button>
            <h2>{opcionB}</h2>
          </div>
        </div>
      </Fragment>
    );
  }
}
