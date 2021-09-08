import React, { Component, Fragment } from "react";
import Opciones from "./Opciones.jsx";
import Seleccion from "./Seleccion.jsx";
import data from "./data.json";

let indice;
class Historia extends Component {
  state = {
    historia: "",
    opcionA: "",
    opcionB: "",
    historias: [],
    seleccion: "",
    historial: [],
    id: ""
  };

  componentDidMount() {
    console.log("ComponentDidMount App.js");
    indice = 1;
    this.setState({
      historia: data[0].historia,
      opcionA: data[0].opciones.a,
      opcionB: data[0].opciones.b,
      historias: data,
      seleccion: "",
      historial: [],
      id: data[0].id
    });
  }

  handleClick = (valor, e) => {
    indice++;
    let historiaSiguiente = data.filter(
      (data) => data.id === indice + valor
    )[0];

    indice - 1 < 5
      ? valor === "a"
        ? this.setState((prevState) => ({
            seleccion: "A",
            historial: [...prevState.historial, "A"],
            historia: historiaSiguiente.historia,
            opcionA: historiaSiguiente.opciones.a,
            opcionB: historiaSiguiente.opciones.b,
            id: historiaSiguiente.id
          }))
        : this.setState((prevState) => ({
            seleccion: "B",
            historial: [...prevState.historial, "B"],
            historia: historiaSiguiente.historia,
            opcionA: historiaSiguiente.opciones.a,
            opcionB: historiaSiguiente.opciones.b,
            id: historiaSiguiente.id
          }))
      : e.preventDefault(alert("Fin de la historia 🥳"));
  };

  handleReset = () => {
    this.componentDidMount();
  };

  render() {
    const { historial, historia, seleccion, opcionA, opcionB} = this.state;
    return (
      <Fragment>
        <div className="layout">
          <h1 className="historia">{historia}</h1>

          <Opciones
            onClick={this.handleClick}
            opcionA={opcionA}
            opcionB={opcionB}
          />

          <Seleccion
            seleccion={seleccion}
            historial={historial}
          />
        </div>
        <button
          type="reset"
          onClick={this.handleReset}
          className={"btnReset"}
        >
          <p>👈🏻Reset</p>
        </button>
          
      </Fragment>
    );
  }
}

export default Historia;
