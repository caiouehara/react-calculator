import React from 'react';
import { connect } from 'react-redux';
import { addOperation } from '../redux/actions';
class OperationsMenu extends React.Component {

  handleClick = event => {
    this.props.addOperation(event.target.id)
  }

  render() {
    return (
      <div className="OperationsMenu">
        <button onClick={this.handleClick} id="+"> SUM </button>
        <button onClick={this.handleClick} id="-"> SUBTRACT </button>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return { state };
}

export default connect(mapStateToProps, { addOperation })(OperationsMenu);