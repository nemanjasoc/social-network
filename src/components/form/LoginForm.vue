<template> 
    <div class="right-content">
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
            <div class="register-header-title">Login to Your Account</div>
            <form id="form" @submit.prevent="goToProfilePage">
                <div class="registration-form-data-wrapper">
                    <input id="email" type="email" name="email" placeholder="Your Email" required>
                    <input id="password" type="password" name="psw" placeholder="Your Password" required>
                    <div class="check-terms-register">
                        <label class="container">							
							<span class="checkbox-text-remember">Remember me</span>
							<span class="text-forgot">Forgot my Password</span>
                            <input type="checkbox" name="terms-and-conitions" value="website">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <button class="submit-login" type="submit" value="Submit">Login</button>
            </form>
			<span class="or">OR</span>
			<span class="facebook-login"><i class="fab fa-facebook-f"></i>Login with Facebook</span>
			<span class="twitter-login"><i class="fab fa-twitter"></i>Login with Twitter</span>
			<div class="login-footer">
				<div class="register-text-question">Don't you have an account?
					<span class="register-now">Register Now!</span>
					It's really simple and you can start enjoing all the benefits!
				</div>
			</div> 
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToProfilePage() {
            this.$router.push('/profile');
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

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
	color: #8080804f;
}

.spinner-aside {
    @include spinner-aside;
}

.fa-spinner {
	font-size: $base-font-size + 2;
	color: #ff5e3a;
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

input[type=email],
input[type=password] {
	@include inputs;
}

input:focus {
	outline: none;
}

/*checkbox style*/
.container {
	@include checkbox-container;
}

.container input {
	@include checkbox-container-input;

	&:checked ~ .checkmark:after {
		display: block;
	}
}

.checkmark {
	@include checkbox-container-checkmark;

	&:after {
		@include checkbox-container-checkmark-after;
	}
}

.container .checkmark:after {
	@include container-checkmark-after;
}

.check-terms-register {
	@include check-terms-register;
}

.checkbox-text-remember {
	display: flex;
    font-size: $base-font-size - 3;
    margin: 0 5px;
}

.text-forgot {
    display: flex;
    font-size: $base-font-size - 3;
    text-align: right;
}

.submit-login {
    width: 100%;
    background-color: #ff5e3a;
    text-align: center;
    color: #fff;
    font-weight: 500;
    height: 42px;
    align-items: center;
    @include flex-center;
	border-radius: 6px;
	outline: none;
	border: none;
}

.or {
	font-size: $base-font-size - 1;
	text-align: center;
	margin-bottom: 12px;
}

.facebook-login {
	background-color: #4263eb;
	@include social-networks-login;
	margin: 12px 28px;
}

.fa-facebook-f {
	padding-right: 10px;
}

.twitter-login {	
	background-color: #5cace2;
	@include social-networks-login;
	margin: 0 28px 12px 28px;
}

.fa-twitter {
	padding-right: 10px;
}

.login-footer {
	@include flex-wrap;
    font-size: $base-font-size - 3;
    margin: 0 28px 40px 28px;
    text-align: justify;
}

.register-now {
	color: #ff5e3a;
	font-size: $base-font-size - 3;
}

/*media query*/
@media only screen and (max-width: 991px) {
	.right-content {
		width: 45%;
	}
}

@media only screen and (max-width: 768px) {
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
		color: #ff5e3a;
	}

	.registration-button {
		width: 120px;
		font-size: $base-font-size - 2;
	}
}
</style>
