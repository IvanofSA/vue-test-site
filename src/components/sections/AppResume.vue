<template>
	<section class="resume">
		<div class="resume__inner">
			<sectionTitle>
				<template #title><h2> Resume </h2></template>
				<template #description><h5> 6 Years of Experience </h5></template>
			</sectionTitle>

			<div class="block-wrap">
				<div class="block">
					<blockExperience :data="education"></blockExperience>
				</div>

				<div class="block">
					<blockExperience :data="education"></blockExperience>
				</div>

				<div class="block">
					<blockSkills :skills="skillsDesign"></blockSkills>
					<blockSkills :skills="skillsCode"></blockSkills>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import sectionTitle from '@/components/sectionTitle'
	import blockSkills from '@/components/blockSkills'
	import blockExperience from '@/components/blockExperience'

	export default {
		name: "AppResume",
		data() {
			return {
				education: {
					name: 'Experience',
					list: [
						{
							year: 2010,
							title: 'Specialization Course',
							desc: 'University of Studies',
							text: 'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sedtortor.'
						},
						{
							year: 2012,
							title: 'Specialization Course',
							desc: 'University of Studies',
							text: 'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sedtortor.'
						},
						{
							year: 2019,
							title: 'Specialization Course',
							desc: 'University of Studies',
							text: 'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sedtortor.'
						}
					]
				},
				skillsDesign: {
					name: 'Design Skills',
					list: [
						{
							percentage: 75,
							name: 'Web Design1'
						},
						{
							percentage: 35,
							name: 'Web Design2'
						},
						{
							percentage: 25,
							name: 'Web Design3'
						}
					]
				},
				skillsCode: {
					name: 'Code Skills',
					list: [
						{
							percentage: 85,
							name: 'Html'
						},
						{
							percentage: 95,
							name: 'Css'
						},
						{
							percentage: 45,
							name: 'Java Script'
						},
						{
							percentage: 80,
							name: 'Vue'
						}
					]
				}
			}
		},
		components: {
			sectionTitle,
			blockSkills,
			blockExperience
		}
	}
</script>

<style scoped lang="scss">
	.resume {
		/*animation: moveRight 0.66s ease-in-out forwards;*/
		&__inner {
			position: relative;
			padding: 5px 20px;
			@media (min-width: 1000px) {
				padding: 20px 60px 50px;
			}
		}
	}

	.block-wrap {
		display: flex;
		flex-flow: column wrap;
		align-items: center;

		@media (min-width: 1000px) {
			flex-flow: row wrap;
			align-items: flex-start;
			justify-content: space-between;
		}
	}

	.block {
		width: 100%;
		margin-bottom: 40px;

		@media (min-width: 1000px) {
			width: 33%;
		}
	}

	@keyframes moveRight {
		from {
			visibility: hidden;
			opacity: 0;
			left: -100%;
		}
		to {
			visibility: visible;
			opacity: 1;
			left: 0;
		}
	}
</style>