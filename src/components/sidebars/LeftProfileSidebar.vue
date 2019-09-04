<template>
    <div>
        <div class="left-fixed-sidebar" v-bind:class="{ inactive: leftSidebarToggle }">
            <div class="logo">
                <img src="../../assets/login-images/logo.png" alt="logo">
            </div>
            <ul class="left-sidebar" v-bind:class="{ inactive: leftSidebarToggle }">
                <li>
                    <a href="#">
                        <i class="fas fa-bars" @click="leftSidebarToggle = !leftSidebarToggle">
                            <span class="tooltiptext-menu">OPEN MENU</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="far fa-newspaper">
                            <span class="tooltiptext-newsfeed">NEWSFEED</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="far fa-star">
                            <span class="tooltiptext-fav-page">FAV PAGE</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-user-friends">
                            <span class="tooltiptext-friend-groups">FRIEND GROUPS</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-headphones">
                            <span class="tooltiptext-music-and-playlists">MUSIC&PLAYLIST</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-cloud-sun">
                            <span class="tooltiptext-weather-app">WEATHER APP</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="far fa-calendar-alt">
                            <span class="tooltiptext-calendar-and-events">CALENDAR AND EVENTS</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-certificate">
                            <span class="tooltiptext-community-badges">COMMUNITY BADGES</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-birthday-cake">
                            <span class="tooltiptext-friends-birthday">FRIENDS BIRTHDAYS</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-industry">
                            <span class="tooltiptext-account-stats">ACCOUNT STATS</span>
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-poll-h">
                            <span class="tooltiptext-manage-widgets">MANAGE WIDGETS</span>
                        </i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="left-fixed-sidebar-wider" v-bind:class="{ inactive: !leftSidebarToggle }">
            <div class="logo-wider">
                <img src="../../assets/login-images/logo.png" alt="logo">
                <span class="olympus-title">OLYMPUS</span>
            </div>
            <ul class="left-sidebar-wider" v-bind:class="{ inactive: !leftSidebarToggle }">  
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-times" @click="leftSidebarToggle = !leftSidebarToggle"></i>
                        <span class="left-menu-title">Collapse menu</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="far fa-newspaper"></i>
                        <span class="left-menu-title">Newsfeed</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="far fa-star"></i>
                        <span class="left-menu-title">Fav Pages Feed</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-user-friends"></i>
                        <span class="left-menu-title">Friend Groups</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-headphones"></i>
                        <span class="left-menu-title">Music & Playlist</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-cloud-sun"></i>
                        <span class="left-menu-title">Weather App</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="far fa-calendar-alt"></i>
                        <span class="left-menu-title">Calendar and Events</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-certificate"></i>
                        <span class="left-menu-title">Community Badges</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-birthday-cake"></i>
                        <span class="left-menu-title">Friends Birthdays</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-industry"></i>
                        <span class="left-menu-title">Account Stats</span>
                    </a>
                </li>
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-poll-h"></i>
                        <span class="left-menu-title">Manage Widgets</span>
                    </a>
                </li>
                <div class="profile-completion-container">
                    <div class="profile-completion-title">
                        <span class="completion-title">Profile Completion</span>
                        <span class="completion-percent">76%</span>
                    </div>
                    <div class="completion-line">
                        <div class="max-range-line progress-moved">
                            <span class="filled-profile"></span>
                        </div>
                    </div>
                    <div class="comletion-text">Complete
                        <span class="your-profile-text">your profile</span>
                        so people can know more about you!
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            leftSidebarToggle: false
        }
    }
}
</script>

<style scoped>
.left-fixed-sidebar {
    position: fixed;
    z-index: 22;
    width: 70px;
    height: 100%;
    left: 0;
    transition: left ease-out .3s;
    transition-delay: .6s;
}

.left-fixed-sidebar.inactive {
    left: -70px;
    transition-delay: 0s;
}

.left-sidebar {
    position: fixed;
    z-index: 22;
    width: 70px;
    height: calc(100% - 70px);
    left: 0;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    transition: left ease-out .3s;
    transition-delay: .6s;
    cursor: pointer;
    color: gray;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.left-sidebar.inactive {
    left: -70px;
    transition-delay: 0s;
}

.logo {
    height: 70px;
    width: 70px;
    background-color: #ff5e3a;
    align-items: center;
    display: flex;
    justify-content: center;
}

.left-fixed-sidebar-wider {
    position: fixed;
    z-index: 22;
    width: 250px;
    height: 100%;
    left: 0;
    transition: left ease-out .6s;
    transition-delay: .3s;
}

.left-fixed-sidebar-wider.inactive {
    left: -250px;
    transition-delay: 0s;
}

.left-sidebar-wider {
    position: fixed;
    z-index: 22;
    width: 250px;
    height: calc(100% - 70px);
    left: 0;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    transition: left ease-out .6s;
    transition-delay: .3s;
    cursor: pointer;
    color: gray;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.left-sidebar-wider.inactive {
    left: -250px;
    transition-delay: 0s;
}

.logo-wider {
    height: 70px;
    width: 250px;
    background-color: #ff5e3a;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding-left: 18px;
}

.olympus-title {
    padding-left: 15px;
    color: #fff;
    font-weight: 800;
    font-size: 13px;
}

.fa-bars .tooltiptext-menu,
.fa-newspaper .tooltiptext-newsfeed,
.fa-star .tooltiptext-fav-page,
.fa-user-friends .tooltiptext-friend-groups,
.fa-headphones .tooltiptext-music-and-playlists,
.fa-cloud-sun .tooltiptext-weather-app,
.fa-calendar-alt .tooltiptext-calendar-and-events,
.fa-certificate .tooltiptext-community-badges,
.fa-birthday-cake .tooltiptext-friends-birthday,
.fa-industry .tooltiptext-account-stats,
.fa-poll-h .tooltiptext-manage-widgets {
    visibility: hidden;
    width: 80px;
    height: 25px;
    background-color: #3f4257;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 28px;
    left: 78%;
    font-size: 9px;
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: 0;
}

.fa-bars .tooltiptext-menu::after,
.fa-newspaper .tooltiptext-newsfeed::after,
.fa-star .tooltiptext-fav-page::after,
.fa-user-friends .tooltiptext-friend-groups::after,
.fa-headphones .tooltiptext-music-and-playlists::after,
.fa-cloud-sun .tooltiptext-weather-app::after,
.fa-calendar-alt .tooltiptext-calendar-and-events::after,
.fa-certificate .tooltiptext-community-badges::after,
.fa-birthday-cake .tooltiptext-friends-birthday::after,
.fa-industry .tooltiptext-account-stats::after,
.fa-poll-h .tooltiptext-manage-widgets::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #3f4257 transparent transparent;
}

.fa-bars:hover .tooltiptext-menu,
.fa-newspaper:hover .tooltiptext-newsfeed,
.fa-star:hover .tooltiptext-fav-page,
.fa-user-friends:hover .tooltiptext-friend-groups,
.fa-headphones:hover .tooltiptext-music-and-playlists,
.fa-cloud-sun:hover .tooltiptext-weather-app,
.fa-calendar-alt:hover .tooltiptext-calendar-and-events,
.fa-certificate:hover .tooltiptext-community-badges,
.fa-birthday-cake:hover .tooltiptext-friends-birthday,
.fa-industry:hover .tooltiptext-account-stats,
.fa-poll-h:hover .tooltiptext-manage-widgets {
    visibility: visible;
    opacity: 1;
    transition: ease all .8s;
}

.fa-newspaper .tooltiptext-newsfeed {
    top: 88px;
}

.fa-star .tooltiptext-fav-page {
    top: 146px;
}

.fa-user-friends .tooltiptext-friend-groups {
    top: 202px;
    width: 100px;
}

.fa-headphones .tooltiptext-music-and-playlists {
    top: 262px;
    width: 115px;
}

.fa-cloud-sun .tooltiptext-weather-app {
    top: 322px;
    width: 90px;
}

.fa-calendar-alt .tooltiptext-calendar-and-events {
    top: 379px;
    width: 130px;
}

.fa-certificate .tooltiptext-community-badges {
    top: 437px;
    width: 130px;
}

.fa-birthday-cake .tooltiptext-friends-birthday {
    top: 494px;
    width: 127px;
}

.fa-industry .tooltiptext-account-stats {
    top: 551px;
    width: 106px;
}

.fa-poll-h .tooltiptext-manage-widgets {
    top: 610px;
    width: 113px;
}

.left-menu {
    display: flex;
    justify-content: flex-start;
    padding-left: 25px;
}

.fa-times,
.fa-bars,
.fa-newspaper,
.fa-star,
.fa-user-friends,
.fa-headphones,
.fa-cloud-sun,
.fa-calendar-alt,
.fa-certificate,
.fa-birthday-cake,
.fa-industry,
.fa-poll-h {
    padding-top: 32px;
    font-size: 22px;
    color: #9a9fbf;
    transition: color .6s; 
}

.fa-bars:hover,
.fa-newspaper:hover,
.fa-star:hover,
.fa-user-friends:hover,
.fa-headphones:hover,
.fa-cloud-sun:hover,
.fa-calendar-alt:hover,
.fa-certificate:hover,
.fa-birthday-cake:hover,
.fa-industry:hover,
.fa-poll-h:hover {
    color: #ff5e3a;
}

.left-menu-title {
    padding-left: 20px;
    padding-top: 32px;
    color: #9a9fbf;
    font-weight: 700;
    font-size: 13px;
    transition: all .3s ease;
    font-weight: 700;
}

.left-menu:hover .fa-times,
.left-menu:hover .fa-newspaper,
.left-menu:hover .fa-star,
.left-menu:hover .fa-user-friends,
.left-menu:hover .fa-headphones,
.left-menu:hover .fa-cloud-sun,
.left-menu:hover .fa-calendar-alt,
.left-menu:hover .fa-certificate,
.left-menu:hover .fa-birthday-cake,
.left-menu:hover .fa-industry,
.left-menu:hover .fa-poll-h {
    color: #ff5e3a;
}

.left-menu:hover .left-menu-title {
    color: #555;
}

ul {
    list-style-type: none;
}

ul, li {
    margin: 0;
    padding: 0;
}

a:link {
    text-decoration: none;
}

.profile-completion-container {
    display: flex;
    height: 180px;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.profile-completion-title {
    display: flex;
    justify-content: space-between;
}

.completion-title {
    display: flex;
    font-size: 14px;
    margin-left: 25px;
}

.completion-percent {
    display: flex;
    font-size: 14px;
    margin-right: 25px;
}

.completion-line {
    display: flex;
    justify-content: center;
}

.max-range-line {
    width: 100%;
    height: 6px;
    border-radius: 10px;
    background-color: #ebecf2;
    position: relative;
    margin: 12px 25px;
}

.filled-profile {
    position: absolute;
    height: 6px; 
    border-radius: 10px;
    top: 0;
    left: 0;
    transition: 0.4s linear;  
    transition-property: width; 
}

.progress-moved .filled-profile {
    width: 75%; 
    background-color: #ff5e3a;   
    animation: progressAnimation 6s;
}

@keyframes progressAnimation {
  0%   { width: 0%;}
  100% { width: 75%;}
}

.comletion-text {
    font-size: 14px;
    margin: 0 25px;
    text-align: justify;
}

.your-profile-text {
    color: #ff5e3a;
}

/*media query*/
@media only screen and (max-width: 1350px) {
 
}

@media only screen and (max-width: 1150px) {

}

@media only screen and (max-width: 1080px) {

}

@media only screen and (max-width: 1024px) {

}

@media only screen and (max-width: 992px) {

}

@media only screen and (max-width: 880px) {

}

@media only screen and (max-width: 769px) {

}

@media only screen and (max-width: 768px) {
    .left-sidebar {
        display: none;
    }

    .left-fixed-sidebar-wider {
        display: none;
    }
}
</style>

