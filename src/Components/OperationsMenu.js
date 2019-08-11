import React from 'react';
import { connect } from 'react-redux';
class OperationsMenu extends React.Component {
  render() {
    return (
      <div className="OperationsMenu">
        <div className="Sum">
          <button onClick={console.log(this.props.state)}> SUM </button>
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

export default connect(mapStateToProps, {  })(OperationsMenu);