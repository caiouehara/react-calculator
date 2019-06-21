import React from 'react';
import { connect } from 'react-redux';
import { addNumberDisplay } from '../../actions';
class NumbersKeyboard extends React.Component {

    handleClick = event => {
        this.props.addNumberDisplay(event.target.id);
    }
    
    render(){
        return (
            <div className="NumbersKeyboard">
                <button className="number" onClick={this.handleClick} id='0'>0</button>
                <button className="number" onClick={this.handleClick} id='1'>1</button>
                <button className="number" onClick={this.handleClick} id='2'>2</button>
                <button className="number" onClick={this.handleClick} id='3'>3</button>
                <button className="number" onClick={this.handleClick} id='4'>4</button>
                <button className="number" onClick={this.handleClick} id='5'>5</button>
                <button className="number" onClick={this.handleClick} id='6'>6</button>
                <button className="number" onClick={this.handleClick} id='7'>7</button>
                <button className="number" onClick={this.handleClick} id='8'>8</button>
                <button className="number" onClick={this.handleClick} id='9'>9</button>
            </div> 
        );       
    }
};

const mapStateToProps = state =>{
    return {state: state.numberDisplay};
}

export default connect(mapStateToProps, {  addNumberDisplay  })(NumbersKeyboard);
