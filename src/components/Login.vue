<template>
	<div class="main-container">
		<div class="content">
			<nav class="navbar navbar-expand-lg navbar-light">
				<a class="navbar-brand" href="#">
					<div class="logo-wrapper">
						<img src="../assets/login-images/logo.png" alt="logo">
						<div class="title-wrapper">
							<label class="main-title">OLYMPUS</label>
							<span class="title">SOCIAL NETWORK</span>
						</div>
					</div>
				</a>
				<button class="navbar-toggler" type="button" @click="isBarClicked = !isBarClicked" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<i class="fas fa-bars" v-if="!isBarClicked"></i>
					<i class="fas fa-times" v-if="isBarClicked"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li v-for="li in dropdownLinks" :key="li.id">
							<a class="nav-link" href="#">{{ li.text }}</a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="main-content">
				<div class="content-wrapper">
					<div class="left-content">
						<h2 class="left-content-title">Welcome to the Biggest Social Network in the World</h2>
						<div class="left-content-text">
							<p>We are the best and biggest social network with 5 billion active users all around the world. Share you thoughts, write blog posts, show your favorite music via Stopify, earn badges and much more!</p>
						</div>
						<div class="registration-button">Register Now!</div>
					</div>
					<div class="right-content" v-if="isNewUser">
						<div class="left-side">
							<div class="shut-down-aside">
								<i class="fas fa-power-off"></i>
							</div>
							<div class="spinner-aside">
								<i class="fas fa-spinner"></i>
							</div>
						</div>
						<div class="registration-form">
							<div class="top-side">
								<div class="top-shut-down">
									<i class="fas fa-power-off"></i>
								</div>
								<div class="top-spinner">
									<i class="fas fa-spinner"></i>
								</div>
							</div>
							<div class="register-header-title">Register to Olympus</div>
							<form id="form" @submit.prevent="isNewUser = false">								
								<div class="fullname-form-wrapper">
									<input id="first-name" type="text" name="firstname" placeholder="First Name" required>
									<input id="last-name" type="text" name="lastname" placeholder="Last Name" required>
								</div>							
								<div class="registration-form-data-wrapper">
									<input id="email" type="email" name="email" placeholder="Your Email" required>
									<input id="password" type="password" name="psw" placeholder="Your Password" required>
									<input id="date" type="date" name="bday" required>
									<select name="genderlist" class="select-gender">
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="other">Other</option>
									</select>
									<div class="check-terms-register">
										<label class="container">
											<span class="terms">I accept the <span class="terms-and-conditions">Terms and Conditions</span> of the website</span>
											<input type="checkbox" name="terms-and-conitions" value="website">
											<span class="checkmark"></span>
										</label>
									</div>
								</div>
								<button class="submit-registration" type="submit" value="Submit">Complete Registration!</button>
							</form> 
						</div>
					</div>
					<app-login-form v-else></app-login-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import LoginForm from '../components/form/LoginForm.vue';

export default {
	data() {
		return {
			isNewUser: true,
			isBarClicked: false,
			dropdownLinks: this.$store.state.loginPage.dropdownLinks
		}
	},
	components: {
		appLoginForm: LoginForm
	}
}
</script>

<style lang='scss' scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.main-container {
	background-color: #fff;
	background-image: url("../assets/login-images/users-bg.png");
	background-repeat: repeat;
	position: relative;
	@include full-width-height;
	animation-delay: 0s;
	animation-duration: 20s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-fill-mode: none;
	animation-play-state: running;
	animation-name: move-right;
}

.content {
	background-color: rgba(255,94,58, 0.9);
	@include full-width-height;
	overflow: scroll;
}

@-webkit-keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

@-moz-keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

@-o-keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

@keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

.navbar-light .navbar-nav .nav-link,
.fa-bars {
	color: #fff;
}

.navbar-light .navbar-toggler {
	border: none;
}

.fa-times {
	color: #fff;
	font-size: $base-font-size + 7;
}

img {
	width: 50px;
    height: 50px;
}

.title-wrapper {
	@include flex-column;
}

.main-title {
	color: #fff;
    font-size: $base-font-size + 2;
    margin-left: 10px;
	margin-bottom: 0;
}

.title {
    font-size: $base-font-size - 4;
    color: #fff;
	margin-left: 10px;
}

.main-content {
	width: 100%;
}

.content-wrapper {
	@include flex-center;
	flex-wrap: wrap;
	width: 85%;
	margin: 40px auto;
}

.left-content {
	@include flex-center;
	flex-direction: column;
	width: 58%;
}

.left-content-title {
	color: #fff;
	font-size: $base-font-size + 18;
	width: 60%;
}

.left-content-text {
	color: #fff;
	width: 75%;
	font-size: $base-font-size - 2;
}

.registration-button {
	border: 1px solid #fff;
	color: #fff;
	width: 160px;
	height: 40px;
	margin-top: 22px;
	align-items: center;
	@include flex-center;
	cursor: pointer;
	border-radius: 4px;
}

.right-content {
    @include right-content;
}

.top-side {
	display: none;
}

.left-side {
	@include left-side;
}

.shut-down-aside {
	@include shut-down-aside;
}

.fa-power-off {
	font-size: $base-font-size + 2;
	color: $orange-main-color;
}

.spinner-aside {
    @include spinner-aside;
}

.fa-spinner {
	font-size: $base-font-size + 2;
	color: #8080804f;
}

.registration-form {
	@include registration-form;
}

.register-header-title {
	@include register-header-title;
}

form {
	padding: 28px;
}

.registration-form-data-wrapper {
	@include flex-column;
}

.logo-wrapper,
.fullname-form-wrapper {
	display: flex;
}

#first-name,
#last-name {
	margin-right: 10px;
	width: 50%;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"],
.select-gender {
	@include inputs;
}

/*calendar style*/
input[type="date"] {
	position: relative;

	&:after {
		font-family: "Font Awesome 5 Free";
		font-weight: 900; 
		content: "\f073";
		color: #555;
		padding: 0 5px;
	}

	&::-webkit-calendar-picker-indicator {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: auto;
		height: auto;
		color: transparent;
		background: transparent;
	}

	&::-webkit-inner-spin-button {
		z-index: 1;
		padding-top: 24px;
		font-size: $base-font-size - 3;
	}

	&::-webkit-clear-button {
		z-index: 1;
	}
}

button[type="button"],
input:focus {
	outline: none;
}

.check-terms-register {
	@include check-terms-register;
}

.terms {
    margin-left: 5px;
}

.terms-and-conditions {
	color: $orange-main-color;
	margin: 0 2px;
}

.submit-registration {
    width: 100%;
    background-color: #803ddf;
    color: #fff;
    font-weight: 500;
    height: 42px;
    @include flex-center;
	border-radius: 6px;
	outline: none;
	border: none;
	margin-bottom: 30px;
}

/*checkbox style*/
.container {
	@include checkbox-container;

	input {
		@include checkbox-container-input;

		&:checked ~ .checkmark:after {
			display: block;
		}
	}

	.checkmark:after {
		@include container-checkmark-after;
	}
}

.checkmark {
	@include checkbox-container-checkmark;

	&:after {
		@include checkbox-container-checkmark-after;
	}
}

/*media query*/
@media only screen and (max-width: 1200px) {
	.content-wrapper {
		width: 90%;
	}
}

@media only screen and (max-width: 991px) {
	.navbar-light .navbar-nav {
		background-color: #fff;
	}

	.navbar-light .navbar-nav .nav-link {
		color: #515365;
		font-weight: 700;
		padding: 10px 20px;
		@include transition-vendors(color .3s ease);

		&:hover {
			color: $orange-main-color;
		}
	}

	.main-content {
		padding: 20px;
	}

	.content-wrapper {
		width: 97%;
	}

	.left-content {
		width: 55%;
	}

	.right-content {
		width: 45%;
	}
}

@media only screen and (max-width: 768px) {
	.left-content {
		width: 100%;
		margin-bottom: 40px;
	}

	.left-content-title,
	.left-content-text,
	.right-content,
	.registration-form {
		width: 100%;
	}

	.left-side {
		display: none;
	}

	.register-header-title {
		padding-left: 20px;
	}

	.top-side {
		@include flex-row;
		border-bottom: 1px solid #8080804f;
	}

	.top-shut-down {
		@include flex-center;
		width: 50%;
		border-right: 1px solid #8080804f;
		height: 60px;
		align-items: center;
	}

	.top-spinner {
		@include flex-center;
		margin: auto;
		width: 50%;
	}

	.fa-spinner {
		color: #8080804f;
	}

	.registration-button {
		width: 120px;
		font-size: $base-font-size - 2;
	}
}
</style>
