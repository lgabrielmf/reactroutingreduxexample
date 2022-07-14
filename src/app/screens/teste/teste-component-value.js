import React, { Component } from 'react';

import {connect} from 'react-redux';

class TesteComponentValue extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.testeValue}
            </div>
        )
    }
}

const mapStateToProps = ({ testeReducer: { testeValue } }) => ({
    testeValue
});

export default connect(mapStateToProps)(TesteComponentValue);
