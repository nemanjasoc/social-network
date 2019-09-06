<template>
    <div>
        <app-left-profile-sidebar></app-left-profile-sidebar>
        <app-header></app-header>
        
        <!--div class="main-content">
            <div class="main-image">
                <img src="../assets/profile-images/top-header1.jpg">
            </div>
            <div class="user-profile-sections">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                            <ul class="profile-menu">
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
                        </div>
                    </div>
               
                    <div class="author-main-content">
                        <div class="author-main-image">
                            <img src="../assets/profile-images/author-main1.jpg">
                        </div>
                        <div class="autor-data">
                            <div class="author-name">James Spiegel</div>
                            <div class="country">San Francisco, CA</div>
                        </div>
                    </div>
                      
                    <div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                        <ul class="profile-menu">
                            <li>
                                <a href="#">Photos</a>
                            </li>
                            <li>
                                <a href="#">Videos</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div-->

        <div class="main-container">
            <div class="container">
                <div class="row">
                    <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="image-block">
                            <div class="main-image">
                                <img src="../assets/profile-images/top-header1.jpg">
                            </div>
                            <div class="user-profile-sections">
                                <div class="row">
                                    <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                                        <ul class="profile-menu">
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
                                    </div>
                                    <div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                        <ul class="profile-menu">
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
                                                            <a href="#">Report Profile</a>
                                                            <a href="#">Block Profile</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
                                                <a href="#">Update Profile Photo</a>
                                                <a href="#">Update Header Photo</a>
                                                <a href="#">Account Settings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="author-main-content">
                                <div class="author-main-image">
                                    <img src="../assets/profile-images/author-main1.jpg">
                                </div>
                                <div class="autor-data">
                                    <div class="author-name">James Spiegel</div>
                                    <div class="country">San Francisco, CA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <aside class="left-side-first-block">
                        <h6 class="title-badges">James's Badges</h6>
                        <div class="badges-block-content">
                            <ul class="badges">
                                <li>
                                    <img src="../assets/profile-images/badge1.png">
                                    <div class="orange-badge">2</div>
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge4.png">
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge3.png">
                                    <div class="blue-badge">4</div>
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge6.png">
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge11.png">
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge8.png">
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge10.png">
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge13.png">
                                    <div class="green-badge">2</div>
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge7.png">
                                </li>
                                <li>
                                    <img src="../assets/profile-images/badge12.png">
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <div class="center-first-block">

                    </div>
                    <aside class="right-side-first-block">
                        
                    </aside>
                </div>
            </div>
        </div>
        
        <app-right-profile-sidebar></app-right-profile-sidebar>
    </div>
</template>

<script>
import LeftProfileSidebar from '../components/sidebars/LeftProfileSidebar.vue';
import RightProfileSidebar from '../components/sidebars/RightProfileSidebar.vue';
import Header from '../components/header/Header.vue';

export default {
    components: {
        appLeftProfileSidebar: LeftProfileSidebar,
        appRightProfileSidebar: RightProfileSidebar,
        appHeader: Header
    }
}
</script>

<style scoped>
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

.main-container {
    width: 100%;
    height: calc(100% - 70px);
    background-color: #edf2f6;
    position: absolute;
}

.image-block {
    position: relative;
    border: 1px solid #e6ecf5;
    margin-bottom: 15px;
}

.main-image {
    padding-top: 50px;
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
}

.profile-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.profile-menu li a {
    font-size: 14px;
    font-weight: 700;
    color: #9a9fbf;
}

.profile-menu li a:hover {
    color: #515365;
}

.profile-menu li a.active {
    color: #515365;
}

.dropdown-three-dots {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
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

.dropdown-content a {
    display: block;
    font-weight: 700;
    color: #515365;
    font-size: 12px;
    padding: 7px 0;
}

.dropdown-three-dots:hover .dropdown-content {
    display: block;
}

.dropbtn .fa-ellipsis-h {
    cursor: pointer;
    color: #9a9fbf;
}

.three-rounded-image-buttons {
    position: absolute;
    display: flex;
    justify-content: space-around;
    right: 38px;
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
    display: none;
    width: 180px;
    text-align: left;
    padding: 15px 20px;
    border-radius: 4px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    z-index: 5;
    right: -15px;
    bottom: 190%;
}

.dropdown-settings-button .dropdown-content a {
    display: block;
    font-weight: 700;
    color: #515365;
    font-size: 12px;
    padding: 7px 0;
}

.dropdown-settings-button:hover .dropdown-content {
    display: block;
}

.dropdown-settings-button .dropdown-content::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 155px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
}

.author-main-content {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    left: 45%;
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
    grid-template-columns: 24% 50% 24%;
    grid-gap: 15px;
    background: #fff;
}

.left-side-first-block {
    border-radius: 5px;
    border: 1px solid #888;
    padding: 20px;
    background: #fff;
}

.center-first-block {
    border-radius: 5px;
    border: 1px solid #888;
    padding: 20px;
    background: #fff;
}

.right-side-first-block {
    border-radius: 5px;
    border: 1px solid #888;
    padding: 20px;
    background: #fff;
}

.title-badges {
    color: #515365;
    font-weight: 700;
}

.badges-block-content {

}

.badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
}

.badges li {
    margin-right: 10px;
    margin-bottom: 20px;
}
   
.orange-badge {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #ff5e3a;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    top: -2px;
    left: 28px;
}

.blue-badge {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #38a9ff;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    top: -2px;
    right: 70px;
}

.green-badge {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #08ddc1;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    top: 57px;
    right: 69px;
}

/*
.main-content {
    width: 100%;
    height: calc(100% - 70px);
    background-color: #edf2f6;
    position: absolute;
}

.main-image {
    position: relative;
    padding-top: 50px;
    width: 80%;
    margin: 0 auto;
}

.main-image img {
    display: block;
    width: 100%;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    height: auto;
}

.user-profile-sections {
    width: 80%;
    margin: auto;
    border: 1px solid #e6ecf5;;
    background-color: #fff;
    padding: 38px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.profile-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.profile-menu li a {
    font-size: 14px;
    font-weight: 700;
    color: #9a9fbf;
    display: block;
}

.profile-menu li a:hover {
    color: #515365;
}

.profile-menu li a.active {
    color: #515365;
}

.author-main-content {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    left: 45%;
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
*/
</style>
