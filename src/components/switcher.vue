<template>
	<div class="switcher">
		<a class="switcher__toogle" @click="activeClass = !activeClass">
			<font-awesome-icon icon="cog" class="switcher__icon"/>
		</a>

		<div class="switcher__options switcher__options_right options" :class="{'active': activeClass}">
			<!--<div class="options__title">Template Style</div>-->
			<!--<div class="options__style style">-->
				<!--<a class="style__switcher style__switcher_dark" @click="setThemeColor('dark')">-->
					<!--<span class="style__preview style__preview_dark">Dark</span>-->
				<!--</a>-->
				<!--<a class="style__switcher style__switcher_light" @click="setThemeColor('light')">-->
					<!--<span class="style__preview style__preview_light">Light</span>-->
				<!--</a>-->
			<!--</div>-->
			<div class="options__title">Main color</div>
			<div class="options__color color">
				<ul class="color__list">
					<li data-color="red" class="color__item color__item_red" @click="setAccentColor('red')"></li>
					<li data-color="blue" class="color__item color__item_blue" @click="setAccentColor('blue')"></li>
					<li data-color="green" class="color__item color__item_green" @click="setAccentColor('green')"></li>
					<li data-color="orange" class="color__item color__item_orange" @click="setAccentColor('orange')"></li>
					<li data-color="yellow" class="color__item color__item_yellow" @click="setAccentColor('yellow')"></li>
					<li data-color="violet" class="color__item color__item_violet" @click="setAccentColor('violet')"></li>
					<li data-color="default" class="color__item color__item_default" @click="setAccentColor('default')"></li>
				</ul>
			</div>

			<!--<div class="options__title">Nav Position</div>-->
			<!--<div class="options__layout layout">-->
			<!--<a href="" class="layout__item">-->
			<!--<span class="layout__preview layout__preview_left">Left</span>-->
			<!--</a>-->
			<!--<a href="" class="layout__item">-->
			<!--<span class="layout__preview layout__preview_top">Top</span>-->
			<!--</a>-->
			<!--<a href="" class="layout__item">-->
			<!--<span class="layout__preview layout__preview_bottom">Bottom</span>-->
			<!--</a>-->
			<!--</div>-->
		</div>
	</div>


</template>

<script>
	import {mapGetters, mapMutations} from 'vuex';

	export default {
		name: "switcher",
		data() {
			return {
				activeClass: true
			}
		},
		computed: {
			...mapGetters({
				themeColor: 'switcher/themeColor',
				accentColor: 'switcher/accentColor',
			})
		},
		methods: {
			...mapMutations({
				setThemeColor: 'switcher/setThemeColor',
				setAccentColor: 'switcher/setAccentColor',
			})
		}
	}
</script>

<style scoped lang="scss">
	.switcher {
		&__toogle {
			position: fixed;
			background-color: #fff;
			font-size: 18px;
			line-height: 1em;
			text-decoration: none;
			color: #fff;
			padding: 8px 10px;
			top: 120px;
			right: 0;
			border: 1px solid #d5d5d5;
			z-index: 100;
			outline: 0;
			cursor: pointer;
			transition: all 0.2s linear;
			transform: translateZ(0);

			&:hover {
				.switcher__icon {
					transform: rotate(360deg);
				}
			}
		}
		&__icon {
			color: #212121;
			font-size: 20px;
			transition: all 0.3s ease-in-out;
		}
		&__options {
			display: block;
			position: fixed;
			top: 168px;
			max-height: calc(100% - 168px);
			overflow: auto;
			opacity: 0;
			visibility: hidden;
			background: #fff;
			width: 160px;
			height: auto;
			z-index: 1999;
			padding: 15px 15px 20px;
			border: 1px solid #d5d5d5;
			box-shadow: 0 1px 12px rgba(0, 0, 0, 0.1);
			transition: all 0.3s ease-in-out;

			&_right {
				right: 0;
				margin-right: -160px;
				border-right: 0;
			}
			&.active {
				margin-left: 0;
				margin-right: 0;
				opacity: 1;
				visibility: visible;
				transition: all 0.3s ease-in-out;
			}
		}
	}

	.options {
		&__title {
			display: block;
			color: #212121;
			font-size: 16px;
			text-align: center;
			margin-bottom: 10px;
		}
	}

	.style {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;

		&__switcher {
			cursor: pointer;
			width: 46%;
			height: 34px;
			text-align: center;

			&:hover {
				box-shadow: 0 1px 7px rgba(0, 0, 0, 0.15);
			}
			&.active {
				box-shadow: 0 1px 7px rgba(0, 0, 0, 0.15);
			}
		}

		&__preview {
			display: block;
			height: 100%;
			line-height: 34px;
			font-size: 13px;
			color: #666;

			&_light {
				background-color: #fff;
				outline: 1px solid #e5e5e5;
				outline-offset: -1px;
			}

			&_dark {
				background-color: #222;
				color: #fff;
			}
		}
	}

	.color {
		margin-bottom: 20px;

		&__list {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: space-between;
		}

		&__item {
			position: relative;
			cursor: pointer;
			width: 37px;
			height: 26px;
			margin: 2%;
			padding: 1px;
			background: #ff724c;

			&_red {
				background: #ff724c;
			}
			&_blue {
				background: #4d91de;
			}
			&_green {
				background: #8bcf00;
			}
			&_orange {
				background: #fd9129;
			}
			&_yellow {
				background: #e5be24;
			}
			&_violet {
				background: #9161e0;
			}
			&_default {
				background: #000000;
			}

			&:hover {
				&:before {
					position: absolute;
					left: 0;
					right: 0;
					top: -2px;
					bottom: 0;
					margin: auto;
					content: '';
					display: block;
					width: 5px;
					height: 8px;
					border: solid #fff;
					border-width: 0 2px 2px 0;
					transform: rotate(45deg);
				}
			}
			&.active {
				&:before {
					position: absolute;
					left: 0;
					right: 0;
					top: -2px;
					bottom: 0;
					margin: auto;
					content: '';
					display: block;
					width: 5px;
					height: 8px;
					border: solid #fff;
					border-width: 0 2px 2px 0;
					transform: rotate(45deg);
				}
			}
		}
	}

	.layout {
		&__item {
			display: block;
			cursor: pointer;
			color: #ff724c;
			text-decoration: none;
			outline: none;
			transition: all 0.3s ease-in-out;
		}

		&__preview {
			display: block;
			float: none;
			width: 100%;
			height: 34px;
			line-height: 34px;
			font-size: 13px;
			color: #666;
			background-color: #f8f8f8;
			margin: 0 0 10px;
			text-align: center;
			&_left {
				border-left: 3px solid #333;
			}
			&_bottom {
				border-bottom: 3px solid #333;
			}
			&_top {
				border-top: 3px solid #333;
			}
			&:hover {
				border-color: #ff724c;
			}
			&.active {
				border-color: #ff724c;
			}
		}
	}
</style>