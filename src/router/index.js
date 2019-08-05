import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/sections/AppHome'
import About from '@/components/sections/AppAbout'
import Contact from '@/components/sections/AppContact'
import Portfolio from '@/components/sections/AppPortfolio'
import Resume from '@/components/sections/AppResume'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		},
		{
			path: '/portfolio',
			name: 'Portfolio',
			component: Portfolio
		},
		{
			path: '/resume',
			name: 'Resume',
			component: Resume
		}
	]
})


export default router