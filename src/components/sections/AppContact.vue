<template>

	<section class="contact">
		<div class="contact__inner">
			<sectionTitle>
				<template #title><h2> Contact </h2></template>
				<template #description><h5> Get in Touch </h5></template>
			</sectionTitle>

			<div class="contact__wrap">
				<blockAddress />
				<blockForm />
			</div>

		</div>
	</section>
</template>

<script>
	import sectionTitle from '@/components/sectionTitle'
	import blockAddress from '@/components/blockAddress'
	import blockForm from '@/components/blockForm'

	export default {
		name: "AppContact",
		components: {
			sectionTitle,
			blockAddress,
			blockForm
		}
	}
</script>

<style scoped lang="scss">
	.contact {
		/*animation: moveDown 0.66s ease-in-out forwards;*/
		&__inner {
			position: relative;
			padding: 5px 20px;
			@media (min-width: 1000px) {
				padding: 20px 60px 50px;
			}
		}

		&__wrap {
			display: flex;
			flex-flow: column wrap;
			align-items: flex-start;
			justify-content: center;

			@media (min-width: 1000px) {
				flex-flow: row wrap;
				justify-content: space-between;
			}
		}
	}
</style>