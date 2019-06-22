import React from 'react';
import { connect } from 'react-redux';
import { resetNumberDisplay, resetBlockNumber } from '../../../actions';

class Equal extends React.Component {

    handleClick = () => {
        let boxSum = [];
        // Creating Boxes
        for(let singleOperations of this.props.state.blockNumber){
            if (singleOperations[1] === 'SUM'){
                boxSum.push(parseInt(singleOperations[0]));
            }
        }
        // Order in Math Expressions
        // Sum
        let result = 0;
        result = boxSum.reduce(function(accumulator, currentValue){return accumulator += currentValue});

        console.log(result);

        // reset
        this.props.resetBlockNumber();
        this.props.resetNumberDisplay();
        result = 0;
        boxSum = [];
    }

    render() {
        return (
            <div className="Equal">
                <button onClick={this.handleClick}>EQUAL</button>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return { state };
}

export default connect(mapStateToProps, { resetNumberDisplay, resetBlockNumber })(Equal);

