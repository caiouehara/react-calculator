import React from 'react';
import { connect } from 'react-redux';
import { addNumber } from '../redux/actions';
class NumbersKeyboard extends React.Component {
    handleClick = event => {
        this.props.addNumber(event.target.id);
        console.log(this.props.state)
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
    return {state} ;
}

export default connect(mapStateToProps, { addNumber })(NumbersKeyboard);
