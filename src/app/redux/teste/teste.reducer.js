import TesteActionTypes from "./teste.types";

const INITIAL_STATE = {
    testeValue: ''
}

const testeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TesteActionTypes.SET_TESTE:
            return {
                ...state,
                testeValue: action.payload
                // testeValue: action.payload
            }

        default:
            return state;
    }
}

export default testeReducer;
