import qs from "querystring";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import setCurrentUser from "./setCurrentUser";

// Register User
export const registerUser = (userData, history) => dispatch => {
    console.log(userData)
    axios
        .post("/api/register", qs.stringify(userData))
        .then(res => {
            console.log(res.data)
            history.push("/verifyemail", userData)
        }) // re-direct to email verification on successful register
        .catch(err => {
            console.log(err)
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
            })
        });
};


// Login - get user token
export const loginAdmin = (userData, history) => dispatch => {
    axios.post("/adminAuth/signin", userData)
        .then(res => {
            if(res.data.success){
                // Save to localStorage// Set token to localStorage
                const { token } = res.data;
                // Decode token to get user data
                const decoded = jwt_decode(token);
                localStorage.setItem("jwtToken", token);
                // Set token to Auth header
                setAuthToken(token);
                // Set current user
                history.push('/')
                dispatch(setCurrentUser(decoded));
            }else{
                dispatch({
                    type: 'GET_ERRORS',
                    payload: res.data.message
                })
            }
        })
        .catch(err => {
                console.log(err)
            }
        );
};