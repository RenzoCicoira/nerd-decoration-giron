import React, { Component } from 'react';
import logo from '../../assets/logoNerDecoration.png';

class ClassComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
    };   
  }

  updateBackgroundColor = () => {
    this.setState({
      color: 'blue'
    })
  }

  render () {
    return (
      <div style={{backgroundColor: this.state.color}}>
        <h3>ClassComponent</h3>
        <h2>{this.props.nombre} {this.props.apellido} {this.props.edad}</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onClick={this.updateBackgroundColor}>
          Cambia de color
        </button>
      </div>
    )
  }
}

export default ClassComponent; 