<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark" ml-auto>
            <!--button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button-->
            <div class="title">
                <h6>Profile Page</h6>
            </div>
            <form class="search-form">
                <input class="form-input" type="search" placeholder="Search here people or pages...">
                <button class="search-button" type="submit"><i class="fas fa-search"></i></button>
            </form>
            <span class="text-find-friends">Find Friends</span>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="smile" href="#">
                            <i class="far fa-smile"></i>
                            <div class="smile-badge">
                                <span class="blue-badge">6</span>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="comments" href="#">
                            <i class="far fa-comments"></i>
                            <div class="comments-badge">
                                <span class="purple-badge">2</span>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="thunder" href="#">
                            <i class="fas fa-bolt"></i>
                            <div class="thunder-badge">
                                <span class="orange-badge">8</span>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="author-data-wrapper">
                                <img src="../../assets/profile-images/author-page.jpg">
                                <div class="author-data">
                                    <span class="author-title">James Spiegel</span>
                                    <span class="author-subtitle">SPACE COWBOY</span>
                                    <span class="online-dot"></span>
                                </div>
                                <i class="fas fa-caret-down"></i>
                            </div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item-search">
                        <a class="search" href="#">
                            <button class="search-button" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="nav-item dropdown">
            <a class="nav-link-message dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="social-network-chat">
                    <i class="far fa-comments"></i>
                </div>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: flex-end;
}

.navbar-dark {
    height: 70px;
    background: #3f4257;
    padding-right: 70px;
}

.navbar-dark .fa-bars {
    color: white;
}

.title {
    text-transform: uppercase;
    color: #fff;
    padding: 7px 50px 0 85px;
}

h6 {
    color: #fff;
    font-weight: 700;
}

.search-form {
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 70px;
    background-color: #494c62;
}

.form-input {
    width: 230px;
    line-height: 1.5;
    background-color: #494c62;
    height: 100%;
    border: none;
    opacity: 0.4;
    padding-left: 15px;
    color: #9a9fbf;
    font-size: 12px;
    opacity: 1;
}

input {
    outline: none;
}

button[type=submit] {
    color: #696d87;
    border: none;
    background-color: #494c62;
    opacity: 0.4;
}

ul {
    list-style-type: none;
}

ul, li {
    margin: 0;
    padding: 0;
}

.nav-item-search {
    display: none;
}

a:link {
    text-decoration: none;
}

.text-find-friends {
    color: #fff;
    padding-left: 20px;
    font-size: 12px;
    font-weight: 600;
}

.text-find-friends:hover {
    color: #ff5e3a;
}

.navbar-nav {
    justify-content: center;
    align-items: center;
}

.smile {
    margin: 0 18px;
    position: relative;
}

.fa-smile {
   color: #fff;
   font-size: 22px;
   margin-top: 6px; 
}

.smile-badge {
    top: -13px;
    left: 15px;
    background: #38a9ff;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
}

.blue-badge {
    color: #fff;
    font-size: 11px;
}

.comments {
    margin: 0 18px;
    position: relative;
}

.fa-comments {
    color: #fff;
    font-size: 22px;
    margin-top: 6px; 
}

.comments-badge {
    top: -13px;
    left: 14px;
    background: #7c5ac2;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
}

.purple-badge {
    color: #fff;
    font-size: 11px;
}

.thunder {
    margin: 0 18px;
    position: relative;
}

.fa-bolt {
    color: #fff;
    font-size: 22px;
    margin-top: 6px;
}

.thunder-badge {
    top: -13px;
    left: 9px;
    background: #ff5e3a;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
}

.orange-badge {
    color: #fff;
    font-size: 11px;
}

.nav-link img {
    border-radius: 50%;
    margin-left: 50px;
}

.author-data-wrapper {
    display: flex;
    position: relative;
}

.author-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.author-title {
    color: #fff;
    font-weight: 700;
    font-size: 12px;
}

.author-subtitle {
    display: block;
    font-weight: 700;
    color: #9a9fbf;
    font-size: 8px;
}

.dropdown-toggle::after {
    display: none;
}

.online-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #32e4cd;
    top: 0px;
    left: 49px;
    border-radius: 50%;
}

.fa-caret-down {
    margin: 10px 0px 0px 15px;
}

.social-network-chat {
    display: none;
}

/*media query*/
@media only screen and (max-width: 1350px) {
    .search-form {
        max-width: 300px;
    }
}

@media only screen and (max-width: 1150px) {
    .author-data {
        display: none;
    }

    .fa-caret-down {
        display: none;
    }
}

@media only screen and (max-width: 1080px) {
	.title {
		display: none;
	}

    .text-find-friends {
        padding-left: 75px;
    }

    .search-form {
        max-width: 300px;
        margin-left: 56px;
        margin-right: 75px;
    }
}

@media only screen and (max-width: 1024px) {
	.nav-link img {
        margin-left: 0;
    }
}

@media only screen and (max-width: 992px) {
	.text-find-friends {
        padding-left: 50px;
    }

    .search-form {
        margin-right: 30px;
    }
}

@media only screen and (max-width: 880px) {
	.text-find-friends {
        padding-left: 30px;
    }

    .search-form {
        margin-right: 20px;
    }
}

@media only screen and (max-width: 769px) {
    .text-find-friends {
        padding-left: 10px;
    }

    .search-form {
        margin-right: 50px;
    }
}

@media only screen and (max-width: 768px) {
    .text-find-friends {
        display: none;
    }

    .search-form {
        display: none;
    }

    .social-network-chat {
        color: #fff;
        width: 70px;
        height: 70px;
        background-color: #7c5ac2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        position: fixed;
        z-index: 22;
        right: 0;
        margin-top: -70px;
        cursor: pointer;
    }

    .nav-link-message {
        padding: 0;
    }

    .author-data-wrapper {
        display: none;
    }

    .navbar-nav {
        margin: auto;
    }

    .nav-item {
        margin-right: 20px;
        margin-left: 20px;
    }

    .search-form {
        display: none;
    }

    .nav-item-search {
        display: block;
    }

    .search-button {
       height: 70px;
    }

    .fa-search {
        color: #9a9fbf;
    }
}
</style>
