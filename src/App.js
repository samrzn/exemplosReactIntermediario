import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions'

class Filhx extends Component {
  render() {
    return (
      <Fragment>
        <button onClick={this.props.onCLick}>Mudar texto</button>
      </Fragment>
    );
  }
}

class Progenitorxs extends Component {
  constructor() {
    super();
    this.state = { texto: 'Este texto.' };
    this.mudar = this.mudar.bind(this);
  }

  mudar() {
    this.setState({ texto: 'Outro texto.' });
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.texto}</h1>
        <Filhx onCLick={this.mudar} />
      </Fragment>
    );
  }
}

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <Progenitorxs />
        <hr />
        <h1>React com Redux.</h1>

        <input type='text' onChange={this.inputChange} value={inputValue} />

        <button onClick={() => clickButton(inputValue)}>
          Enviar
        </button>

        <h3>{newValue}</h3>
      </div>
    );
  }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue });

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
