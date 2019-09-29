<template>
    <header>
        <nav class="navbar fixed-top navbar-expand navbar-dark" ml-auto>
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
                    <li class="nav-item" v-for="li in dropdowns" :key="li.id">                    
                        <div class="dropdown">
                            <div class="dropbtn">
                                <a class="smile" href="#" v-if="(li.smile)">
                                    <i class="far fa-smile"></i>
                                    <div class="smile-badge">
                                        <span class="blue-badge">{{ li.badge_number }}</span>
                                    </div>
                                </a>
                                <a class="comments" href="#" v-if="(li.comments)">
                                    <i class="far fa-comments"></i>
                                    <div class="comments-badge">
                                        <span class="purple-badge">{{ li.badge_number }}</span>
                                    </div>
                                </a>
                                <a class="thunder" href="#" v-if="(li.thunder)">
                                    <i class="fas fa-bolt"></i>
                                    <div class="thunder-badge">
                                        <span class="orange-badge">{{ li.badge_number }}</span>
                                    </div>
                                </a>                           
                            </div>
                            <div class="dropdown-container">
                                <div class="dropdown-header">
                                    <span class="dropdown-header-left-title">{{ li.left_title }}</span>
                                    <div class="dropdown-header-right-titles">
                                        <span>{{ li.right_title_first }}</span>
                                        <span>{{ li.right_title_second }}</span>
                                    </div>
                                </div>
                                <div class="dropdown-content" v-if="(li.smile)">                                                                  
                                    <ul>
                                        <li v-for="li in dropdownContentSmile" :key="li.id">
                                            <div class="dropdown-author-content">
                                                <div class="dropdown-author-data-wrapper">
                                                    <div class="dropdown-author-img">
                                                        <img :src="getImgUrl(li.img)" :alt="li.img">
                                                    </div>
                                                    <div class="dropdown-author-data">
                                                        <span class="dropdown-author-name">{{ li.name }}</span>
                                                        <span class="dropdown-author-text">{{ li.text }}</span>
                                                        <div class="dropdown-author-text-wrapper" v-if="(li.dropdown_author_text_wrapper)">You and
                                                            <span class="dropdown-author-name-inner">Mary Jane Stark</span>
                                                            just <br> became friends. Write on <br>
                                                            <span class="blue-text">her wall</span>.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ordinary-smile" v-if="(li.ordinary_smile)">                                        
                                                    <i class="far fa-smile"></i>
                                                </div> 
                                                <div class="smile-squares" v-else>
                                                    <div class="blue-smile"><i class="far fa-smile"></i></div>
                                                    <div class="gray-smile"><i class="far fa-smile"></i></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dropdown-content" v-if="(li.comments)">                                                                  
                                    <ul>
                                        <li v-for="li in dropdownContentComments" :key="li.id">
                                            <div class="dropdown-author-content">
                                                <div class="dropdown-author-data-wrapper" v-if="(li.four_img == false)">
                                                    <div class="dropdown-author-img">
                                                        <img :src="getImgUrl(li.img)" :alt="li.img">
                                                    </div>
                                                    <div class="dropdown-author-data">
                                                        <span class="dropdown-author-name">{{ li.name }}</span>
                                                        <span class="dropdown-author-text">{{ li.text }}</span>
                                                        <span class="chat-time">{{ li.time }}</span>
                                                    </div>
                                                </div>
                                                <div class="dropdown-author-data-wrapper" v-else>
                                                    <div class="dropdown-users-img" >
                                                        <img v-for="img in li.images" :key="img.id" :src="getImgUrl(img.user)" :alt="img.user">
                                                    </div>
                                                    <div class="dropdown-author-data">
                                                        <span class="dropdown-author-name">You, Faye, Ed & Jet +3</span>
                                                        <span class="dropdown-author-message">Ed:
                                                            <span class="dropdown-author-text">Yeah! Seems fine by me!</span>
                                                        </span>
                                                        <span class="chat-time">March 16th at 10:23am</span>
                                                    </div>
                                                </div>
                                                <div class="chat-message-icon">
                                                    <i class="far fa-comment-alt"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dropdown-content" v-if="(li.thunder)">                                                                  
                                    <ul>
                                        <li v-for="li in dropdownThunderComments" :key="li.id">
                                            <div class="dropdown-author-content">
                                                <div class="dropdown-author-data-wrapper">
                                                    <div class="dropdown-author-img">
                                                        <img :src="getImgUrl(li.img)" :alt="li.img">
                                                    </div>
                                                    <div class="dropdown-author-data">
                                                        <div class="dropdown-author-name">{{ li.name }}
                                                            <span class="dropdown-author-text">{{ li.text }}
                                                                <span class="orange-text">{{ li.colored_text }}</span>
                                                            </span>
                                                            <span class="dropdown-author-text-wrapper" v-if="(li.dropdown_author_text_wrapper)">You and
                                                                <span class="dropdown-author-name">Nicholas Grissom</span>
                                                                just <br> became friends. Write on 
                                                                <span class="orange-text">his wall</span>.
                                                            </span>
                                                        </div>
                                                        <span class="chat-time">{{ li.time }}</span>
                                                        <div class="comment-photo" v-if="(li.comment_photo)">
                                                            <img src="../../assets/profile-images/comment-photo1.jpg" alt="photo-1">
                                                            <span class="dropdown-author-text">"She looks incredible in that <br> outfit! We should see each..."</span>
                                                        </div> 
                                                    </div>
                                                </div>
                                                <div class="chat-message-icon-transparent" v-if="(li.chat_message_icon)">
                                                    <i class="far fa-comment-alt"></i>
                                                </div>
                                                <div class="ordinary-smile" v-if="(li.ordinary_smile)">                                        
                                                    <i class="far fa-smile"></i>
                                                </div>
                                                <div class="chat-message-heart" v-if="(li.chat_message_heart)">
                                                    <i class="far fa-heart"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div :class="li.footer_color">
                                    <span class="dropdown-footer-text">{{ li.footer_text }}</span>
                                </div> 
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown-author">
                            <div class="dropbtn">
                                <div class="author-data-wrapper">
                                    <div class="author-status">
                                        <img src="../../assets/profile-images/author-page.jpg" alt="author">
                                        <span class="online-status-dot"></span>
                                    </div>
                                    <div class="author-data">
                                        <span class="author-title">James Spiegel</span>
                                        <span class="author-subtitle">SPACE COWBOY</span>
                                    </div>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="dropdown-content-author-wrapper">
                                <div class="dropdown-content-author">
                                    <div class="dropdown-title">
                                        <span class="title-account">Your Account</span>
                                    </div>
                                    <ul>
                                        <li class="account" v-for="li in account" :key="li.id">
                                            <i :class="li.icon"></i>
                                            <span class="account-text">{{ li.account_text }}</span>
                                        </li>                           
                                    </ul>
                                        <div class="dropdown-title">
                                            <span class="title-chat-settings">Chat Settings</span>
                                        </div>
                                    <ul>
                                        <li class="chat-status" v-for="li in status" :key="li.id">
                                            <span :class="li.status_dot"></span>
                                            <span class="status-title">{{ li.status_title }}</span>
                                        </li>                      
                                    </ul>
                                        <div class="dropdown-title">
                                            <span class="title-custom-status">Custom Status</span>
                                        </div>
                                        <form class="form-group">
                                            <input class="form-control" type="search" value="Space Cowboy">
                                            <button type="button" class="check-button"><i class="fas fa-check"></i></button>
                                        </form>
                                        <div class="dropdown-title">
                                            <span class="title-olympus">About Olympus</span>
                                        </div>
                                    <ul>
                                        <li class="about-list" v-for="li in aboutList" :key="li.id">
                                            <span class="about-list-title">{{ li.about_list_title }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>                       
                    </li>
                    <li class="nav-item-search">
                        <a class="search" href="#">
                            <button class="search-button" type="submit" @click="isSearchClicked = !isSearchClicked" :class="{ orange: isSearchClicked }">
                                <i class="fas fa-search" v-if="!isSearchClicked" @click="closeLeftSidebar()"></i>
                                <i class="fas fa-times" v-if="isSearchClicked"></i>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <form class="search-form-small-screen" :class="{ inactive: !isSearchClicked }">
            <input class="form-input-small-screen" type="search" placeholder="Search here people or pages...">
        </form>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isSearchClicked: false,
            dropdowns: this.$store.state.header.dropdowns,
            dropdownContentSmile: this.$store.state.header.dropdownContentSmile,
            dropdownContentComments: this.$store.state.header.dropdownContentComments,
            dropdownThunderComments: this.$store.state.header.dropdownThunderComments,
            account: this.$store.state.header.account,
            status: this.$store.state.header.status,
            aboutList: this.$store.state.header.aboutList
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../../assets/profile-images/'+pic)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.navbar {
    @include flex-end;
}

.navbar-dark {
    height: 70px;
    background: #3f4257;
    padding-right: 70px;
}

.navbar-dark .fa-bars {
    color: #fff;
}

.title {
    text-transform: uppercase;
    color: #fff;
    padding: 7px 50px 0 85px;
}

h6 {
    color: #fff;
    font-weight: 700;
    font-size: $base-font-size - 1;
}

.search-form {
    @include flex-space-between;
    width: 500px;
    height: 70px;
    background-color: #494c62;
}

.search-form-small-screen {
    @include flex-space-between;
    position: absolute;
    top: 70px;
    width: 100%;
    height: 70px;
    background-color: #494c62;
    visibility: visible;
    z-index: 10;
}

.search-form-small-screen.inactive {
    visibility: hidden;
}

.search-button.orange {
    border-bottom: 3px solid $orange-main-color;
}

.form-input,
.form-input-small-screen {
    @include form-input;
}

input {
    outline: none;
}

button[type="submit"] {
    color: #696d87;
    border: none;
    background-color: #494c62;
    opacity: 0.8;
}

ul, li {
    @include ul-li;
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
    font-size: $base-font-size - 4;
    font-weight: 600;
    @include transition-vendors(color .3s ease);

    &:hover {
        color: $orange-main-color;
        cursor: pointer;
    }
}

.navbar-nav {
    justify-content: center;
    align-items: center;
}

.smile,
.comments,
.thunder  {
    margin: 0 18px;
    position: relative;
}

.fa-smile,
.fa-comments,
.fa-bolt {
   color: #fff;
   font-size: $base-font-size + 6;
   margin-top: 6px; 
}

.smile-badge {
    background: #38a9ff;
    @include header-badges;
}

.comments-badge {
    background: #7c5ac2;
    @include header-badges;
}

.thunder-badge {
    background: $orange-main-color;
    @include header-badges;
}

.blue-badge,
.purple-badge,
.orange-badge {
    color: #fff;
    font-size: $base-font-size - 5;
}

.author-data-wrapper {
    display: flex;
    position: relative;
    cursor: pointer;
    margin-left: 50px;

    img {
        border-radius: 50%;
    }
}

.author-data {
    @include flex-column;
    justify-content: center;
    padding-left: 10px;
}

.author-title {
    color: #fff;
    font-weight: 700;
    font-size: $base-font-size - 4;
}

.author-subtitle {
    display: block;
    font-weight: 700;
    color: #9a9fbf;
    font-size: $base-font-size - 8;
}

.online-status-dot {
    @include online-status-dot;
}

.fa-angle-down {
    margin: 10px 0px 0px 15px;
    color: #fff;
}

/*dropdown smile*/
.dropdown,
.author-status {
    position: relative;
}

.dropdown-container {
    position: relative;
    display: inline-block;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    display: block;
    width: 380px;
    border-radius: 5px 5px 0 0;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    right: -153px;
    top: 44px;
    height: 300px;
    @include transition-vendors(opacity .3s linear);
}

.dropdown-header {
    @include flex-space-between;
    border-bottom: 1px solid #e6ecf5;

    &::after {
        @include after-arrow;
    }
}

.dropdown-content {
    height: 270px;
    overflow-y: hidden;
    direction: rtl;

    ul {
        direction: ltr;
    }

    &:hover {
        overflow-y: scroll;
        overflow-x: hidden;

        ul {
            margin-left: -6px;
        }
    }
}

.dropdown:hover .dropdown-container {
    @include visible-opacity;
    z-index: 20;
}

.dropdown-header-left-title {
    color: #9a9fbf;
    font-size: $base-font-size - 7;
}

.dropdown-header-right-titles {
    color: #515365;
    font-size: $base-font-size - 7;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
}

.dropdown-header-right-titles span:nth-child(2) {
    margin-left: 10px;

    &:hover {
        color: $orange-main-color;
    }
}

.dropdown-author-content {
    @include flex-space-between;
    padding: 20px;
    border-bottom: 1px solid #e6ecf5;
}

.dropdown-author-data-wrapper,
.smile-squares {
    @include flex-space-between;
}

.dropdown-author-img img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
}

.dropdown-author-data {
    @include flex-column;
    margin-left: 15px;
}

.dropdown-author-name,
.dropdown-author-name-inner {
    color: #515365;
    font-size: $base-font-size - 2;
    cursor: pointer;
    font-weight: 700;
    @include transition-vendors(color .3s ease);

    &:hover {
        color: $orange-main-color;
    }
}

.dropdown-author-text,
.dropdown-author-text-wrapper {
    font-size: $base-font-size - 4;
    color: #9a9fbf;
}

.blue-text {
    color: #00b7ff;
}

.blue-smile {
    background-color: #38a9ff;
    @include colored-smile;
}

.gray-smile {
    background-color: #9a9fbf;
    margin-left: 15px;
    @include colored-smile;
}

.blue-smile .fa-smile,
.gray-smile .fa-smile {
    @include flex-center;
    align-items: center;
    margin-top: 8px;
}

.dropdown-footer-blue {
    background-color: #38a9ff;
    @include dropdown-footer; 
}

.dropdown-footer-text {
    color: #fff;
    font-size: $base-font-size - 4;
    @include flex-center;
    font-weight: 700;
}

.ordinary-smile .fa-smile,
.chat-message-icon .fa-comment-alt,
.chat-message-heart .fa-heart {
    color: #9a9fbf;
    margin-left: 26px;
}

/*dropdown comments*/
.dropdown-users-img {
    @include flex-wrap;
    width: 36px;
    height: 36px;

    img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
}

.chat-time {
    color: #9a9fbf;
    font-size: $base-font-size - 5;
    margin-top: 5px;
}

.chat-message-icon-transparent .fa-comment-alt {
    opacity: 0.5;
    color: #9a9fbf;
    margin-left: 26px;
}

.dropdown-author-message {
    color: #515365;
    font-size: $base-font-size - 3;
    font-weight: 700;
}

.dropdown-footer-purple {
    background-color: #7c5ac2;
    @include dropdown-footer;
}

/*dropdown thunder*/
.orange-text {
    color: $orange-main-color;
    font-weight: 700;
    font-size: $base-font-size - 4;
}

.comment-photo {
    display: flex;
    margin-top: 10px;

    img {
        margin-right: 15px;
        border-radius: 10px 0px 0px 10px;
    }
}

.dropdown-footer-orange {
    background-color: $orange-main-color;
    @include dropdown-footer;

    &:hover {
        background-color: #dc310a;
    }
}

.dropdown-author-content-two-img {
    @include flex-space-between;
    padding: 20px;
}

/*dropdown author*/
.dropdown-author {
    position: relative;
    display: inline-block;

    &:hover .dropdown-content-author {
        @include visible-opacity;
        z-index: 20;
    }
}

.dropdown-author .dropdown-content-author {
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    width: 230px;
    border-radius: 5px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    right: -25px;
    top: 47px;
    @include transition-vendors(opacity .3s linear);
}

.dropdown-author .dropdown-content-author-wrapper::after {
    @include after-arrow;
    top: 29px;
    visibility: hidden;
    opacity: 0;
    @include transition-vendors(opacity .3s linear);
}

.dropdown-author:hover .dropdown-content-author-wrapper::after {
    @include visible-opacity;
}

.dropdown-title {
    display: flex;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    padding: 10px 10px 10px 25px;
}

.dropdown-content-author {
    overflow: auto;
    max-height: calc(100vh - 70px);

    .fa-bars,
    .fa-star,
    .fa-sign-out-alt {
        color: #9a9fbf;
        font-size: 20px;
        margin-right: 15px;
    }
}

.title-account,
.title-chat-settings,
.title-custom-status,
.title-olympus {
    font-size: $base-font-size - 7;
    text-transform: uppercase;
    color: #9a9fbf;
    font-weight: 700;
}

.account,
.chat-status,
.about-list {
    display: flex;
    padding: 10px 10px 10px 25px;
    cursor: pointer;
}

.account-text,
.about-list-title {
    font-size: $base-font-size - 4;
    color: #515365;
    font-weight: 700;

    &:hover {
        color: $orange-main-color;
    }
}

.status-title {
    font-size: $base-font-size - 4;
    color: #9a9fbf;
    font-weight: 700;
    margin-left: 15px;

    &:hover {
        color: #515365;
    }
}

.green-dot,
.yellow-dot,
.red-dot,
.gray-dot {
    width: 8px;
    height: 8px;
    background-color: #32e4cd;
    border-radius: 50%;
    margin: 5px;
}

.red-dot {
    background-color: #ff4f60;
}

.yellow-dot {
    background-color: #ffd52f;
}

.gray-dot {
    background-color: #cbdfee;
}

.form-group {
    display: flex;
    align-items: center;
    width: 80%;
    padding: 15px 0px 0px 15px;
}

.form-control {
    font-size: $base-font-size - 4;
    width: 100%;
}

button[type="button"] {
    background-color: #7c5ac2;
    color: #fff;
    width: 35px;
    border-radius: 0 5px 5px 0;
    height: 100%;
    text-align: center;
    border: 3px solid #7c5ac2;
}

/*media query*/
@media only screen and (max-width: 1350px) {
    .search-form {
        max-width: 300px;
    }
}

@media only screen and (max-width: 1150px) {
    .fa-angle-down,
    .author-title,
    .author-subtitle {
        display: none;
    }

    .dropdown-author .dropdown-content-author {
        right: -2px;
    }

    .dropdown-author .dropdown-content-author-wrapper::after {
        left: 66px;
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
	.author-data-wrapper img {
        margin-left: 20px;
    }

    .dropdown-author .dropdown-content-author-wrapper::after {
        left: 90px;
    }
}

@media only screen and (max-width: 992px) {
	.text-find-friends {
        padding-left: 47px;
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
        width: 200px;
    }
}

@media only screen and (max-width: 768px) {
    .text-find-friends,
    .search-form,
    .author-data-wrapper,
    .dropdown .dropdown-container {
        display: none;
    }

    .navbar-nav {
        margin: auto;
    }

    .nav-item {
        margin-right: 20px;
        margin-left: 20px;
    }

    .nav-item-search {
        display: block;
    }

    .search-button {
        height: 70px;
    }

    .search-button .fa-times {
        color: #fff;
        font-size: 20px;
    }

    .fa-search {
        color: #9a9fbf;
    }
}

@media only screen and (max-width: 500px) {
    .nav-item-search {
        margin-right: -45px;
    }

    .nav-item {
        margin-right: 0px;
        margin-left: 0px;
    }
}

@media only screen and (max-width: 360px) {
    .nav-item-search {
        margin-right: -30px;
    }
}
</style>
