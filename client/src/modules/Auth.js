class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} userData
     */
    static authenticateUser(userData) {
        localStorage.setItem('userData', JSON.stringify(userData));

    }

    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
        return localStorage.getItem('userData') !== null;

    }

    static getUserData() {
        return JSON.parse(localStorage.getItem('userData'));
    }

    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
        localStorage.removeItem('userData');
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */


}

export default Auth;