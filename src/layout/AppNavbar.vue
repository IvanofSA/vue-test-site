<template>
	<div>
		<!--mob menu-->
		<MobMenu @toggle="onToggleClass()"/>
		<!--mob menu /-->

		<header class="header" :class="toggleClass">
			<!--avatar-->
			<div class="header__photo">
				<img src="../static/images/main_photo.jpg" alt="image" class="">
			</div>
			<!--avatar/-->

			<!--avatar title-->
			<div class="header__title-block">
				<h1 class="header__title"> Sergey Ivanov </h1>
			</div>
			<!--avatar title/-->

			<!-- Navigation -->
			<div class="header__nav">

				<!-- Main menu -->
				<nav class="menu">
					<li class="menu__item">
						<router-link class="menu__link" exact-active-class="active" tag="a" :to="{ name: 'Home'}">
							<i class="menu__icon pe-7s-icon pe-7s-home"> </i> Home
						</router-link>
					</li>

					<li class="menu__item ">
						<router-link class="menu__link" exact-active-class="active" tag="a" :to="{ name: 'About'}"><i
								class="menu__icon pe-7s-icon pe-7s-user"></i> About me
						</router-link>
					</li>

					<li class="menu__item ">
						<router-link class="menu__link" exact-active-class="active" tag="a" :to="{ name: 'Resume'}"><i
								class="menu__icon pe-7s-icon pe-7s-id"></i> Resume
						</router-link>
					</li>

					<li class="menu__item">
						<router-link class="menu__link" exact-active-class="active" tag="a" :to="{ name: 'Portfolio'}">
							<i
									class="menu__icon pe-7s-icon pe-7s-portfolio"></i> Portfolio
						</router-link>
					</li>

					<li class="menu__item">
						<router-link class="menu__link" exact-active-class="active" tag="a" :to="{ name: 'Contact'}"><i
								class="menu__icon pe-7s-icon pe-7s-mail"></i> Contact
						</router-link>
					</li>
				</nav>
				<!-- /Main menu -->
			</div>
			<!-- /Navigation -->
		</header>
	</div>


</template>

<script>
	import MobMenu from '@/layout/AppMobMenu'

	export default {
		name: "AppNavBar",
		data() {
			return {
				mobileMenu: false
			}
		},
		components: {
			MobMenu
		},
		computed: {
			toggleClass() {
				return this.mobileMenu ? 'header-show' : 'header-hide'
			}
		},
		methods: {
			onToggleClass() {
				this.mobileMenu = !this.mobileMenu
			}
		},
		watch: {
			'$route'(to, from) {
				this.mobileMenu = !this.mobileMenu
			}
		}
	}
</script>

<style scoped lang="scss">

	.header {
		position: fixed;
		width: 100%;
		max-width: 320px;
		height: calc(100% - 50px);
		top: 50px;
		z-index: 999;
		box-shadow: 5px 0px 20px 0px rgba(0, 0, 0, 0.1);
		transition: all 0.66s ease-in-out;
		background-color: var(--color-bg);

		@media (min-width: 1000px) {
			position: fixed;
			width: 150px;
			height: 100%;
			box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
			z-index: 10;
			top: 0;
		}

		&-hide {
			margin-left: -100%;
			box-shadow: none;

			@media (min-width: 1000px) {
				margin-left: 0;
				position: fixed;
				width: 150px;
				height: 100%;
				box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
				z-index: 10;
				top: 0;
			}
		}

		&__title-block {
			position: relative;
			z-index: 1;
			margin: 15px 20px 5px;
			text-align: center;
		}

		&__title {
			color: var(--color-contrast-higher);
			font-size: 27px;
			font-weight: 400;
			line-height: 1.2em;
			margin: 0;

			@media (min-width: 1000px) {
				color: var(--color-accent-contrast-higher);
			}
		}

		&__photo {
			position: relative;
			margin: 25px auto 10px;
			max-width: 80px;
			text-align: center;
			z-index: 0;

			img {
				display: block;
				margin: 0 auto;
				max-width: 100%;
			}
		}
	}

	.menu {
		display: block;
		padding: 25px 0 30px;

		&__item {
			display: block;
			position: relative;
			padding: 0;
			text-align: center;

			&:first-child {
				& .menu__link {
					border-top: 1px solid rgba(255, 255, 255, 0.12);
					border-color: var(--color-contrast-low);
				}
			}
		}

		&__link {
			display: block;
			position: relative;
			padding: 10px 20px;
			text-align: center;
			font-size: 15px;
			font-weight: 400;
			text-decoration: none;
			outline: none;
			opacity: 0.6;
			color: var(--color-contrast-higher);
			border-bottom: 1px solid rgba(255, 255, 255, 0.12);
			border-color: var(--color-contrast-low);
			transition: all 0.3s ease-in-out;

			&:hover, &:focus {
				background-color: transparent;
				opacity: 1;

				&:after {
					width: 3px;
				}
			}

			&.active {

				background-color: transparent;
				opacity: 1;

				&:after {
					width: 3px;
				}

			}

			&:after {
				display: block;
				position: absolute;
				right: 0;
				bottom: 0;
				content: '';
				width: 0;
				height: 100%;
				margin: 0 auto;
				background-color: var(--color-accent-contrast-higher);
				transition: all 0.2s ease-in-out;
			}
		}

		&__icon {
			display: block;
			font-size: 21px;
			margin-bottom: 3px;
			text-align: center
		}
	}


</style>