// Layouts

// Pages
import Home from '~/pages/Home/home';
import Profile from '~/pages/Profile/profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
