<template>

	<div class="fun">
		<blockTitle><h3>Fun Facts</h3></blockTitle>
		<ul class="fun__list">
			<li class="fun__item">
				<i class="fun__icon pe-7s-icon pe-7s-smile"></i>
				<h4 class="fun__title"> Happy Clients </h4>
				<span class="fun__value">1,024</span>
			</li>
			<li class="fun__item">
				<i class="fun__icon pe-7s-icon pe-7s-alarm"></i>
				<h4 class="fun__title"> Happy Clients </h4>
				<span class="fun__value">1,024</span>
			</li>
			<li class="fun__item">
				<i class="fun__icon pe-7s-icon pe-7s-medal"></i>
				<h4 class="fun__title"> Happy Clients </h4>
				<span class="fun__value">1,024</span>
			</li>
			<li class="fun__item">
				<i class="fun__icon pe-7s-icon pe-7s-coffee"></i>
				<h4 class="fun__title"> Happy Clients </h4>
				<span class="fun__value">1,024</span>
			</li>
		</ul>
	</div>

</template>

<script>
	import blockTitle from '@/components/blockTitle'

	export default {
		name: "blockFun",
		components: {
			blockTitle
		}
	}
</script>

<style scoped lang="scss">
	.fun {
		margin-bottom: 40px;

		&__list {
			display: flex;
			flex-flow: column wrap;
			align-items: center;
			justify-content: space-between;

			@media (min-width: 1000px) {
				flex-flow: row wrap;
				align-items: flex-start;
			}
		}

		&__title {
			margin-top: 10px;
			color: var(--color-contrast-higher);
			font-weight: 700;
			line-height: 1.5em;
			margin-bottom: 10px;
		}

		&__item {
			display: flex;
			flex-flow: column wrap;
			align-items: center;
			position: relative;
			text-align: center;
			width: 100%;
			margin: 0;
			background: var(--color-bg);
			padding: 20px 10px 15px;
			margin-bottom: 40px;

			@media (min-width: 1000px) {
				width: 25%;
			}

			&:last-of-type {
				margin-bottom: 0;
			}

			&:nth-child(odd) {
				background-color: var(--color-contrast-lower);
			}
		}

		&__value {
			font-size: 24px;
			font-weight: 300;
			display: block;
			margin: 10px 0;
			color: var(--color-accent-contrast-higher);
		}

		&__icon {
			position: relative;
			font-size: 56px;
			color: var(--color-contrast-medium);
		}
	}
</style>