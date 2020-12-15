import { SETUSER, LOGOUT } from "../type/authTypes";

export const setUsers = () => ({
    type: SETUSER,
    payload: 'I am from auth action'
})
const logoutUser = () => ({
    type: LOGOUT,
    payload: 'I am from auth logout'
})

export default logoutUser