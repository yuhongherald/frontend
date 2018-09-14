import Base from './components/Main/Base.jsx';
import Login from './components/Authentication/Login.jsx';
import Signup from './components/Authentication/Signup.jsx';
import Index from './components/Main/Index.jsx';
import CreateEvent from './components/Events/CreateEvent.jsx';
import EventsByPage from "./components/Events/EventsByPage.jsx";
import Event from "./components/Events/Event.jsx";
import MyEvents from "./components/Events/MyEvents.jsx";
import CreatedEvents from "./components/Events/CreateEvent.jsx";
import AttendingEvents from "./components/Events/AttendingEvents.jsx";
import Auth from './modules/Auth';
import Schedule from "./components/Events/Schedule.jsx";

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
            },
            {
                path: '/schedule',
                exactly: true,
                component: Schedule
            },
            {
                path: '/my_events',
                exactly: true,
                component: MyEvents
            },
            {
                path: '/my_created_events',
                exactly: true,
                component: CreatedEvents
            },
            {
                path: '/my_scheduled_events',
                exactly: true,
                component: AttendingEvents
            }
        ]
    }
;

export default routes;