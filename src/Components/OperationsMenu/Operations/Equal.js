import React from 'react';
import { connect } from 'react-redux';
import { resetBlockNumber } from '../../../actions';

class Equal extends React.Component {

    componentDidUpdate(){
        console.log(this.props.state)
    }

    handleClick = () => {
        this.props.resetBlockNumber();
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

export default connect(mapStateToProps, { resetBlockNumber })(Equal);

