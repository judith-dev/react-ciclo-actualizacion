import React, { Component } from 'react';
import './App.css';
import EjemploDeCicloActualizacion from './life-cycle/ejemploCicloDeActualizacion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EjemploDeCicloActualizacion></EjemploDeCicloActualizacion>
      </div>
    );
  }
}

export default App;
