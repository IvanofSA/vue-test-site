<template>
	<div class="clients">
		<blockTitle><h3>Clients</h3></blockTitle>
		<ul class="clients__list">
			<li class="clients__item" v-for="(client, i) in clients" :key="i">
				<a :href="client.link" class="clients__link">
					<img class="clients__img" :src="'../../static/images/clients/'+client.icon" :alt="client.name">
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import blockTitle from '@/components/blockTitle'

	export default {
		name: "AppClients",
		props: ["clients"],
		components: {
			blockTitle
		}
	}
</script>

<style scoped lang="scss">
	.clients {
		margin-bottom: 40px;
		&__list {
			display: flex;
			flex-flow: column wrap;
			align-items: center;
			justify-content: space-between;

			@media (min-width: 1000px) {
				flex-flow: row;
			}
		}

		&__item {
			text-align: center;
			margin-bottom: 40px;
			padding: 5px 0;
			opacity: 0.4;
			transition: all 0.2s ease-in-out;

			&:hover {
				opacity: 1;
			}
		}

		&__link {
			color: var(--color-contrast-higher);
			transition: all 0.3s ease-in-out;
			text-decoration: none;
			outline: none;
		}

		&__img {
			max-width: 80px;
			display: block;
			margin: 0 auto;
		}
	}
</style>