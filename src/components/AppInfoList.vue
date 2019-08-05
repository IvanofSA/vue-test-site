<template>
	<ul class="info">
		<li class="info__item" v-for="(el, index) in info" :key="index">
			<span class="info__title">{{ el.title }}</span>
			<span class="info__value" v-if="el.title !== 'e-mail'">{{ el.value }}</span>

			<!-- link -->
			<a :href="'mailto:'+ el.value" class="info__link" v-else>{{ el.value }}</a>
			<!--link /-->
		</li>
	</ul>
</template>

<script>
	export default {
		name: "AppInfoList",
		props: ['info']
	}
</script>

<style scoped lang="scss">
	.info {
		margin-bottom: 20px;
		padding: 0;
		list-style: none;

		@media (min-width: 1000px) {
			/*width: 50%;*/
		}

		&__item {
			padding: 5px 0;
			font-size: 14px;

			&:first-of-type {
				padding-top: 0;
			}
			&:last-of-type {
				padding-bottom: 0;
			}
		}

		&__title {
			display: inline-block;
			font-weight: 700;
			margin-right: 12px;
			color: var(--color-contrast-higher);

			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 2px;
				margin-top: -3px;
				background-color: var(--color-accent-contrast-higher);
			}
		}

		&__value {
			color: var(--color-contrast-higher);
			min-width: 250px;
		}

		&__link {
			color: var(--color-accent-contrast-higher);
			text-decoration: none;
			outline: none;
			transition: all 0.3s ease-in-out;
		}
	}
</style>