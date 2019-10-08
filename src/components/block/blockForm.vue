<template>
	<div class="feedback">
		<blockTitle><h3> Contact Form </h3></blockTitle>

		<form class="form" id="contact-form" method="post" action="" @submit.prevent="send">

			<div class="form__messages"></div>

			<div class="form__controls">
				<div class="form__group" :class="{'has-error': $v.name.$error}">
					<input type="text" name="name" class="form__input form__input_name"
						   placeholder="Full Name"
						   v-model.lazy="$v.name.$model">
					<div class="form__border"></div>
					<i class="form__icon pe-7s-user"></i>
					<div class="form__help-block with-errors" v-if="$v.name.$error ">Ошибка</div>
				</div>

				<div class="form__group" :class="{'has-error': $v.email.$error}">
					<input type="text" name="name" class="form__input form__input_email"
						   placeholder="Email"
						   v-model.lazy="$v.email.$model">
					<div class="form__border"></div>
					<i class="form__icon pe-7s-user"></i>
					<div class="form__help-block with-errors" v-if="$v.email.$error ">Ошибка</div>
				</div>

				<div class="form__group" :class="{'has-error': $v.message.$error}">
					<textarea name="name" class="form__input form__input_message"
							  placeholder="Message"
							  v-model.lazy="$v.message.$model"/>
					<div class="form__border"></div>
					<i class="form__icon pe-7s-user"></i>
					<div class="form__help-block with-errors" v-if="$v.message.$error ">Ошибка</div>
				</div>

				<input type="submit" class="form__button disabled" value="Send message">
			</div>
		</form>

	</div>

</template>

<script>
	import blockTitle from './blockTitle'
	import {required, email, minLength} from "vuelidate/lib/validators";

	export default {
		name: "blockAddress",
		data() {
			return {
				email: null,
				name: null,
				message: null
			}
		},
		components: {
			blockTitle
		},
		validations: {
			email: {
				required,
				email
			},
			name: {
				required,
				minLength: minLength(2)
			},
			message: {
				required,
			}
		},
		methods: {
			send() {
				this.$v.$touch()

				if(!this.$v.$invalid) {

				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.feedback {
		width: 100%;
		margin-bottom: 40px;
		@media (min-width: 1000px) {
			width: 45%;
		}
		.form {
			&__group {
				position: relative;
				margin: 0 0 20px;
			}
			&__border {
				position: absolute;
				z-index: -1;
				left: 50%;
				right: 50%;
				bottom: 0;
				background: var(--color-accent-contrast-higher);
				height: 2px;
				transition: all 0.4s ease-in-out;
			}
			&__input {
				position: relative;
				border: 1px solid #bbb;
				border-radius: 0;
				display: block;
				font-size: 0.9em;
				margin: 0;
				padding: 10px 35px 10px 12px;
				width: 100%;
				background: 0 0;
				text-align: left;
				color: var(--color-contrast-higher);
				box-shadow: none;
				outline: none;
				font-family: 'PT Sans', Helvetica, sans-serif;

				&:focus {
					border-color: #66afe9;
					outline: 0;
					box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px var(--color-accent-contrast-higher);
				}

				&_message {
					@media (min-width: 1000px) {
						height: 100px;
					}
				}
			}
			&__input:focus + .form__border {
				left: 0;
				right: 0;
				z-index: 1;
			}
			&__group.has-error .form__border {
				left: 0;
				right: 0;
				z-index: 1;
				background: #ff4c4c;
			}
			&__help-block {
				position: absolute;
				display: inline-block;
				padding: 0px 5px;
				font-size: 0.8em;
				line-height: 1.5em;
				margin: -2px 0 0 10px;
				color: #fff;
				background: #ff4c4c;

				&:before {
					content: " ";
					position: absolute;
					left: 5px;
					bottom: 100%;
					width: 0;
					height: 0;
					border-bottom: 10px solid #ff4c4c;
					border-right: 10px solid transparent;
				}
			}
			&__help-block:empty {
				display: none;
			}
			&__icon {
				position: absolute;
				top: 9px;
				right: 12px;
				font-size: 24px;
				color: #aaa;
			}
			&__button {
				display: inline-block;
				position: relative;
				padding: 0.8em 2em;
				margin-bottom: .25em;
				font-size: 0.875em;
				line-height: 1.2;
				outline: 0;
				border: 2px solid var(--color-accent-contrast-higher);
				color: var(--color-contrast-higher);
				text-shadow: none;
				background: none;
				border-radius: 0;
				font-family: 'PT Sans', Helvetica, sans-serif;

				&:hover, &:focus {
					border-color: #66afe9;
					outline: 0;
					box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px var(--color-accent-contrast-higher);
				}
			}
		}
	}
</style>