import React from 'react';
import { connect } from 'react-redux'
import { toggle } from "../store/actions"
import './index.css';

class LightSwitch extends React.Component {
  render() {
    return (
      <div id="switch" onClick={()=>{this.props.toggle()}} >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 43.2 61.6">
        <path d="M2.8 0A2.8 2.8 0 0 0 0 2.8v55.9c0 1.6 1.3 2.9 2.8 2.9H31c1.6 0 2.9-1.3 2.9-2.9V2.8C33.9 1.3 32.6 0 31 0z" fill="#2196f3"/>
     { this.props.on && <g> 
        <path d="M43.2 47.3c0 .6-.3 1.2-.7 1.7l-9.2 11.3a3 3 0 0 1-2.4 1.1H3.2c-1.7 0-3-1.3-3-2.8 0-.6.2-1.2.6-1.7l7.8-9.6z" fill="#1e88e5"/>
        <path d="M8.6 47.3l.2-.3L.5 31.6c-.5-.9-.4-1.9.1-2.7.6-.8 1.6-1.3 2.6-1.4H34a3 3 0 0 1 3 2l6 16.9.3.9H8.6z" fill="#64b5f6"/>
      </g> }  
     { !this.props.on && <g>
        <path d="M43.2 19.8c0 .6-.3 1.2-.7 1.7l-9.2 11.3a3 3 0 0 1-2.4 1H3.2c-1.7 0-3-1.2-3-2.7 0-.6.2-1.2.6-1.7l7.8-9.6z" fill="#1e88e5"/>
        <path d="M8.6 19.8l.2-.3L.5 4C0 3.2 0 2.2.6 1.4 1.2.5 2.2 0 3.2 0H34a3 3 0 0 1 3 2l6 16.9.3.9H8.6z" fill="#64b5f6"/>
     </g> }
    </svg>
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggle
}

export default connect(
  null,
  mapDispatchToProps
)(LightSwitch)

