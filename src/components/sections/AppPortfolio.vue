<template>
	<section class="portfolio">
		<div class="portfolio__inner">
			<sectionTitle>
				<template #title><h2> Portfolio </h2></template>
				<template #description><h5> My Best Works </h5></template>
			</sectionTitle>
			<ul id="portfolio_filters" class="portfolio-filters">
				<li class="" :class="{active:'all' == selected}" @click="filter('all')">
					<a class="filter btn btn-sm btn-link active" data-group="all">All</a>
				</li>
				<li class="" :class="{active:'media' == selected}" @click="filter('media')">
					<a class="filter btn btn-sm btn-link" data-group="media">Media</a>
				</li>
				<li class="" :class="{active:'illustration' == selected}" @click="filter('illustration')">
					<a class="filter btn btn-sm btn-link" data-group="illustration">Illustration</a>
				</li>
				<li class="" :class="{active:'video' == selected}" @click="filter('video')">
					<a class="filter btn btn-sm btn-link" data-group="video">Video</a>
				</li>
			</ul>
			<transition-group name="list-complete" class="list-complete" tag="ul">
				<projectCard tag="li"
							 v-for="item in filterWorks(currentTag)"
							 @modal="onShow($event)"
							 :key="item.id"
							 :id="item.id"
							 :name="item.props.name"
							 :icon="item.props.iconClass"
							 :type="item.props.type"
							 :img="item.props.img"/>
			</transition-group>


			<modal v-if="showModal"
				   @close="showModal = false"
				   v-for="item in filterModals(currentId)"
				   :key="item.id"
				   :id="item.id"
				   :name="item.props.name"
				   :icon="item.props.iconClass"
				   :type="item.props.type"
				   :img="item.props.img">
			</modal>
		</div>
	</section>
</template>

<script>
	import sectionTitle from '@/components/sectionTitle'
	import projectCard from '@/components/projectCard'
	import modal from '@/components/projectModal'
	import {mapGetters} from 'vuex'

	export default {
		name: "AppPortfolio",
		components: {
			sectionTitle,
			projectCard,
			modal
		},
		data() {
			return {
				showModal: false,
				currentId: null,
				currentTag: 'all',
				selected: 'all',
			}
		},
		computed: {
			...mapGetters({
				filterWorks: 'portfolio/filterWorks',
				filterModals: 'portfolio/filterModals'
			}),
		},
		methods: {
			onShow(item) {
				this.currentId = item.id;
				this.showModal = !this.showModal;
			},
			filter(tag) {
				this.currentTag = tag;
				this.selected = tag;
			}
		}
	}
</script>

<style scoped lang="scss">
	.portfolio {
		&__inner {
			position: static;
			padding: 5px 20px;
			@media (min-width: 1000px) {
				padding: 20px 60px 50px;
			}
		}
	}

	.portfolio-filters {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		list-style: none;
		padding: 0;
		margin: 0 0 2em;
		text-align: center;

		li {
			cursor: pointer;
			margin-left: 5px;
			&:first-of-type {
				margin-left: 0;
			}
		}

		a {
			text-decoration: none;
			padding: 5px 10px;
			font-size: 12px;
			line-height: 1.5;
			transition: all 0.5s linear;

			&:hover {
				background-color: #eee;
				color: #888;
			}
		}

		li.active a {
			background-color: var(--color-accent-contrast-higher);
			color: #fff;
		}
	}

	.list-complete {
		position: relative;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		width: 100%;

		@media (min-width: 1000px) {
			justify-content: space-between;
		}
	}

	.list-complete-enter, .list-complete-leave-to
		/* .list-complete-leave-active for <2.1.8 */
	{
		opacity: 0;
		transform: translateY(30px);
	}

	.list-complete-leave-active {
		position: absolute;
	}

</style>
