import React from 'react';
import NumberScreen from './NumberScreen/NumberScreen.js';
import NumbersKeyboard from './NumberKeyboard/NumberKeyboard.js';
import OperationsMenu from './OperationsMenu/OperationsMenu.js';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NumberScreen/>
        <NumbersKeyboard/>
        <OperationsMenu/>
      </div>
    );
  }

}

export default App;