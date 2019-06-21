import React from 'react';
import { connect } from 'react-redux';
import { addBlockNumber, resetNumberDisplay } from '../../../actions';

class Sum extends React.Component {

    handleClick = () => {
        this.props.addBlockNumber(this.props.state.numberDisplay[0], 'SUM');
        this.props.resetNumberDisplay();
        // is displaying 1 array late 
        console.log(this.props.state);
    };

    render() {
        return (
            <div className="Sum">
                <button onClick={this.handleClick}>SUM</button>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return { state };
}

export default connect(mapStateToProps, { addBlockNumber, resetNumberDisplay })(Sum);

