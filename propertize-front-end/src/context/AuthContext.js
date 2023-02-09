import { createContext } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
}
export const AuthContext = createContext(INITIAL_STATE);
const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
        return {
            user: null,
            error: null,
            loading: false,
        };
    case 'LOGIN_SUCCESS':
        return {
            user: action.payload,
            loading: false,
            error: null,
        };
    case 'LOGIN_FAIL':
        return {
            user: null,
            loading: false,
            error: action.payload,
        };
    case 'LOGOUT':
        return {
            user: null,
            loading: false,
            error: null,
        };
    default:
        return state;
    }
}