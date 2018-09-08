class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(token, userData) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userData', JSON.stringify(userData));

    }

    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
        return sessionStorage.getItem('token') !== null;

    }

    static getUserData() {
        return JSON.parse(sessionStorage.getItem('userData'));
    }

    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userData');
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */

    static getToken() {
        return sessionStorage.getItem('token');
    }


}

export default Auth;