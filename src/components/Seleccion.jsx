import React, { Component, Fragment } from "react";

export default class Seleccion extends Component {
  componentDidMount() {
    console.log("ComponentDidMount Seleccion.jsx");
  }

  render() {
    const { historial, seleccion } = this.props;

    return (
      <Fragment>
        <div className="recordatorio">
          <h3>Selección anterior: {seleccion}</h3>
          <h4>
            Historial de opciones elegidas:
            <ul>
              {historial.map((seleccion, i) => (
                <li type="circle" key={seleccion + i}>{seleccion}</li>
              ))}
            </ul>
          </h4>
        </div>
      </Fragment>
    );
  }
}
