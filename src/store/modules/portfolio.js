export default {
	namespaced: true,
	state: {
		works: [
			{
				id: 1,
				props: {
					img: '5.jpg',
					name: 'Project Name1',
					type: 'media',
					iconClass: 'pe-7s-display2'
				},
				tags: ['all', 'media']
			},
			{
				id: 2,
				props: {
					img: '6.jpg',
					name: 'Project Name2',
					type: 'illustration',
					iconClass: 'pe-7s-display2'
				},
				tags: ['all', 'illustration']
			},
			{
				id: 3,
				props: {
					img: '7.jpg',
					name: 'Project Name3',
					type: 'illustration',
					iconClass: 'pe-7s-display2'
				},
				tags: ['all', 'illustration']
			},
			{
				id: 4,
				props: {
					img: '8.jpg',
					name: 'Project Name4',
					type: 'video',
					iconClass: 'pe-7s-display2'
				},
				tags: ['all', 'video']
			},
			{
				id: 5,
				props: {
					img: '9.jpg',
					name: 'Project Name5',
					type: 'video',
					iconClass: 'pe-7s-display2'
				},
				tags: ['all', 'video']
			},
			{
				id: 6,
				props: {
					img: '10.jpg',
					name: 'Project Name6',
					type: 'video',
					iconClass: 'pe-7s-display2'
				},
				tags: ['all', 'video']
			},
			{
				id: 7,
				props: {
					img: '11.jpg',
					name: 'Project Name7',
					type: 'video',
					iconClass: 'pe-7s-display2'
				},
				tags: ['all', 'video']
			}
		]
	},
	getters: {
		getWorks: state => state.works,
		filterWorks: (state) => (tags) => {
			return state.works.filter((item) => {
				return item.tags.indexOf(tags) !== -1;
			});
		},
		filterModals: (state) => (id) => {
			return state.works.filter((item) => {
				console.log(item.id);
				return item.id === id;
			});
		},
	},
	mutations: {},
	actions: {}
}
