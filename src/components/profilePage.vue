<template>
	<section class="p">
		<div class="p__inner">
			<div class="p__wrap">
				<div class="p__left"></div>
				<div class="p__right">
					<blockTitle><h3>Тест</h3></blockTitle>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import sectionTitle from '@/components/sectionTitle'
	import blockTitle from '@/components/block/blockTitle'

	export default {
		name: "profilePage",
		components: {
			sectionTitle,
			blockTitle
		},
		data() {
			return {}
		},
	}
</script>

<style scoped lang="scss">
	.p {
		&__inner {
			position: static;
			padding: 5px 20px;
			@media (min-width: 1000px) {
				padding: 20px 60px 50px;
			}
		}
	}
</style>