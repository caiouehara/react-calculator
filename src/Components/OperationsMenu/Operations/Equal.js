import React from 'react';
import { connect } from 'react-redux';
import { resetNumberDisplay } from '../../../actions';

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
        for(let i = boxSum.length; i > 0; i --){
            result = boxSum[0] + boxSum[i];
        }
        
        console.log(result);

        // reset
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

export default connect(mapStateToProps, { resetNumberDisplay })(Equal);

