<template>
    <div>
        <app-left-profile-sidebar></app-left-profile-sidebar>
        <app-header></app-header>
        
        <div class="main-content">
            <div class="main-image">
                <img src="../assets/profile-images/top-header1.jpg">
            </div>
            <div class="user-profile-sections">
                <ul class="profile-menu">
                    <li>
                        <a href="#">Timeline</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Friends</a>
                    </li>
                </ul>
            
                <div class="author-main-content">
                    <div class="author-main-image">
                        <img src="../assets/profile-images/author-main1.jpg">
                    </div>
                    <div class="autor-data">
                        <div class="author-name">James Spiegel</div>
                        <div class="country">San Francisco, CA</div>
                    </div>
                </div>
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
    position: relative;
    width: 80%;
    margin: auto;
    border: 1px solid #e6ecf5;;
    background-color: #fff;
    padding: 38px 0;
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
</style>
