<template>
	<div class="preloader">
		<div class="preloader-animation">
			<div class="dot1"></div>
			<div class="dot2"></div>
		</div>
	</div>
</template>


<script>
	export default {
		name: "AppPreloader"
	}
</script>

<style scoped lang="scss">

	.preloader {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background: #fff;
	}

	.preloader-animation {
		margin: -20px auto 0;
		top: 50%;
		left: 0;
		right: 0;
		width: 40px;
		height: 40px;
		position: absolute;
		text-align: center;
		animation: rotate 2.0s infinite linear;
	}

	.dot1, .dot2 {
		width: 60%;
		height: 60%;
		display: inline-block;
		position: absolute;
		top: 0;
		background-color: #4d91de;
		border-radius: 100%;
		animation: bounce 2.0s infinite ease-in-out;
	}

	.dot2 {
		top: auto;
		bottom: 0;
		animation-delay: -1.0s;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
			-webkit-transform: rotate(360deg)
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: scale(0.0);
			-webkit-transform: scale(0.0);
		}
		50% {
			transform: scale(1.0);
			-webkit-transform: scale(1.0);
		}
	}
</style>