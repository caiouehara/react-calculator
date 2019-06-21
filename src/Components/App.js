import React from 'react';
import NumberScreen from './NumberScreen/NumberScreen.js';
import NumbersKeyboard from './NumberKeyboard/NumberKeyboard.js';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NumberScreen/>
        <NumbersKeyboard/>
      </div>
    );
  }

}

export default App;