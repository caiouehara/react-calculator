import React from 'react';
import Sum from './Operations/Sum';
import Equal from './Operations/Equal';

class OperationsMenu extends React.Component {
  render() {
    return (
      <div className="OperationsMenu">
        <Sum></Sum>
        <Equal></Equal>
      </div>
    )
  };
}

export default OperationsMenu;

