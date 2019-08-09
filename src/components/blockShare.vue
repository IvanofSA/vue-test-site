<template>
	<ul class="social">
		<li class="social__item" v-for="(el, index) in shares" :key="index">
			<a class="social__link" :href="el.href">
				<font-awesome-icon :icon="{ prefix: 'fab', iconName: el.icon }"/>
			</a>
		</li>
	</ul>

</template>

<script>
	export default {
		name: "AppBlockShare",
		props: ['shares']
	}
</script>

<style scoped lang="scss">
	.social {
		display: block;
		list-style: none;
		margin: 25px 0;
		padding: 0;
		text-align: left;

		@media (min-width: 1000px) {
			/*width: 50%;*/
		}


		&__item {
			display: inline-block;
			margin: 0;
			padding: 0;

			&:first-of-type {
				& .social__link {
					margin-left: 0;
				}
			}
		}

		&__link {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 2px;
			width: 34px;
			height: 34px;
			color: var(--color-contrast-high);
			background-color: transparent;
			transition: all 0.3s ease-in-out;
			border: 1px solid #e5e5e5;
			text-align: center;

			&:hover, &:focus {
				color: var(--color-contrast-higher);
				background-color: var(--color-accent-contrast-higher);
				border-color: transparent;
			}
		}
	}
</style>