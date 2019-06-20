import React, {Component} from 'react';
import NumberScreen from './NumberScreen/NumberScreen.js';
import NumbersKeyboard from './NumberKeyboard/NumberKeyboard.js';

class App extends Component {

  render(){
    return (
      <div className="App">
        <NumberScreen></NumberScreen>
        <NumbersKeyboard/>
      </div>
    );
  }

}

export default App;
