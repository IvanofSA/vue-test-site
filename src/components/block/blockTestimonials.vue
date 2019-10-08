<template>
	<div class="testimonials">
		<blockTitle><h3>Testimonials</h3></blockTitle>

		<swiper :options="swiperOption" class="testimonials__list">
			<swiper-slide>
				<li class="testimonials__item">
					<div class="testimonials__content">
						<p class="testimonials__text">"Vivamus porta dapibus tristique. Suspendisse et arcu eget
							nisi convallis eleifend nec ac lorem. Vivamus porta dapibus tristique. Suspendisse
							et arcu eget nisi convallis eleifend nec ac lorem. Vivamus porta dapibus tristique.
							Suspendisse et arcu eget nisi convallis eleifend nec ac lorem."</p>
					</div>
					<div class="testimonials__credits">
						<div class="testimonials__img">
							<img src="../../static/images/testimonials/testimonial_photo_2.jpg" alt="photo">
						</div>
						<div class="testimonials__author-info">
							<p class="testimonials__author-info_author">John Doe</p>
							<p class="testimonials__author-info_firm">Apple Inc.</p>
						</div>
					</div>
				</li>
			</swiper-slide>
			<swiper-slide>
				<li class="testimonials__item">
					<div class="testimonials__content">
						<p class="testimonials__text">"Vivamus porta dapibus tristique. Suspendisse et arcu eget
							nisi convallis eleifend nec ac lorem."</p>
					</div>
					<div class="testimonials__credits">
						<div class="testimonials__img">
							<img src="../../static/images/testimonials/testimonial_photo_2.jpg" alt="photo">
						</div>
						<div class="testimonials__author-info">
							<p class="testimonials__author-info_author">John Doe</p>
							<p class="testimonials__author-info_firm">Apple Inc.</p>
						</div>
					</div>
				</li>
			</swiper-slide>
			<swiper-slide>
				<li class="testimonials__item">
					<div class="testimonials__content">
						<p class="testimonials__text">"Vivamus porta dapibus tristique. Suspendisse et arcu eget
							nisi convallis eleifend nec ac lorem."</p>
					</div>
					<div class="testimonials__credits">
						<div class="testimonials__img">
							<img src="../../static/images/testimonials/testimonial_photo_2.jpg" alt="photo">
						</div>
						<div class="testimonials__author-info">
							<p class="testimonials__author-info_author">John Doe</p>
							<p class="testimonials__author-info_firm">Apple Inc.</p>
						</div>
					</div>
				</li>
			</swiper-slide>
			<swiper-slide>
				<li class="testimonials__item">
					<div class="testimonials__content">
						<p class="testimonials__text">"Vivamus porta dapibus tristique. Suspendisse et arcu eget
							nisi convallis eleifend nec ac lorem."</p>
					</div>
					<div class="testimonials__credits">
						<div class="testimonials__img">
							<img src="../../static/images/testimonials/testimonial_photo_2.jpg" alt="photo">
						</div>
						<div class="testimonials__author-info">
							<p class="testimonials__author-info_author">John Doe</p>
							<p class="testimonials__author-info_firm">Apple Inc.</p>
						</div>
					</div>
				</li>
			</swiper-slide>
		</swiper>

		<div class="testimonials__arrow testimonials__arrow_prev"
			 slot="button-prev">
			<font-awesome-icon icon="chevron-left" class="testimonials__icon"/>
		</div>
		<div class="testimonials__arrow testimonials__arrow_next"
			 slot="button-next">
			<font-awesome-icon icon="chevron-right" class="testimonials__icon"/>
		</div>
	</div>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import blockTitle from './blockTitle'
	import 'swiper/dist/css/swiper.css'

	export default {
		name: "blockTestimonials",
		data() {
			return {
				swiperOption: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
					navigation: {
						nextEl: '.testimonials__arrow_next',
						prevEl: '.testimonials__arrow_prev',
						disabledClass: 'disabled'
					},
					breakpoints: {
						1239: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						999: {
							slidesPerView: 1,
							spaceBetween: 10
						},
					}
				}
			}
		},
		components: {
			blockTitle,
			swiper,
			swiperSlide,
		}
	}
</script>

<style scoped lang="scss">
	.testimonials {
		position: relative;
		margin-bottom: 40px;

		@media (min-width: 1000px) {
			/*padding: 0 15px;*/
		}
		&__item {
			/*@media (min-width: 1000px) {*/
			/*width: 50%;*/
			/*}*/
		}

		& .swiper-container {
			overflow: inherit;
			@media (min-width: 1000px) {
				overflow: hidden;
			}
		}
		&__content {
			padding: 1em 1.2em 1.6em;
			font-style: italic;
			background-color: var(--color-contrast-lower);
			border: 1px solid var(--color-contrast-low);
			width: 100%;
			position: relative;
			margin: 0;
			z-index: -1;
		}
		&__text {
			font-size: 0.875em;
			margin: 0 0 10px;
			font-weight: 300;
			color: var(--color-contrast-higher);
		}
		&__credits {
			display: flex;
			flex-flow: row wrap;
			align-items: flex-end;
			justify-content: center;
			position: relative;
			margin: -15px auto 0;
			text-align: center;

		}
		&__img {
			display: block;
			width: 60px;
			height: 60px;
			background-color: var(--color-contrast-higher);
			overflow: hidden;
			margin: 0;
			z-index: 1;

			img {
				display: block;
				width: 100%;
				border: 1px solid var(--color-contrast-low);
			}
		}
		&__author-info {
			position: relative;
			padding-left: 12px;
			vertical-align: bottom;
			text-align: left;

			&_author {
				display: inline-block;
				font-size: 15px;
				color: var(--color-contrast-high);
				margin: 0;
				font-weight: 400;
			}

			&_firm {
				font-size: 10px;
				line-height: 1.5em;
				color: var(--color-contrast-high);
				margin: 0;
				text-transform: uppercase;
				font-style: italic;
				font-weight: lighter;
			}
		}

		&__navs {
			position: absolute;
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: space-between;
			width: 70px;
			/*height: 50px;*/
			text-align: right;
			right: 0;
			top: -48px;
		}

		&__arrow {
			position: absolute;
			left: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			top: -48px;
			margin: 2px;
			width: 22px;
			height: 22px;
			background: #eee;
			transition: all 0.2s ease-in-out;
			&_prev {
				right: 30px;
			}
			&_next {
				right: 0;
			}

			&.disabled {
				background-color: var(--color-accent-contrast-higher);

				& .testimonials__icon {
					color: #fff;
				}
			}
		}

		&__icon {
			font-size: 12px;
			color: #555;
			font-weight: lighter;
		}
	}

</style>