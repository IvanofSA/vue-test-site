<template>
	<div class="person">
		<div class="person__photo">
			<tilt :max="45" :perspective="1000">
				<img src="../../static/images/main_photo.jpg" alt="photo">
			</tilt>
		</div>
		<div class="person__text-wrap">
			<h3> I am Web Designer @ Company.com </h3>
			<p> Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero,
				facilisis
				et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac,
				faucibus
				tortor. Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.</p>
			<p> Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum justo, quis
				ornare
				augue tortor non est. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
				per
				inceptos himenaeos.</p>
		</div>

		<div class="person__info">
			<infoList :info="info"/>
			<blockShare :shares="shares"/>
		</div>
	</div>
</template>


<script>
	import tilt from '@/components/AppTilt'
	import blockShare from './blockShare'
	import infoList from '@/components/AppInfoList'

	export default {
		name: "blockPerson",
		data() {
			return {
				shares: [
					{
						href: 'twitter.com',
						icon: 'twitter'
					},
					{
						href: 'facebook.com',
						icon: 'facebook'
					},
					{
						href: 'google-plus.com',
						icon: 'google-plus'
					},
					{
						href: 'youtube.com',
						icon: 'youtube'
					},
					{
						href: 'instagram.com',
						icon: 'instagram'
					}
				],
				info: [
					{
						title: 'Age',
						value: '29'
					},
					{
						title: 'Residence',
						value: 'Australia'
					},
					{
						title: 'Address',
						value: '88 Some Street, Some Town'
					},
					{
						title: 'e-mail',
						value: 'email@example.com'
					},
					{
						title: 'Phone',
						value: '+0123 123 456 789'
					},
					{
						title: 'Freelance',
						value: 'Available'
					}
				],
			}
		},
		components: {
			tilt,
			blockShare,
			infoList
		}
	}
</script>

<style scoped lang="scss">
	.person {
		@media (min-width: 1000px) {
			display: flex;
			flex-flow: row wrap;
			align-items: flex-start;
			justify-content: space-between;
		}

		&__photo {
			margin-bottom: 40px;

			@media (min-width: 1000px) {
				width: 50%;
			}

			@media (min-width: 1240px) {
				width: 33%;
			}

			img {
				display: block;
				max-width: 100%;
				margin: 0 auto;
			}
		}

		&__text-wrap {
			margin-bottom: 40px;
			@media (min-width: 1000px) {
				width: 50%;
				min-height: 1px;
				padding-right: 15px;
				padding-left: 15px;
			}

			@media (min-width: 1240px) {
				width: 33%;
			}

			h3 {
				color: var(--color-contrast-higher);
				font-size: 1.17em;
				/*font-family: 'Oxygen', Helvetica, sans-serif;*/
				font-weight: 700;
				line-height: 1.5em;
				margin-top: 0;
				margin-bottom: 10px;
			}

			p {
				font-size: 0.875em;
				margin: 0 0 10px;
				font-weight: 300;
				color: var(--color-contrast-higher);
				&:last-of-type {
					margin-bottom: 0;
				}
			}
		}
	}
</style>