import React, { Component } from 'react';
import { connect } from 'react-redux'
import LightSwitch from './components/LightSwitch';
import Background from './components/Background';
import './App.css';



class App extends Component {
  render() {
    return (
        <div className="App">
          <Background />
          <div id="switches">
          <LightSwitch on={this.props.on} />
          <LightSwitch on={!this.props.on} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  on: state.on
})

export default connect(
  mapStateToProps,
  null
)(App)
