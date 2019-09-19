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

<style scoped>
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
	color: #8080804f;
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
	color: rgb(255,94,58);
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

input[type=email],
input[type=password] {
	margin: 12px 0px;
	padding-left: 10px;
	line-height: 42px;
	border: 1px solid #8080804f;
}

input:focus {
	outline: none;
}

/*checkbox style*/
.container {
	display: flex;
	position: relative;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 15px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	user-select: none;
    justify-content: space-between;
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

.check-terms-register {
	display: flex;
    flex-wrap: wrap;
    margin-top: 18px;
    margin-bottom: 12px;
}

.checkbox-text-remember {
	display: flex;
    font-size: 13px;
    margin: 0 5px;
}

.text-forgot {
    display: flex;
    font-size: 13px;
    text-align: right;
}

.submit-login {
    width: 100%;
    background-color: rgb(255,94,58);
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
}

.or {
	font-size: 15px;
	text-align: center;
	margin-bottom: 12px;
}

.facebook-login {
	height: 42px;
	color: white;
	background-color: #4263eb;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	font-size: 14px;
	font-weight: 600;
	margin: 12px 28px;
}

.fa-facebook-f {
	padding-right: 10px;
}

.twitter-login {	
	height: 42px;
	color: white;
	background-color: #5cace2;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	font-size: 14px;
	font-weight: 600;
	margin: 0 28px 12px 28px;
}

.fa-twitter {
	padding-right: 10px;
}

.login-footer {
	display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin: 0 28px 40px 28px;
    text-align: justify;
}

.register-now {
	color: rgb(255,94,58);
	font-size: 14px;
}

/*media query*/
@media only screen and (max-width: 991px) {
	.right-content {
		width: 45%;
	}
}

@media only screen and (max-width: 768px) {
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
		color: rgb(255,94,58);
	}

	.registration-button {
		width: 120px;
		font-size: 14px;
	}
}
</style>
