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
						<li class="nav-item"><a class="nav-link" href="#">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Community</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Pages</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Events</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
						<li class="nav-item dropdown">
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
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
								<div class="full-name-form-wrapper">
									<div class="first-name-wrapper">
										<input id="first-name" type="text" name="firstname" required>
										<label class="label-first-name" for="first-name">First Name</label>
									</div>
									<div class="last-name-wrapper">
										<input id="last-name" type="text" name="lastname" required>
										<label class="label-second-name" for="last-name">Last Name</label>
									</div>
								</div>
								<div class="registration-form-data-wrapper">
									<div class="email-wrapper">
										<input id="email" type="email" name="email" required>
										<label class="label-email" for="label-email">Your Email</label>
									</div>
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
			isBarClicked: false
		}
	},
	components: {
		appLoginForm: LoginForm
	}
}
</script>

<style scoped>
.main-container {
	background-color: white;
	background-image: url("../assets/login-images/users-bg.png");
	background-repeat: repeat;
	animation-delay: 0s;
	animation-duration: 20s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-fill-mode: none;
	animation-play-state: running;
	animation-name: move-right;
	position: relative;
	width: 100%;
	height: 100vh;
}

.content {
	background-color: rgb(255,94,58, 0.9);
	width: 100%;
	height: 100vh;
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

@keyframes move-right {
	0% {
		background-position-x: 0%;
	}
	100% {
		background-position-x: 100%;
	}
}

.navbar-light .navbar-nav .nav-link {
	color: #fff;
}

.navbar-light .navbar-toggler {
	border: none;
}

.fa-bars {
	color: #fff;
}

.fa-times {
	color: #fff;
	font-size: 23px;
}

button[type=button] {
	outline: none;
}

.logo-wrapper {
	display: flex;
	justify-content: space-between;
}

img {
	width: 50px;
    height: 50px;
}

.title-wrapper {
	display: flex;
	flex-direction: column;
}

.main-title {
	color: white;
    font-size: 18px;
    margin-left: 10px;
	margin-bottom: 0;
}

.title {
    font-size: 12px;
    color: white;
	margin-left: 10px;
}

.main-content {
	width: 100%;
}

.content-wrapper {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 85%;
	margin: 40px auto;
}

.left-content {
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 58%;
}

.left-content-title {
	font-weight: 100;
	color: white;
	font-size: 34px;
	width: 60%;
}

.left-content-text {
	color: white;
	width: 75%;
	font-size: 14px;
}

.registration-button {
	border: 1px solid white;
	color: white;
	width: 160px;
	height: 40px;
	margin-top: 22px;
	align-items: center;
	display: flex;
	justify-content: center;
	cursor: pointer;
	border-radius: 4px;
}

.right-content {
    display: flex;
    background-color: white;
    border-radius: 0px 4px 4px 0px;
	width: 42%;
}

.top-side {
	display: none;
}

.left-side {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
	width: 18%;
}

.shut-down-aside {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #8080804f;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #8080804f;
    height: 50%;
}

.fa-power-off {
	font-size: 18px;
	color: rgb(255,94,58);
}

.spinner-aside {
    display: flex;
    justify-content: center;
	align-items: center;
    background-color: #acd1ef14;
    height: 50%;
	border-right: 1px solid #8080804f;
}

.fa-spinner {
	font-size: 18px;
	color: gray;
}

.registration-form {
	display: flex;
	flex-direction: column;
	width: 82%;
}

.register-header-title {
	display: flex;
	text-align: center;
	align-items: center;
	padding-left: 10px;
	height: 60px;
	font-size: 15px;
	border-bottom: 1px solid #8080804f;
	font-weight: 600;
}

form {
	padding: 28px;
}

.registration-form-data-wrapper {
	display: flex;
	flex-direction: column;
}

.full-name-form-wrapper {
	display: flex;
	margin-bottom: 25px;
}

.first-name-wrapper,
.last-name-wrapper,
.email-wrapper {
	display: flex;
	position: relative;
	height: 40px;
	line-height: 40px;
	width: 100%;
}

.label-first-name,
.label-second-name,
.label-email {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	color: gray;
	transition: 0.2s all;
	cursor: text;
	padding-left: 8px;
}

input[type=text],
input[type=email] {
	font-weight: 500;
	width: 100%;
	border: 0;
	outline: 0;
	border: 1px solid #8080804f;
	border-radius: 4px;
	box-shadow: none;
	color: #555555;
	font-size: 15px;
	-webkit-transition: border-bottom 0.4s ease-out;
	-o-transition: border-bottom 0.4s ease-out;
	-moz-transition: border-bottom 0.4s ease-out;
	transition: border-bottom 0.4s ease-out;
}

input[type=text]:invalid,
input[type=email]:invalid {
	outline: 0;
}

input[type=text]:focus,
input[type=text]:valid,
input[type=email]:focus,
input[type=email]:valid {
	border-color: #ff5e3a;
}

input[type=text]:focus~label,
input[type=text]:valid~label,
input[type=email]:focus~label,
input[type=email]:valid~label {
	font-size: 11px;
	top: -14px;
	color: #555555;
}

#first-name {
	margin-right: 10px;
	width: 100%;
	padding-left: 8px;
	padding-top: 10px;
}

#last-name {
	width: 100%;
	padding-left: 8px;
	padding-top: 10px;
}

input[type=password],
input[type=date] {
	margin: 12px 0px;
	padding-left: 10px;
	line-height: 42px;
	border: 1px solid #8080804f;
}

/*calendar style*/
input[type="date"] {
	position: relative;
}

input[type="date"]:after {
	font-family: "Font Awesome 5 Free";
	font-weight: 900; 
	content: "\f073";
	color: #555;
	padding: 0 5px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
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

input[type="date"]::-webkit-inner-spin-button {
	z-index: 1;
	padding-top: 24px;
	font-size: 13px;
}

 
input[type="date"]::-webkit-clear-button {
	z-index: 1;
}

.select-gender {
	margin: 12px 0px;
	padding-left: 10px;
	height: 42px;
	border: 1px solid #8080804f;
}

input:focus {
	outline: none;
}

.check-terms-register {
	display: flex;
    flex-wrap: wrap;
    margin-top: 18px;
    margin-bottom: 12px;
}

.terms {
    margin-left: 5px;
}

.terms-and-conditions {
	color: rgb(255,94,58);
	margin: 0 2px;
}

.submit-registration {
    width: 100%;
    background-color: #803ddf;
    text-align: center;
    color: white;
    font-weight: 500;
    height: 42px;
    align-items: center;
    display: flex;
    justify-content: center;
	border-radius: 6px;
	outline: none;
	border: none;
	margin-bottom: 30px;
}

/*checkbox style*/
.container {
	display: flex;
	position: relative;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 14px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	flex-wrap: wrap;
    text-align: justify;
}

.container input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 14px;
	width: 14px;
	background-color: white;
	border: 1px solid gray;
	border-radius: 2px;
	margin-top: 2px;
}

.checkmark:after {
	content: "";
	position: absolute;
	display: none;
}

.container input:checked ~ .checkmark:after {
	display: block;
}

.container .checkmark:after {
	left: 3px;
	top: 0px;
	width: 6px;
	height: 10px;
	border: 1px solid rgb(255,94,58);
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}

/*media query*/
@media only screen  and (max-width: 1200px) {
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
		-webkit-transition: color .3s ease;
		-moz-transition: color .3s ease;
		-o-transition: color .3s ease;
		transition: color .3s ease;
	}

	.navbar-light .navbar-nav .nav-link:hover {
		color: #ff5e3a;
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

	.left-content-title {
		width: 100%;
	}

	.left-content-text {
		width: 100%;
	}

	.right-content {
		width: 100%;
	}

	.left-side {
		display: none;
	}

	.registration-form {
		width: 100%;
	}

	.register-header-title {
		padding-left: 20px;
	}

	.top-side {
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #8080804f;
	}

	.top-shut-down {
		display: flex;
		justify-content: center;
		width: 50%;
		border-right: 1px solid #8080804f;
		height: 60px;
		align-items: center;
	}

	.top-spinner {
		display: flex;
		margin: auto;
		justify-content: center;
		width: 50%;
	}

	.fa-spinner {
		color: gray;
	}

	.registration-button {
		width: 120px;
		font-size: 14px;
	}
}
</style>
