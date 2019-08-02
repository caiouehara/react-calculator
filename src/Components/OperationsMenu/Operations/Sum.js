import React from 'react';
import { connect } from 'react-redux';
import { operation } from '../../../actions';

class Sum extends React.Component {

    handleClick = () => {
        this.props.operation('SUM');
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

export default connect(mapStateToProps, { operation })(Sum);

