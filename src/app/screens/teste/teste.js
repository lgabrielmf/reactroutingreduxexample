import React from 'react';
import {connect} from 'react-redux';

import {setTeste} from '../../redux/teste/teste.actions';

import TesteValue from "./teste-value";

const Teste = ({setTeste}) => (
    <div onClick={() => {setTeste('teste123')}}>
        Teste

        <TesteValue />
    </div>
);

const mapDispatchToProps = dispatch => ({
    setTeste: value => dispatch(setTeste(value))
});

export default connect(null, mapDispatchToProps)(Teste);
