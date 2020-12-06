// import { SETUSER, LOGOUT } from "../types/AuthTypes";
// import jwt from 'jsonwebtoken';
const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case 'SETUSER':
            return {
                ...state,
                isAuthenticated: true,
                user: "checkuser()",
                action: action.payload
            }
        case 'LOGOUT':
            localStorage.removeItem('jwtToken')
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }
        default:
            return state;
    }
}

export default authReducer;