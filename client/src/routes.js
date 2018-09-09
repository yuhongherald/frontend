import Base from './components/Main/Base.jsx';
import Login from './components/Authentication/Login.jsx';
import Signup from './components/Authentication/Signup.jsx';
import Index from './components/Main/Index.jsx';
import CreateEvent from './components/Events/CreateEvent.jsx';
import EventsByPage from "./components/Events/EventsByPage.jsx";
import Event from "./components/Events/Event.jsx";
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
                path: '/events',
                component: Index
            },
            {
                path: '/signup',
                exactly: true,
                component: Signup
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
            },
            {
                path: '/events/page/1',
                exactly: true,
                component: EventsByPage
            }
        ]
    }
;

export default routes;