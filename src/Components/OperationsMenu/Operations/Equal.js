import React from 'react';
import { connect } from 'react-redux';
import { resetNumberDisplay, resetBlockNumber } from '../../../actions';

class Equal extends React.Component {

    componentDidUpdate(){
        console.log(this.props.state)
    }

    handleClick = () => {
        this.props.resetBlockNumber();
        this.props.resetNumberDisplay();
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

