
export default {
	namespaced: true,
	state: {
		themeColor: 'default',
		accentColor: 'default'
	},
	getters: {
		themeColor: state => state.themeColor,
		accentColor: state => state.accentColor,
	},
	mutations: {
		setThemeColor(state, color) {
			state.themeColor = color;
		},
		setAccentColor(state, color) {
			state.accentColor = color;
		}
	},
	actions: {

	}
}
