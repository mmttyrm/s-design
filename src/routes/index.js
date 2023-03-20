import AboutUs from '~/Page/AboutUs';
import Contact from '~/Page/Contact';
import HomePage from '~/Page/Home';
import User from '~/Page/User';

const publicRouters = [
    { path: '/', component: HomePage },
    { path: '/user', component: User },
    { path: '/about', component: AboutUs },
    { path: '/contact', component: Contact },
];

const privateRouters = [];

export { privateRouters, publicRouters };
