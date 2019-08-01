import React from 'react';
import { connect } from 'react-redux';
import { addBlockNumber } from '../../../actions';

class Sum extends React.Component {

    handleClick = () => {
        this.props.addBlockNumber(parseInt(this.props.state.numberDisplay), 'SUM');
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

export default connect(mapStateToProps, { addBlockNumber })(Sum);

