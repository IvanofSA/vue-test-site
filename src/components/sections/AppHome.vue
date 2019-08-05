<template>
		<section class="home">
			<h2 class="home__title"> Sergey Ivanov </h2>
			<ul class="home__desc">
				<li>Frontend-developer</li>
			</ul>
		</section>
</template>

<script>
	export default {
		name: "AppHome"
	}
</script>

<style scoped lang="scss">
	.home {
		width: 100%;
		min-height: 100%;
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: center;
		background: transparent;
		box-shadow: none;

		&::-webkit-scrollbar {
			display: none;
		}
		&:before {
			display: none;
		}
		&__title {
			color: var(--color-accent-contrast-higher);
			font-size: 40px;
			text-align: center;
			/*font-family: 'Oxygen', Helvetica, sans-serif;*/
			font-weight: 700;
			line-height: 1.5em;
		}
		&__desc {
			font-size: 16px;
			color: #222;
			font-weight: 300;
			margin: 0 0 5px;
			text-align: center;
		}
	}
</style>