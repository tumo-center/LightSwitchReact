import React from 'react';
import { connect } from 'react-redux';
import './index.css';

class Background extends React.Component {
  render() {
    return (
      <div
      id="background"
      className={!this.props.on ? 'off' : ''}
      >

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
)(Background)


