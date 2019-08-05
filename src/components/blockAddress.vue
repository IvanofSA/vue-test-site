<template>
	<div class="address">
		<blockTitle><h3> Get in Touch </h3></blockTitle>
		<p class="address__desc">Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras
			pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.</p>


		<ul class="address__list">
			<li class="address__item">
				<div class="address__icon">
					<i class="pe-7s-icon pe-7s-map-marker"></i>
				</div>
				<div class="address__text">
					<h5>Los Angeles, USA</h5>
				</div>
			</li>
			<li class="address__item">
				<div class="address__icon">
					<i class="pe-7s-icon pe-7s-mail"></i>
				</div>
				<div class="address__text">
					<h5>alexsmith@example.com</h5>
				</div>
			</li>
			<li class="address__item">
				<div class="address__icon">
					<i class="pe-7s-icon pe-7s-call"></i>
				</div>
				<div class="address__text">
					<h5>+123 654 78900</h5>
				</div>
			</li>
			<li class="address__item">
				<div class="address__icon">
					<i class="pe-7s-icon pe-7s-check"></i>
				</div>
				<div class="address__text">
					<h5>Freelance Available</h5>
				</div>
			</li>
		</ul>

	</div>

</template>

<script>
	import blockTitle from '@/components/blockTitle'

	export default {
		name: "blockAddress",
		data() {
			return {}
		},
		components: {
			blockTitle
		}
	}
</script>

<style scoped lang="scss">

	.address {
		margin-bottom: 40px;
		width: 100%;
		@media (min-width: 1000px) {
			width: 45%;
		}
		&__desc {
			color: #555;
			font-size: 0.875em;
			margin: 0 0 10px;
			font-weight: 300;

		}

		&__list {
			display: flex;
			flex-flow: column wrap;
			align-items: flex-start;
			justify-content: center;
		}

		&__item {
			position: relative;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: space-between;
			text-align: left;
			width: 100%;
			margin: 0;
			margin-bottom: 10px;
			padding: 10px 10px 10px 0;
		}

		&__text {
			position: relative;
			padding-left: 50px;

			h5 {
				color: #222;
				font-family: 'Oxygen', Helvetica, sans-serif;
				font-weight: 700;
				font-size: 0.8675em;
				line-height: 1.5em;
				margin-top: 0;
			}
		}

		&__icon {
			position: absolute;
			top: 50%;
			color: var(--color-accent-contrast-higher);
			margin-top: -15px;
			font-weight: bold;
			font-size: 30px;
		}
	}

</style>