
export default {
	namespaced: true,
	state: {
		themeColor: '#FFFFFF',
		accentColor: '#000000'
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
