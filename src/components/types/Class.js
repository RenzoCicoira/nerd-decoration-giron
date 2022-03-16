import React, { Component } from 'react';
import logo from '../../assets/logoNerDecoration.png';

class ClassComponent extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <h3>ClassComponent</h3>
        <h2>{this.props.nombre} {this.props.apellido} {this.props.edad}</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default ClassComponent; 