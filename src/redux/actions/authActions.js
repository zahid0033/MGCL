import { SETUSER, LOGOUT } from "../type/authTypes";

export const setUsers = () => ({
    type: SETUSER,
    payload: 'I am from auth action'
})

export const logoutuser = () => ({
    type: LOGOUT,
    payload: 'I am from auth logout'
})