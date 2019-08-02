import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayHistory } from '../../actions'; 

class NumberScreen extends Component {
  render() {
    return (
      <div className="NumberScreen">
        <h1>is Working</h1>
        <p>{this.props.state}</p>
        <button onClick={this.props.displayHistory}>Log</button>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return { state: state.numbersThread };
}

export default connect(mapStateToProps, { displayHistory })(NumberScreen);

