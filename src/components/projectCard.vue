<template>
	<li class="list-complete-item" @mouseenter="enter" @mouseleave="leave" @click="showModal">
		<a href="#" class="list-complete-link">
			<img :src="img" alt="" class="list-complete-img">
			<div class="list-complete-overlay" :class="classOverlay">
				<h5>{{name}}</h5>
				<small>{{type}}</small>
				<i class="pe-7s-icon" :class="icon"></i>
			</div>
		</a>
	</li>
</template>

<script>

	export default {
		name: "projectCard",
		props: {
			id: {
				type: Number,
			},
			name: {
				type: String,
				default: 'Project Name'
			},
			type: {
				type: String,
				default: 'Type'
			},
			img: {
				type: String,
				default: '../../static/images/portfolio/1.jpg'
			},
			icon: {
				type: String,
				default: 'pe-7s-display2'
			},
			delay: 300
		},
		data() {
			return {
				classOverlay: null,
				defaults: {
					fromPrefix: 'out-',
					toPrefix: 'in-'
				},
			}
		},
		methods: {
			showModal() {
				this.$emit('modal', {
					id: this.id
				})
			},
			enter(e) {
				let direction = this.getDir(e, e.target),
					CSSclass = this.getClass(direction, 'in-');

				this.classOverlay = this.getClass(direction, 'out-');
				clearTimeout(timer);
				let timer = setTimeout(() => {
					this.classOverlay = CSSclass;

				}, 200)
			},
			leave(e) {
				let direction = this.getDir(e, e.target),
					CSSclass = this.getClass(direction, 'out-');

				clearTimeout(timer);
				let timer = setTimeout(() => {
					this.classOverlay = CSSclass;
				}, 200)
			},
			getDir(coordinates, element) {
				let w = element.offsetWidth,
					h = element.offsetHeight,
					x = (coordinates.x - element.getBoundingClientRect().left - (w / 2)) * (w > h ? (h / w) : 1),
					y = (coordinates.y - element.getBoundingClientRect().top - (h / 2)) * (h > w ? (w / h) : 1),
					direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

				return direction;
			},
			getClass: function (direction, prefix) {
				let CSSclass;

				switch (direction) {
					case 0:
						CSSclass = 'top';
						break;
					case 1:
						CSSclass = 'right';
						break;
					case 2:
						CSSclass = 'bottom';
						break;
					case 3:
						CSSclass = 'left';
						break;
				}
				return prefix + CSSclass;
			}
		}
	}
</script>

<style scope lang="scss">

	.list-complete-item {
		display: block;
		position: relative;
		transition: transform 1s;

		width: 310px;
		height: 250px;
		padding: 5px;

		@media (min-width: 1000px) {
			flex: 33.3333333%;
		}
	}

	.list-complete-link {
		position: relative;
		display: block;
		overflow: hidden;
		height: 100%;

		background-image: linear-gradient(-45deg, transparent 50%, var(--color-contrast-lower) 50%, var(--color-contrast-lower) 60%, transparent 60%),
		linear-gradient(-45deg, var(--color-contrast-lower) 10%, transparent 10%);
		background-color: var(--color-contrast-low);
		background-size: 1em 1em;
	}

	.list-complete-img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.list-complete-overlay {
		position: absolute;
		cursor: pointer;
		background: var(--color-contrast-lower);
		width: 100%;
		height: 100%;
		color: #888;
		top: 0;
		left: -100%;
		z-index: 10;
		transition: top 300ms ease 0s, left 300ms ease 0s, opacity 200ms linear 0s;
		opacity: 0;

		&.in-top {
			top: 0;
			left: 0;
			opacity: 1;
		}

		&.in-bottom {
			bottom: 0;
			left: 0;
			opacity: 1;
		}

		&.in-left {
			left: 0;
			top: 0;
			opacity: 1;
		}

		&.in-right {
			left: 0;
			top: 0;
			opacity: 1;
		}

		&.out-top {
			top: -100%;
			left: 0;
			opacity: 0;

		}

		&.out-bottom {
			top: 100%;
			left: 0;
			opacity: 0;

		}

		&.out-left {
			left: -100%;
			top: 0;
			opacity: 0;

		}

		&.out-right {
			left: 100%;
			top: 0;
			opacity: 0;
		}

		h5 {
			display: inline-block;
			color: var(--color-contrast-higher);
			font-size: 1rem;
			margin: 10px 0;
		}

		small {
			color: var(--color-contrast-medium);
			position: absolute;
			bottom: 10px;
			left: 20px;
		}

		i {
			color: #4d91de;
			position: absolute;
			font-size: 24px;
			bottom: 14px;
			right: 20px;
			margin: 0;
		}
	}

</style>