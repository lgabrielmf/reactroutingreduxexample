import React from 'react';
import {connect} from 'react-redux';

const TesteValue = (state) => (
    <div>
        <p>{state.testeValue}
            </p>
    </div>
);

const mapStateToProps = ({ testeReducer: { testeValue } }) => ({
    testeValue
});

export default connect(mapStateToProps)(TesteValue);
