import axios from "axios";
import { loginEndpoint } from "../api/endpoint";

class AuthService {

    login(username, password) {
        return axios.post(loginEndpoint(), {
            'username': username,
            'password': password
        });

    }
}


export default new AuthService();