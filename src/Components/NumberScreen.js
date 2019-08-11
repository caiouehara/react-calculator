import React, { Component } from 'react';
import { connect } from 'react-redux';

class NumberScreen extends Component {
  render() {
    return (
      <div className="NumberScreen">
        <h1>is Working</h1>
        <p>{this.props.state}</p>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return { state: state.numbersThread };
}

export default connect(mapStateToProps, {  })(NumberScreen);

