<template>
	<div id="app" class="component" data-theme="default" data-accent="blue">
		<Preloader v-if="isShowPreloader"/>
		<main class="main">
			<Navbar/>
			<div class="wrapper">
				<div class="website">
					<keep-alive>
						<transition name="page" mode="out-in">
							<router-view/>
						</transition>
					</keep-alive>
				</div>
			</div>
		</main>
	</div>
</template>

<script>

	import Navbar from '@/layout/AppNavbar'
	import Preloader from '@/components/AppPreloader'
	import {library} from '@fortawesome/fontawesome-svg-core'
	import {faBars, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
	import {faTwitter, faFacebook, faGooglePlus, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'

	library.add(faBars, faChevronLeft, faChevronRight)
	library.add(faTwitter, faFacebook, faGooglePlus, faYoutube, faInstagram)

	export default {
		name: 'App',
		data() {
			return {
				isShowPreloader: true
			}
		},
		mounted() {
			this.isShowPreloader = false
		},
		methods: {},
		computed: {},
		components: {
			Navbar,
			Preloader
		}
	}
</script>

<style lang="scss">

	@import "assets/scss/config/normalize";
	@import "assets/scss/config/variables";

	body {
		font-family: 'Oxygen', Helvetica, sans-serif;
		color: #555;
		margin: 0;
		height: 100%;
		font-size: 16px;
		line-height: 1.5em;
	}

	.main {
		min-width: 100%;
		height: 100%;

		@media (min-width: 1000px) {
			position: relative;
		}
	}

	.wrapper {
		position: absolute;
		/*overflow: hidden;*/
		top: 50px;
		bottom: 0;
		height: auto;
		left: 0;
		right: 0;
		margin: 0;
		border: 0;
		box-shadow: none;
		background: url(static/images/main_bg_light.jpg) no-repeat center;
		background-size: cover;

		@media (min-width: 1000px) {
			position: static;
			height: 100vh;
			margin-left: 150px;
			padding: 25px 5%;
			top: 0;
		}
	}

	.website {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0;

		@media (min-width: 1000px) {
			position: static;
			width: 100%;
			height: 100%;
			margin: 0 auto;
			max-width: 1240px;
			perspective: 1500px;
			backface-visibility: hidden;
			/*overflow: hidden;*/

		}
	}

	.page-enter-active, .page-leave-active {
		transition: opacity 1s, transform 0.6s;
	}

	.page-enter, .page-leave-to {
		opacity: 0;
		transform: translateX(-30%);
	}

</style>
