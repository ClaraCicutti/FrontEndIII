import React, { Component } from "react";

class Opciones extends Component {

  componentDidMount() {
    console.log("ComponentDidMount Opciones.jsx");
  }

  handleOnClick = (e) => {
    const value = e.target.value;
    this.props.onClick(value);
  };

  render() {

    const { opciones } = this.props;

    return (
      <div className="opciones">
        <div className="opcion">
          <button
            className="botones"
            onClick={this.handleOnClick}
            value={"a"}
          >
            👉🏻A
          </button>
          <h2>{opciones.a}</h2>
        </div>
        <div className="opcion">
          <button
            className="botones"
            onClick={this.handleOnClick}
            value={"b"}
          >
            👉🏻B
          </button>
          <h2>{opciones.b}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;