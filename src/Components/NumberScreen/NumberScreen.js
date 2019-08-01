import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayHistory } from '../../actions'; 

class NumberScreen extends Component {
  render() {
    return (
      <div className="NumberScreen">
        <h1>is Working</h1>
        <p>{}</p>
        <button onClick={this.props.displayHistory}>Log</button>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return { state: state.numberDisplay };
}

export default connect(mapStateToProps, { displayHistory })(NumberScreen);

