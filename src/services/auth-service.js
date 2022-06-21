class AuthService {

    login(username, password) {
        var users = JSON.parse(localStorage.getItem('users')) ?? [];
        var hasMatch = false;
        for (var index = 0; index < users.length; index++) {
            var user = users[index];
            if (user.username === username && user.password === password) {
                hasMatch = true;
                localStorage.setItem('username', username)
                break;
            }
        }
        return hasMatch;
    }
}

export default new AuthService();