import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from './modules/portfolio';
import switcher from './modules/switcher';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		portfolio,
		switcher
	}
});