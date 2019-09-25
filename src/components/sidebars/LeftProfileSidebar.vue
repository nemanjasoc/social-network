<template>
    <div>
        <!--big devices narrow sidebar-->
        <aside class="left-fixed-sidebar" v-bind:class="{ inactive: leftSidebarToggle }">
            <div class="logo" @click="checkWidth()">
                <img src="../../assets/login-images/logo.png" alt="logo">
            </div>
            <ul class="left-sidebar" v-bind:class="{ inactive: leftSidebarToggle }">
                <li v-for="tooltip in leftSidebarTooltips" :key="tooltip.id">
                    <a href="#">
                        <i :class="tooltip.icon" :id="tooltip.tooltip_id" @click="leftSidebarToggle = !leftSidebarToggle"></i>
                    </a>
                    <b-tooltip :target="tooltip.tooltip_id" placement="left">{{ tooltip.title }}</b-tooltip>
                </li>
            </ul>
        </aside>
        <!--big devices wider sidebar-->
        <aside class="left-fixed-sidebar-wider" v-bind:class="{ inactive: !leftSidebarToggle }">
            <div class="logo-wider">
                <img src="../../assets/login-images/logo.png" alt="logo">
                <span class="olympus-title">OLYMPUS</span>
            </div>
            <div class="left-sidebar-wider" v-bind:class="{ inactive: !leftSidebarToggle }"> 
                <div class="author-data-wrapper">
                    <div class="author-status">
                        <img src="../../assets/profile-images/author-page.jpg" alt="author">
                        <span class="online-status-dot"></span>
                    </div>
                    <div class="author-data">
                        <span class="author-title">James Spiegel</span>
                        <span class="author-subtitle">SPACE COWBOY</span>
                    </div>
                </div>
                <div class="menu-header">
                    <span class="menu-title">MAIN SECTIONS</span>
                </div>
                <ul> 
                    <li class="left-menu" v-for="li in leftSidebarWider" :key="li.id">
                        <a href="#">
                            <i :class="li.icon" @click="leftSidebarToggle = !leftSidebarToggle"></i>
                            <span class="left-menu-title">{{ li.title }}</span>
                        </a>
                    </li>      
                </ul>
                <div class="menu-header">
                    <span class="menu-title">YOUR ACCOUNT</span>
                </div>
                <ul class="account-block">
                    <li class="left-menu-account-block" v-for="li in leftSidebarAccountBlock" :key="li.id">
                        <a href="#">
                            <i :class="li.icon"></i>
                            <span class="left-menu-title-account-block">{{ li.title }}</span>
                        </a>
                    </li>
                </ul>
                <div class="menu-header">
                    <span class="menu-title">ABOUT OLYMPUS</span>
                </div> 
                <ul>
                    <li class="about-list" v-for="li in leftSidebarAboutBlock" :key="li.id">
                        <span class="about-list-title">{{ li.title }}</span>                      
                    </li>
                </ul>                         
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
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            leftSidebarToggle: false,
            leftSidebarTooltips: this.$store.state.leftProfileSidebar.leftSidebarTooltips,
            leftSidebarWider: this.$store.state.leftProfileSidebar.leftSidebarWider,
            leftSidebarAccountBlock: this.$store.state.leftProfileSidebar.leftSidebarAccountBlock,
            leftSidebarAboutBlock: this.$store.state.leftProfileSidebar.leftSidebarAboutBlock
        }
    },
    methods: {
        checkWidth() {
            if (window.innerWidth < 769) {
                this.leftSidebarToggle = !this.leftSidebarToggle;
            }
        }
    }
}
</script>

<style scoped>
.tooltip {
    left: 130px !important;
    top: 18px !important;
    width: 135px !important;
    height: 21px !important;
    border-radius: 6px !important;
    font-size: 9px !important;
    font-weight: 700 !important;
}

.logo-small {
    display: none;
}

.left-fixed-sidebar {
    position: fixed;
    z-index: 1031;
    width: 70px;
    height: 100%;
    left: 0;
    overflow: hidden;
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
    width: 76px;
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
    overflow-y: scroll;
    margin-left: -6px;
    direction: rtl;
}

.left-sidebar.inactive {
    left: -70px;
    transition-delay: 0s;
}

.left-sidebar li {
    direction: ltr;
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
    z-index: 1031;
    width: 250px;
    height: 100%;
    left: 0;
    overflow: hidden;
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
    width: 256px;
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
    overflow-y: scroll;
    margin-left: -6px;
    direction: rtl;
    
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

.author-data-wrapper {
    display: flex;
    cursor: pointer;
    justify-content: flex-end;
    padding: 20px 25px 0 25px;
    display: none;
}

.author-data-wrapper img {
    border-radius: 50%;
}

.author-status {
    position: absolute;
    justify-content: flex-start;
}

.author-data {
    display: flex;
    flex-direction: column;
    padding-left: 45px;
    text-align: left;
}

.author-title {
    color: #515365;
    font-weight: 700;
    font-size: 12px;
}

.author-subtitle {
    display: block;
    font-weight: 700;
    color: #9a9fbf;
    font-size: 8px;
}

.online-status-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #32e4cd;
    top: 0px;
    right: 27px;
    border-radius: 50%;
}

.menu-header {
    display: none;
    justify-content: flex-end;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    padding: 5px 0;
    margin-top: 20px;
}

.menu-title {
    color: #9a9fbf;
    margin-left: 25px;
    font-size: 9px;
    font-weight: 700;
}

.left-menu {
    display: flex;
    justify-content: flex-start;
    padding-left: 25px;
    direction: ltr;
}

.left-menu:last-child {
    margin-bottom: 20px;
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
.fa-poll-h,
.fa-sign-out-alt {
    position: relative;
    padding-top: 32px;
    font-size: 22px;
    color: #9a9fbf;
    -webkit-transition: color .3s linear;
    -moz-transition: color .3s linear;
    -o-transition: color .3s linear;
    transition: color .3s linear; 
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
    -webkit-transition: color .2s ease;
    -moz-transition: color .2s ease;
    -o-transition: color .2s ease;
    transition: color .2s ease;
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
    padding: 0 25px;
}

.profile-completion-title {
    display: flex;
    justify-content: space-between;
}

.completion-title {
    display: flex;
    font-size: 14px;
}

.completion-percent {
    display: flex;
    font-size: 14px;
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
    margin: 12px 0;
}

.filled-profile {
    position: absolute;
    height: 6px; 
    border-radius: 10px;
    top: 0;
    left: 0;
}

.progress-moved .filled-profile {
    width: 75%; 
    background-color: #ff5e3a;   
    animation: progressAnimation 2s;
}

@keyframes progressAnimation {
  0%   { width: 0%;}
  100% { width: 75%;}
}

.comletion-text {
    font-size: 14px;
    text-align: left;
}

.your-profile-text {
    color: #ff5e3a;
}

.account-block {
    display: none;
}

.left-menu-account-block {
    display: flex;
    justify-content: flex-start;
    padding-left: 25px;
    direction: ltr;
}

.left-menu-account-block:first-child {
    margin-left: 5px;
}

.left-menu-account-block:last-child {
    margin-bottom: 20px;
}

.left-menu-title-account-block {
    padding-left: 20px;
    padding-top: 32px;
    color: #515365;
    font-weight: 700;
    font-size: 13px;
    -webkit-transition: color .2s ease;
    -moz-transition: color .2s ease;
    -o-transition: color .2s ease;
    transition: color .2s ease;
    font-weight: 700;
}

.left-menu-title-account-block:hover {
    color: #ff5e3a;
}

.about-list {
    display: none;
    justify-content: flex-end;
    padding: 10px 10px 10px 25px;
    cursor: pointer;
}

.about-list-title {
    font-size: 12px;
    color: #515365;
    font-weight: 700;
    -webkit-transition: color .2s ease;
    -moz-transition: color .2s ease;
    -o-transition: color .2s ease;
    transition: color .2s ease;
}

.about-list-title:hover {
    color: #ff5e3a;
}

.about-list:last-child {
    margin-bottom: 20px;
}

/*media query*/
@media only screen and (max-width: 768px) {
    .left-sidebar {
        display: none;
    }

    .olympus-title {
        font-size: 10px;
    }

    .logo {
        cursor: pointer;
    }

    .author-data-wrapper {
        display: flex;
    }

    .profile-completion-container {
        display: none;
    }

    .menu-header {
        display: flex;
    }

    .account-block {
        display: block;
    }

    .about-list {
        display: flex;
    }
}
</style>

