<template>
	<div class="section-title">
		<slot name="title"></slot>
		<slot name="description"></slot>
	</div>
</template>

<script>
	export default {
		name: "AppBlockTitle"
	}
</script>

<style scoped lang="scss">


	.section-title {
		position: relative;
		margin-left: 0;
		margin-right: 0;
		margin-bottom: 30px;
		text-align: center;

		@media (min-width: 1240px) {
			width: 300px;
			margin: 0 auto 30px;
			text-align: right;
		}

		h2 {
			display: inline-block;
			position: relative;
			font-size: 38px;
			/*font-family: 'Oxygen', Helvetica, sans-serif;*/
			font-weight: 700;
			width: 100%;
			margin: 12px 0 0;
			line-height: 1.1em;
			color: #eee;
			z-index: 1;

			@media (min-width: 1000px) {
				font-size: 48px;
			}

			@media (min-width: 1240px) {
				font-size: 60px;
			}
		}

		h5 {
			display: inline-block;
			position: relative;
			margin-top: -10px;
			padding: 0 10px;
			background-color: var(--color-accent-contrast-higher);
			color: #fff;
			font-weight: 200;
			text-align: center;
			z-index: 2;
			font-size: 13px;

			@media (min-width: 1000px) {
				text-align: right;
			}
		}
	}

</style>