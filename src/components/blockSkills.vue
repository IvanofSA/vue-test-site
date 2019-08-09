<template>
	<div class="skill">
		<blockTitle><h3>{{skills.name}}</h3></blockTitle>
		<ul class="skill__list">
			<li class="skill__item" v-for="(skill, index) in skills.list" :key="index">
				<h4 class="skill__info">{{skill.name}}</h4>
				<div class="skill__container">
					<div class="skill__percentage" :style="`width:${skill.percentage}%`"></div>
				</div>
			</li>
		</ul>
	</div>

</template>

<script>
	import blockTitle from '@/components/blockTitle'

	export default {
		name: "blockSkills",
		props: ['skills'],
		components: {
			blockTitle
		}
	}
</script>

<style scoped lang="scss">

	.skill {
		width: 100%;
		padding: 0 20px;
		margin-bottom: 30px;

		&__info {
			color: var(--color-contrast-higher);
			font-size: 0.8em;
			line-height: 1.1em;
			position: relative;
			margin: 0 0 5px;
		}
		&__container {
			background-color: transparent;
			border: 1px solid var(--color-contrast-low);
			box-sizing: border-box;
			height: 12px;
			margin-bottom: 12px;
			width: 100%;
		}

		&__percentage {
			background-color: var(--color-accent-contrast-higher);
			color: var(--color-contrast-higher);
			border: 1px solid #fff;
			height: 10px;
			padding: 0;
			transition: all 2s ease-in-out;
		}
	}

</style>