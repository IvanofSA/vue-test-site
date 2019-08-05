<template>
	<div class="block-title">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "blockTitle"
	}
</script>

<style scoped lang="scss">

	.block-title {
		display: inline-block;
		position: relative;
		margin: 0 0 20px;
		padding: 0;

		h3 {
			color: #222;
			font-family: 'Oxygen', Helvetica, sans-serif;
			font-weight: 700;
			line-height: 1.5em;
			font-size: 1.17em;

			&:after {
				content: '';
				display: block;
				position: absolute;
				width: 2px;
				height: 100%;
				left: -10px;
				bottom: 0;
				background-color: var(--color-accent-contrast-higher);
			}
		}
	}

</style>