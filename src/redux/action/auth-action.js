import AuthService from "../../services/auth-service";

export const authActions = {
    LOGIN: 'LOGIN',
    UPDATE_AUTH_STATUS: 'UPDATE_AUTH_STATUS' 
}

export const authState = {
    username: null
}

export function updateAuthStatus(){
    return async function updateAuthStatusFromLocalStorage(dispatch, getState) {
    
       var token= localStorage.getItem('token');
       var username = localStorage.getItem('username');

       if(username != null && token != null){
        dispatch({
            type: authActions.LOGIN,
            payload: {
                username: username
            }
        })
       }
    }
}

export function logout(){
    return async function clearDataFromLocalStorage(dispatch, getState) {
    
        localStorage.removeItem('token');
        localStorage.removeItem('username');
 
        dispatch({
            type: authActions.LOGIN,
            payload: {
                username: null
            }
        })
       
    }
}

export function login(username, password) {

    return async function validateUserFromServer(dispatch, getState) {
        const responce = await AuthService.login(username, password).catch((error) => {
            console.log(error);
        });
        localStorage.setItem('token', responce.data.request_token);
        localStorage.setItem('username', username);
        dispatch({
            type: authActions.LOGIN,
            payload: {
                username: username
            }
        })
    }
}