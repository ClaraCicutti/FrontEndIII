import React, { Component, Fragment } from "react";
import Opciones from "./Opciones.jsx";
import Seleccion from "./Seleccion.jsx";
import data from "./data.json";

class Historia extends Component {
  state = {
    historias: data,
    contador: 0,
    eleccion: "",
    historial: []
  };

  componentWillMount() {
    console.log("ComponentDidMount App.js");
    this.setState({
      eleccion: "",
      historial: [],
      contador: 1
    });
  }

  handleClick = (valor) => {
    this.state.contador < 5
    ? this.setState((prevState) => ({
        eleccion: valor,
        contador: prevState.contador + 1,
        historial: [...prevState.historial, valor.toUpperCase()],
      }))
    :
      alert("Fin de la historia 🥳")
  };

  handleReset = () => {
    this.componentWillMount();
  };

  render() {

    const { contador, eleccion, historias, historial } = this.state;

    const id = contador + eleccion;
    let index = historias.findIndex(historia => historia.id === id);

    return (
      <Fragment>
        <div className="layout">
          <h1 className="historia">{data[index].historia}</h1>

          <Opciones
            onClick={this.handleClick}
            opciones={historias[index].opciones}
          />

          <Seleccion
            eleccion={eleccion.toUpperCase()}
            historial={historial}
          />
        </div>
        <button onClick={this.handleReset} className={"btnReset"}>
          <p>👈🏻Reset</p>
        </button>
          
      </Fragment>
    );
  }
}

export default Historia;
