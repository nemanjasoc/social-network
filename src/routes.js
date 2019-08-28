import Login from './components/Login.vue';
import Profile from './components/Profile.vue';

export const routes = [
	{
		path: '/login',
		component: Login
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '*',
		redirect: '/login'
	}
];
