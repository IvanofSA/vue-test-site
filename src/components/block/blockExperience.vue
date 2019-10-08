<template>
	<div class="experience">
		<blockTitle><h3>{{data.name}}</h3></blockTitle>
		<ul class="list">
			<li class="item" v-for="(el, index) in data.list" :key="index">
				<span class="year">{{el.year}}</span>
				<h3 class="title">{{el.title}}</h3>
				<span class="desc">{{el.desc}}</span>
				<p class="text">{{el.text}}</p>
			</li>
		</ul>
	</div>


</template>

<script>
	import blockTitle from './blockTitle'

	export default {
		name: "blockSkills",
		props: ['data'],
		components: {
			blockTitle
		}
	}
</script>

<style scoped lang="scss">

	.list {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		border-left: 1px solid #f5f5f5;
		padding-bottom: 10px;

		@media (min-width: 1000px) {
			justify-content: center;
			align-items: flex-start;

		}
	}

	.item {
		position: relative;
		padding-left: 20px;
		padding-bottom: 20px;
	}

	.title {
		margin: 10px 0 0;
		color: #222;
		font-family: 'Oxygen', Helvetica, sans-serif;
		color: var(--color-contrast-higher);
		font-weight: 700;
		line-height: 1.5em;
		font-size: 1em;
	}

	.desc {
		color: #a5a5a5;
		margin: 0 0 4px;
		font-size: 12px;
		font-weight: 300;
		line-height: 1.45em;
	}

	.text {

		font-size: 0.875em;
		margin: 0 0 10px;
		color: var(--color-contrast-higher);
		font-weight: 300;
	}

	.year {
		display: inline-block;
		position: relative;
		color: #fff;
		font-weight: 300;
		line-height: 1.1em;
		margin: 0 0 3px;
		background-color: var(--color-accent-contrast-higher);
		padding: 5px 8px 5px 20px;
		margin-left: -20px;
	}

</style>