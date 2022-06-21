import AuthService from "../../services/auth-service";

export const authActions = {
    LOGIN: 'LOGIN',
    UPDATE_AUTH_STATUS: 'UPDATE_AUTH_STATUS' 
}

export const authState = {
    username: null,
    currentPath: '/',
    error: null,
}

export function updateAuthStatus(){
    return async function updateAuthStatusFromLocalStorage(dispatch, getState) {
    
    //    var token= localStorage.getItem('token');
       var username = localStorage.getItem('username');

       if(username != null){
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

    const isValidUser =  AuthService.login(username, password);
      
    if (isValidUser) {
        return {
            username: username,
            error: null
        }
    } else {
        return {
            username: null,
            error: 'Please check username and password'
        }
    }
}