
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log("register successful");
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user === null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user === null) return '';
        return user;
    }

    logoutCurrentUser() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        console.log('logged out user');
    }
}

export default new AuthenticationService();