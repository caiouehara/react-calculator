import React from 'react';
import { connect } from 'react-redux';
import operationsThread from './operationsThread';
import { addScreenNumber, resetNumbersThread } from '../../actions';
class OperationsMenu extends React.Component {
  componentDidUpdate() {
    console.log(this.props.state)
  }

  handleOperation = (operationType) => {
    operationsThread.operationsToDo.push(this.props.state.numbersThread, operationType );
    this.props.resetNumbersThread();

    if (operationsThread.operationsToDo.length === 4) {
      operationsThread.operationsDo();
      this.props.addScreenNumber(operationsThread.operationsFinish());
    }
  } 

  render() {
    return (
      <div className="OperationsMenu">
        <div className="Sum">
          <button onClick={() => this.handleOperation("SUM")}> SUM </button>
        </div>

        <div className="Equal">
          <button onClick={() => this.handleOperation("EQUAL")}> EQUAL </button>
        </div>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return { state };
}

export default connect(mapStateToProps, { addScreenNumber, resetNumbersThread })(OperationsMenu);