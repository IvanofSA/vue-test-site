<template>
	<div class="service">
		<blockTitle><h3>Services</h3></blockTitle>
		<ul class="service__list">
			<li class="service__item">
				<i class="service__icon pe-7s-icon pe-7s-browser"></i>
				<h4 class="service__title">Web Design</h4>
				<p class="service__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod
					tempor.</p>
			</li>
			<li class="service__item">
				<i class="service__icon pe-7s-icon pe-7s-pen"></i>
				<h4 class="service__title">Copywriter</h4>
				<p class="service__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod
					tempor.</p>
			</li>
			<li class="service__item">
				<i class="service__icon pe-7s-icon pe-7s-cart"></i>
				<h4 class="service__title">E-Commerce</h4>
				<p class="service__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod
					tempor.</p>
			</li>
			<li class="service__item">
				<i class="service__icon pe-7s-icon pe-7s-graph1"></i>
				<h4 class="service__title">Marketing</h4>
				<p class="service__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod
					tempor.</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import blockTitle from '@/components/blockTitle'

	export default {
		name: "blockServices",
		components: {
			blockTitle
		}
	}
</script>

<style scoped lang="scss">
	.service {
		margin-bottom: 40px;
		@media (min-width: 1000px) {
			margin-bottom: 30px;
		}
		&__list {
			display: flex;
			flex-flow: column wrap;
			align-items: center;
			text-align: center;

			@media (min-width: 1000px) {
				flex-flow: row wrap;
			}

		}

		&__item {
			margin-bottom: 40px;
			@media (min-width: 1000px) {
				width: 25%;
				padding: 0 10px;
			}
		}

		&__icon {
			font-size: 60px;
			color: var(--color-accent-contrast-higher);
			margin: 5px 0 18px;
		}

		&__title {
			color: var(--color-contrast-higher);
			font-weight: 700;
			font-size: 1em;
			line-height: 1.5em;
			margin-top: 0;
			margin-bottom: 10px;
		}

		&__text {
			font-size: 0.875em;
			color: var(--color-contrast-higher);
			margin: 0 0 10px;
			font-weight: 300;
		}
	}

</style>