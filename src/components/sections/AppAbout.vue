<template>
	<section class="about">
		<div class="about__inner">
			<sectionTitle>
				<template #title><h2> About Me </h2></template>
				<template #description><h5> Artist, Thinker, Creative Doer </h5></template>
			</sectionTitle>
			<blockPerson/>
			<blockServices/>
			<blockClients :clients="clients"/>
			<blockTestimonials/>
			<blockFun/>
		</div>
	</section>
</template>

<script>
	import sectionTitle from '@/components/sectionTitle'
	import blockTitle from '@/components/blockTitle'
	import blockServices from '@/components/blockServices'
	import blockTestimonials from '@/components/blockTestimonials'
	import blockFun from '@/components/blockFun'
	import blockClients from '@/components/blockClients'
	import blockPerson from '@/components/blockPerson'

	export default {
		name: "AppAbout",
		data() {
			return {
				clients: [
					{
						icon: 'client_1.png',
						name: 'client',
						link: '#'
					},
					{
						icon: 'client_1.png',
						name: 'client',
						link: '#'
					},
					{
						icon: 'client_1.png',
						name: 'client',
						link: '#'
					},
					{
						icon: 'client_1.png',
						name: 'client',
						link: '#'
					},
					{
						icon: 'client_1.png',
						name: 'client',
						link: '#'
					},
					{
						icon: 'client_1.png',
						name: 'client2',
						link: '#'
					},
					{
						icon: 'client_1.png',
						name: 'client',
						link: '#'
					},
					{
						icon: 'client_1.png',
						name: 'client3',
						link: '#'
					}
				]
			}
		},
		components: {
			sectionTitle,
			blockClients,
			blockTestimonials,
			blockPerson,
			blockServices,
			blockTitle,
			blockFun,
		}
	}
</script>

<style scoped lang="scss">
	.about {
		/*animation: moveLeft 0.66s ease-in-out forwards;*/
		&__inner {
			position: relative;
			padding: 5px 20px;
			@media (min-width: 1000px) {
				padding: 20px 60px 50px;
			}
		}
	}
</style>