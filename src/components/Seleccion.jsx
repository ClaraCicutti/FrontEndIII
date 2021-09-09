import React, { Component, Fragment } from "react";

export default class Seleccion extends Component {

  componentDidMount() {
    console.log("ComponentDidMount Seleccion.jsx");
  }

  render() {
    const { historial, eleccion } = this.props;

    return (
      <Fragment>
        <div className="recordatorio">
          <h3>Selección anterior: {eleccion}</h3>
          <h4>Historial de opciones elegidas: </h4>
            <ul>{historial.map((eleccion, i) => (
                <li type="circle" key={eleccion + i}>{eleccion}</li>)
                )}
            </ul>
          
        </div>
      </Fragment>
    );
  }
}
