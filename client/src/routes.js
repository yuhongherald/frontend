import Base from './components/Main/Base.jsx';
import Login from './components/Authentication/Login.jsx';
import Index from './components/Main/Index.jsx';
import CreateEvent from './components/Events/CreateEvent.jsx';
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
                    replace('/login');
                }
            },
            {
                path: '/events/new',
                exactly: true,
                component: CreateEvent
            },
            {
                path: '/events/:eventID',
                exactly: true,
                component: Event
            }

        ]
    }
;

export default routes;