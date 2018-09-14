class Auth {

    /**
     * Authenticate a user. Save the user data in session Storage
     *
     * @param {string} userData
     */
    static authenticateUser(userData) {
        sessionStorage.setItem('userData', JSON.stringify(userData));

    }

    /**
     * Check if a user is authenticated - check if a token is saved in session Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
        return sessionStorage.getItem('userData') !== null;

    }

    static setID(uuid) {
        sessionStorage.setItem('uid', JSON.stringify(uuid));
    }

    static getID() {
        sessionStorage.getItem('uid');
    }

    static getUserData() {
        return JSON.parse(sessionStorage.getItem('userData'));
    }

    /**
     * Deauthenticate a user. Remove a token from session Storage.
     *
     */
    static deauthenticateUser() {
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('userData');
    }

}

export default Auth;