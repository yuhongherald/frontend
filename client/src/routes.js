import Base from './components/Main/Base.jsx';
import Login from './components/Authentication/Login.jsx';
import Index from './components/Main/Index.jsx';
import Auth from './modules/Auth';

const routes = {
        // base component (wrapper for the whole application).
        component: Base,
        childRoutes: [
            {
                path: '/',
                component: Index
            },
            {
                path: '/login',
                exactly: true,
                component: Login
            },
            {
                path: '/logout',
                onEnter: (nextState, replace) => {
                    Auth.deauthenticateUser();

                    // change the current URL to /
                    replace('/');
                }
            }

        ]
    }
;

export default routes;