// Layouts
import { AuthLayout } from '~/layouts';

// Pages
import config from '~/config';
import Auth from '~/pages/Auth';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.auth, component: Auth, layout: AuthLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
