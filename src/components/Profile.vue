<template>
    <div>
        <div class="left-fixed-sidebar" v-bind:class="{ inactive: leftSidebarToggle }">
            <div class="logo">
                <img src="../assets/logo.png">
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
                <img src="../assets/logo.png">
                <span class="olympus-title">OLYMPUS</span>
            </div>
            <ul class="left-sidebar-wider" v-bind:class="{ inactive: !leftSidebarToggle }">  
                <li class="left-menu">
                    <a href="#">
                        <i class="fas fa-bars" @click="leftSidebarToggle = !leftSidebarToggle"></i>
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
            </ul>
        </div>

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
                                <img src="../assets/profile-images/author-page.jpg">
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

        <div class="main-content"></div>

        <ul class="right-sidebar" v-bind:class="{ inactive: rightSidebarToggle }">
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar67-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar62-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar68-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar69-sm.jpg">
                <span class="user-status-away"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar70-sm.jpg">
                <span class="user-status-disconected"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar64-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar71-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar72-sm.jpg">
                <span class="user-status-away"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar63-sm.jpg">
                <span class="user-status-invisible"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar72-sm.jpg">
                <span class="user-status-away"></span>                
            </li>
            <li class="chat-user">              
                <img src="../assets/profile-images/avatar71-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li>
                <div class="right-sidebar-bar">
                    <i class="fas fa-bars" @click="rightSidebarToggle = !rightSidebarToggle"></i>
                </div>
            </li>
            <li>
                <div class="social-network-chat-sidebar" v-bind:class="{ inactive: rightSidebarToggle }">
                    <i class="far fa-comments"></i>
                </div>               
            </li>
        </ul>

        <ul class="right-sidebar-wider" v-bind:class="{ inactive: !rightSidebarToggle }">
            <li class="chat-user-wider">
                <div class="user-thumb">              
                    <img src="../assets/profile-images/avatar67-sm.jpg">
                    <span class="user-status-online"></span>
                </div> 
                <div class="user-status">
                    <a href="#" class="user-name">Carol Summers</a>
                    <span class="status">ONLINE</span>
                </div>               
            </li>
            <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../assets/profile-images/avatar62-sm.jpg">
                    <span class="user-status-online"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Mathilda Brinker</a>
                    <span class="status">AT WORK!</span>
                </div>                 
            </li>
            <li class="chat-user-wider">
                <div class="user-thumb">              
                    <img src="../assets/profile-images/avatar68-sm.jpg">
                    <span class="user-status-online"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Carol Summers</a>
                    <span class="status">ONLINE</span>
                </div>                  
            </li>
            <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../assets/profile-images/avatar69-sm.jpg">
                    <span class="user-status-away"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Michael Maximoff</a>
                    <span class="status">AWAY</span>
                </div>                  
            </li>
             <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../assets/profile-images/avatar70-sm.jpg">
                    <span class="user-status-disconected"></span>
                 </div>
                <div class="user-status">
                    <a href="#" class="user-name">Rachel Howlett</a>
                    <span class="status">OFFLINE</span>
                </div>                  
            </li>
            <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../assets/profile-images/avatar64-sm.jpg">
                    <span class="user-status-online"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Sarah Hetfield</a>
                    <span class="status">ONLINE</span>
                </div>                 
            </li>
            <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../assets/profile-images/avatar71-sm.jpg">
                    <span class="user-status-online"></span>
                </div>
                <div class="user-status-wider">
                    <a href="#" class="user-name">Rachel Howlett</a>
                    <span class="status">OFFLINE</span>
                </div> 
            </li>
            <li class="chat-user-wider"> 
                <div class="user-thumb"> 
                    <img src="../assets/profile-images/avatar72-sm.jpg">
                    <span class="user-status-away"></span>  
                </div>
                <div class="user-status-wider">
                    <a href="#" class="user-name">Bruce Peterson</a>
                    <span class="status">ONLINE</span>
                </div> 
            </li>
            <li class="chat-user-wider">   
                <div class="user-thumb"> 
                    <img src="../assets/profile-images/avatar63-sm.jpg">
                    <span class="user-status-invisible"></span> 
                </div>
                <div class="user-status-wider">
                    <a href="#" class="user-name">Chris Greyson</a>
                    <span class="status">AWAY</span>
                </div> 
            </li>
            <li class="chat-user-wider">     
                <div class="user-thumb"> 
                    <img src="../assets/profile-images/avatar72-sm.jpg">
                    <span class="user-status-away"></span> 
                </div>
                <div class="user-status-wider">
                    <a href="#" class="user-name">Nicholas Grisom</a>
                    <span class="status">INVISIBLE</span>
                </div> 
            </li>
            <li class="chat-user-wider">    
                <div class="user-thumb"> 
                    <img src="../assets/profile-images/avatar71-sm.jpg">
                    <span class="user-status-online"></span> 
                </div>
                <div class="user-status-wider">
                    <a href="#" class="user-name">Chris Greyson</a>
                    <span class="status">AWAY</span>
                </div> 
            </li>
            <!--li>
                <a href="#">
                    <div class="social-network-chat-sidebar-wide" v-bind:class="{ inactive: !rightSidebarToggle }">
                        <i class="far fa-comments"></i>
                    </div>
                </a>
            </li-->
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            leftSidebarToggle: false,
            rightSidebarToggle: false
        }
    }
}
</script>

<style>
.social-network-chat-sidebar {
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
    cursor: pointer;
    margin-top: 25px;
}

.social-network-chat-sidebar-wide {
    color: #fff;
    width: 250px;
    height: 70px;
    background-color: #7c5ac2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    position: fixed;
    z-index: 22;
    right: 0;
    cursor: pointer;
    margin-top: 25px;
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

.main-content {
    background-color: #edf2f6;
    display: flex;
    position: absolute;
    width: 100%;
    height: calc(100% - 70px);
}

.nav-item-search {
    display: none;
}

/* left sidebar */

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

.left-menu {
    display: flex;
    justify-content: flex-start;
    padding-left: 25px;
}

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
    padding-top: 35px;
    color: #9a9fbf;
    font-weight: 700;
    font-size: 13px;
    transition: all .3s ease;
    font-weight: 700;
}

.left-menu:hover .fa-bars,
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

/* right sidebar */

.right-sidebar {
    position: fixed;
    z-index: 22;
    width: 70px;
    height: calc(100% - 70px);
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    transition: right ease-out .3s;
    transition-delay: .6s;
    cursor: pointer;
    color: gray;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.right-sidebar.inactive {
    right: -70px;
    transition-delay: 0s;
}

.right-sidebar-wider {
    position: fixed;
    z-index: 22;
    width: 250px;
    height: calc(100% - 70px);
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    transition: right ease-out .6s;
    transition-delay: .3s;
    cursor: pointer;
    color: gray;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.right-sidebar-wider.inactive {
    right: -250px;
    transition-delay: 0s;
}

.chat-user {
    padding-top: 32px;
    position: relative;
}

.chat-user img {
    border-radius: 50%;
}

.chat-user-wider {
    padding-top: 32px;
    position: relative;
    display: flex;
    padding-left: 18px;
}

.chat-user-wider img {
    border-radius: 50%;
}

.user-status-online,
.user-status-away,
.user-status-disconected,
.user-status-invisible {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #32e4cd;
    top: 30px;
    left: 19px;
    border-radius: 50%;
}

.user-status-away {
    background-color: #ffd52f;
}

.user-status-disconected {
    background-color: #ff4f60;
}

.user-status-invisible {
    background-color: #cbdfee;
}

.user-status {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.user-name {
    color: #515365;
    font-size: 12px;
    font-weight: 700;
    padding-left: 10px;
}

.user-name:hover {
    color: #ff4f60;
}

.status {
    font-size: 8px;
    font-weight: 700;
    display: flex;
    padding-left: 10px;
}

.right-sidebar-bar {
    padding-top: 50px;
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

    .left-fixed-sidebar-wider {
        display: none;
    }

    .left-sidebar {
        display: none;
    }
}
</style>
