<template>
	<!-- mobile Header-->
	<div class="mobile-header">
		<div class="mobile-header__logo">
			<span class="mobile-header__title">Sergey Ivanov</span>
		</div>

		<a class="mobile-header__menu-toogle" @click="toggleMenu">
				<span class="mobile-header__icon">
					<font-awesome-icon icon="bars"/>
				</span>
		</a>
	</div>
	<!-- /mobile Header-->
</template>

<script>
	export default {
		name: "AppMobMenu",
		methods: {
			toggleMenu() {
				this.$emit('toggle');
			}
		}
	}
</script>

<style scoped lang="scss">

	.mobile-header {
		display: flex;
		position: fixed;
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #eee;
		padding: 0 20px;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		z-index: 1000;
		color: var(--color-contrast-higher);
		background-color: var(--color-bg);

		&__menu-toogle {
			display: block;
			cursor: pointer;
			text-decoration: none;
		}
		&__icon {
			font-size: 1.5em;
			color: var(--color-accent-contrast-higher);
		}
		&__logo {

		}
		&__title {
			display: inline-block;
			font-size: 18px;
			font-weight: 400;
			font-family: 'Oxygen', Helvetica, sans-serif;
			margin: 0;
			line-height: 50px;
		}

		@media (min-width: 1000px) {
			display: none;
		}
	}
</style>