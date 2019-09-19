<template>
    <div>
        <app-left-profile-sidebar></app-left-profile-sidebar>
        <app-header></app-header>

        <section class="main-container-wrapper">
            <div class="main-container">  
                <div class="image-block">
                    <div class="main-image">
                        <img src="../assets/profile-images/top-header1.jpg" alt="top-header1">
                    </div>
                    <div class="user-profile-sections">                                
                        <ul class="profile-menu-left">
                            <li>
                                <a href="#" class="active">Timeline</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Friends</a>
                            </li>
                        </ul>                                   
                        <ul class="profile-menu-right">
                            <li>
                                <a href="#">Photos</a>
                            </li>
                            <li>
                                <a href="#">Videos</a>
                            </li>
                            <li>
                                <div class="three-dots">
                                    <div class="dropdown-three-dots">
                                        <div class="dropbtn"><i class="fas fa-ellipsis-h"></i></div>
                                        <div class="dropdown-content">
                                            <ul>
                                                <li>
                                                    <a href="#">Report Profile</a>
                                                </li>
                                                <li>
                                                    <a href="#">Block Profile</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="three-rounded-image-buttons">
                            <div class="smile-button">
                                <i class="far fa-smile"></i>
                            </div>
                            <div class="chat-button">
                                <i class="far fa-comments"></i>
                            </div>
                            <div class="settings-button">
                                <div class="dropdown-settings-button">
                                    <div class="dropbtn"><i class="fas fa-sliders-h"></i></div>
                                    <div class="dropdown-content">
                                        <ul>
                                            <li>
                                                <a href="#">Update Profile Photo</a>
                                            </li>
                                            <li>
                                                <a href="#">Update Header Photo</a>
                                            </li>
                                            <li>
                                                <a href="#">Account Settings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                       
                        <div class="author-main-content">
                            <div class="author-main-image">
                                <img src="../assets/profile-images/author-main1.jpg" alt="author-main1">
                            </div>
                            <div class="autor-data">
                                <div class="author-name">James Spiegel</div>
                                <div class="country">San Francisco, CA</div>
                            </div>
                        </div>                       
                    </div>
                </div>
                
                <div class="main-content">
                    <app-left-blocks></app-left-blocks>
                    <app-center-blocks></app-center-blocks>
                    <app-right-blocks></app-right-blocks>

                    <div class="back-to-top" @click="scrollToTop()">
                        <i class="fas fa-arrow-up"></i>
                    </div>
                </div>
            </div>
        </section>

        <app-right-profile-sidebar></app-right-profile-sidebar>
    </div>
</template>

<script>
import LeftProfileSidebar from '../components/sidebars/LeftProfileSidebar.vue';
import RightProfileSidebar from '../components/sidebars/RightProfileSidebar.vue';
import Header from '../components/header/Header.vue';
import LeftBlocks from '../components/profile/LeftBlocks.vue';
import CenterBlocks from '../components/profile/CenterBlocks.vue';
import RightBlocks from '../components/profile/RightBlocks.vue';

export default {
    methods: { 
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    components: {
        appLeftProfileSidebar: LeftProfileSidebar,
        appRightProfileSidebar: RightProfileSidebar,
        appHeader: Header,
        appLeftBlocks: LeftBlocks,
        appCenterBlocks: CenterBlocks,
        appRightBlocks: RightBlocks
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}

li {
    list-style-type: none;
}

ul, li {
    margin: 0;
    padding: 0;
}

a:link {
    text-decoration: none;
}

.main-container-wrapper {
    width: 100%;
    height: calc(100% - 70px);
    background-color: #edf2f6;
    position: absolute;
}

.main-container {
    width: 86%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
}

.image-block {
    position: relative;
    border: 1px solid #e6ecf5;
    margin-bottom: 15px;
}

.main-image {
    padding-top: 110px;
}

.main-image img {
    display: block;
    width: 100%;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    height: auto;
}

.user-profile-sections {
    position: relative;
    padding: 38px 0;
    border: 1px solid #e6ecf5;;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
}

.profile-menu-left,
.profile-menu-right {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.user-profile-sections ul li {
    padding: 0 35px;
}

.profile-menu-left li a,
.profile-menu-right li a {
    font-size: 14px;
    font-weight: 700;
    color: #9a9fbf;
}

.profile-menu-left li a:hover,
.profile-menu-right li a:hover {
    color: #515365;
}

.profile-menu-left li a.active {
    color: #515365;
}

.dropdown-three-dots {
    position: relative;
    display: inline-block;
    margin-right: 35px;
}

.dropdown-content {
    visibility: hidden;
    opacity: 0;
    width: 200px;
    text-align: left;
    padding: 15px 20px;
    border-radius: 4px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    z-index: 5;
    right: -25px;
    margin-top: 10px;
    -webkit-transition: opacity .3s ease;
    -moz-transition: opacity .3s ease;
    -o-transition: opacity .3s ease;
    transition: opacity .3s ease;
}

.dropdown-content::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 168px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

.dropdown-content li a {
    display: block;
    font-weight: 700;
    color: #9a9fbf;
    font-size: 12px;
    padding: 7px 0;
}

.dropdown-content li a:hover {
    color: #515365;
}

.dropdown-three-dots:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
}

.dropbtn .fa-ellipsis-h {
    cursor: pointer;
    color: #9a9fbf;
}

.three-rounded-image-buttons {
    position: absolute;
    display: flex;
    justify-content: space-around;
    right: 20px;
    top: -31px;
}

.smile-button,
.chat-button,
.settings-button {
    margin-right: 20px;
    font-size: 20px;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.smile-button {
    background-color: #38a9ff;
}

.chat-button {
    background-color: #7c5ac2;
}

.settings-button {
    background-color: #ff5e3a;
}

.dropdown-settings-button {
    position: relative;
    display: inline-block;
}

.dropdown-settings-button .dropdown-content {
    visibility: hidden;
    opacity: 0;
    width: 230px;
    border-radius: 4px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    z-index: 5;
    bottom: 190%;
    padding: 0;
    -webkit-transition: opacity .3s ease;
    -moz-transition: opacity .3s ease;
    -o-transition: opacity .3s ease;
    transition: opacity .3s ease;
}

.dropdown-settings-button .dropdown-content li a {
    display: block;
    font-weight: 700;
    color: #515365;
    font-size: 12px;
    padding: 7px 0;
}

.settings-button:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
}

.dropdown-settings-button .dropdown-content li a:hover {
    color: #ff5e3a;
}

.dropdown-settings-button .dropdown-content::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 215px;
    margin-left: -30px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
}

.author-main-content {
    position: absolute;
    left: 42%;
    bottom: 10px;
    align-items: center;
    text-align: center;
}

.author-main-image img {
    border-radius: 50%;
    border: 6px solid #fff;
    background-color: #fff;
}

.autor-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.author-name {
    color: #515365;
    font-weight: 700;
    font-size: 23px;
    cursor: pointer;
}

.author-name:hover {
    color: #ff5e3a;
}

.country {
    font-size: 12px;
    color: #9a9fbf;
}

.main-content {
    display: grid;
    grid-template-columns: 22% 50% 22%;
    grid-column-gap: 3%;
}

.back-to-top {
    width: 50px;
    height: 50px;
    background-color: #ff5e3a;
    border-radius: 50%;
    position: fixed;
    box-shadow: 0 0 10px 0 rgba(63, 66, 87, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 22px;
    bottom: 10px;
    right: 85px;
    cursor: pointer;
    z-index: 20;
    transition: all .3s ease;
}

/*media query*/
@media (max-width: 1399px) {
    .main-container {
        width: 80%;
    }
}

@media (max-width: 1199px) {
    .author-name {
        font-size: 19px;
    }

    .country {
        font-size: 11px;
    }

    .user-profile-sections ul li {
        padding: 0 20px;
    }

    .three-dots {
        margin-right: -25px;
    }

    .main-content {
        display: grid;
        grid-template-columns: 48% 48%;
        grid-column-gap: 4%;
        grid-row-gap: 15px;
        width: 100%;
    }

    .left-block {
        grid-area: 2 / 1 / 3 / 2;
    }

    .center-block {
        grid-area: 1 / 1 / 2 / 3;
    }
    
    .right-block {
        grid-area: 2 / 2 / 3 / 3;
    }

    .main-container {
        width: 75%;
    }
}

@media (max-width: 992px) {
    .user-profile-sections ul li {
        padding: 0 14px;
    }

    .author-name {
        font-size: 18px;
    }

    .three-rounded-image-buttons {
        right: 0px;
    }

    .smile-button,
    .chat-button,
    .settings-button {
        margin-right: 18px;
    }
}

@media (max-width: 800px) {
    .main-container {
        width: 72%;
    }

    .three-rounded-image-buttons {
        display: flex;
        justify-content: center;
        position: relative;
        top: -115px;
    }

    .user-profile-sections {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 225px;
    }
}

@media (max-width: 768px) {
    .main-container {
        width: 80%;
    }
}

@media (max-width: 539px) {
    .main-container {
        width: 90%;
    }

    .main-content {
        display: grid;
        grid-template-columns: 100%;
        grid-row-gap: 15px;
    }

    .left-block {
        grid-area: 2 / 1 / 3 / 2;
    }

    .center-block {
        grid-area: 1 / 1 / 2 / 2;
    }
    
    .right-block {
        grid-area: 3 / 1 / 4 / 2;
    }
}

@media (max-width: 480px) {
    .author-main-content {
        left: 35%;
    }
}

@media (max-width: 350px) {
    .author-main-content {
        left: 26%;
    }
}
</style>
