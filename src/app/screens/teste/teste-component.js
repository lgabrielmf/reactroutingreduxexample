import React, {Component} from 'react';
import {setTeste} from "../../redux/teste/teste.actions";
import {connect} from "react-redux";
import TesteComponentValue from "./teste-component-value";

class TesteComponent extends Component {

    render() {
        return (
            <div onClick={() => {this.props.setTeste('teste123')}}>
                Teste

                <TesteComponentValue />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setTeste: value => dispatch(setTeste(value))
});

export default connect(null, mapDispatchToProps)(TesteComponent);
