<template>
    <div>
        <div class="social-network-chat-header" @click="rightSidebarToggle = !rightSidebarToggle">
            <i class="far fa-comments" v-if="!rightSidebarToggle"></i>
            <i class="fas fa-times" v-if="rightSidebarToggle"></i>
        </div>
        <aside class="right-sidebar" v-bind:class="{ inactive: rightSidebarToggle }">
            <ul class="right-sidebar-users">
                <li class="chat-user" v-for="user in usersSidebar" :key="user.id">              
                    <img :src="getImgUrl(user.img)" :alt="user.img">
                    <span :class="user.status"></span>               
                </li>
            </ul>
            <div class="right-sidebar-toggle">
                <div class="right-sidebar-bar">
                    <i class="fas fa-bars" @click="rightSidebarToggle = !rightSidebarToggle"></i>
                </div>
                <div class="social-network-chat-sidebar">
                    <i class="far fa-comments"></i>
                </div>
            </div>   
        </aside>

        <aside class="right-sidebar-wider" v-bind:class="{ inactive: !rightSidebarToggle }">
            <div class="right-sidebar-wider-users">
                <div class="settings">
                    <span class="left-title">CLOSE FRIENDS</span>
                    <span class="right-title">SETTINGS</span>
                </div>
                <ul>
                    <li class="chat-user-wider" v-for="user in usersWiderSidebarCloseFriends" :key="user.id">
                        <div class="user-thumb">              
                            <img :src="getImgUrl(user.img)" :alt="user.img">
                            <span :class="user.status"></span>
                        </div> 
                        <div class="user-status">
                            <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal" data-backdrop="false">{{ user.user_name }}</a>
                            <span class="status">{{ user.title_status }}</span>
                        </div>
                        <div class="three-dots">
                            <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal" data-backdrop="false"></i>                
                            <ul class="three-chat-icons">
                                <li v-for="tooltip in tooltips" :key="tooltip.id">
                                    <i :class="tooltip.icon" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
                                        <span class="tooltiptext">{{ tooltip.text }}</span>
                                    </i>
                                </li>
                            </ul>
                        </div>               
                    </li>
                </ul>
                <div class="settings">
                    <span class="left-title">MY FAMILY</span>
                    <span class="right-title">SETTINGS</span>
                </div>
                <ul>
                    <li class="chat-user-wider" v-for="user in usersWiderSidebarFamily" :key="user.id">
                        <div class="user-thumb">               
                            <img :src="getImgUrl(user.img)" :alt="user.img">
                            <span :class="user.status"></span>
                        </div>
                        <div class="user-status">
                            <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">{{ user.user_name }}</a>
                            <span class="status">{{ user.title_status }}</span>
                        </div>
                        <div class="three-dots">
                            <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                            <ul class="three-chat-icons">
                                <li v-for="tooltip in tooltips" :key="tooltip.id">
                                    <i :class="tooltip.icon" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
                                        <span class="tooltiptext">{{ tooltip.text }}</span>
                                    </i>
                                </li>
                            </ul>
                        </div>                 
                    </li>
                </ul>
                <div class="settings">
                    <span class="left-title">UNCATEGORIZED</span>
                    <span class="right-title">SETTINGS</span>
                </div>
                <ul>
                    <li class="chat-user-wider" v-for="user in usersWiderSidebarUncategorized" :key="user.id">
                        <div class="user-thumb">               
                            <img :src="getImgUrl(user.img)" :alt="user.img">
                            <span :class="user.status"></span>
                        </div>
                        <div class="user-status">
                            <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">{{ user.user_name }}</a>
                            <span class="status">{{ user.title_status }}</span>
                        </div>
                        <div class="three-dots">
                            <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                            <ul class="three-chat-icons">
                                <li v-for="tooltip in tooltips" :key="tooltip.id">
                                    <i :class="tooltip.icon" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
                                        <span class="tooltiptext">{{ tooltip.text }}</span>
                                    </i>
                                </li>
                            </ul>
                        </div> 
                    </li>
                </ul>
            </div>
            <div class="right-sidebar-wider-toggle">
                <div class="search-friends">
                    <form class="form-group">
                        <input class="form-control" type="text" placeholder="Search Friends...">
                        <i class="fas fa-sliders-h"></i>
                    </form>
                    <div class="right-sidebar-bar-wider" @click="rightSidebarToggle = !rightSidebarToggle">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div>       
                    <div class="social-network-chat-sidebar-wide">
                        <span class="chat-title">OLYMPUS CHAT</span>
                        <i class="far fa-comments"></i>
                    </div>
                </div> 
            </div>
        </aside>
        
        <div class="modal fade" id="chatModal" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="status-online"></span>
                        <h6 class="modal-header-chat-title">Chat</h6>
                        <i class="fas fa-ellipsis-h" @click="rightSidebarToggle = false"></i>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-user-thumb"> 
                            <img src="../../assets/profile-images/avatar62-sm.jpg" alt="avatar-62">
                        </div>
                        <span class="modal-chat-message">Hi James! Please remember to buy the food for tomorrow! 
                            I’m gonna be handling the gifts and Jake’s gonna get the drinks
                        </span>
                        <span class="chat-message-date">Yesterday at 8:10pm</span>
                    </div>
                    <div class="modal-footer">
                        <form class="modal-form-group">
                            <div class="modal-textarear">
                                <label class="modal-form-label">Press enter to post..</label>
                                <textarea class="modal-form-control" placeholder></textarea>
                            </div>
                            <div class="modal-footer-icons">
                                <div class="modal-tv-icon">
                                    <i class="fas fa-tv"></i>
                                </div>
                                <div class="modal-smile-icon">
                                    <i class="far fa-smile"></i>
                                    <ul class="more-smile-icons">
                                        <li v-for="smileIcon in smileIcons" :key="smileIcon.id">
                                            <img :src="getImgUrl(smileIcon.img)" :alt="smileIcon.img">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rightSidebarToggle: false,
            usersSidebar: this.$store.state.rightProfileSidebar.usersSidebar,
            usersWiderSidebarCloseFriends: this.$store.state.rightProfileSidebar.usersWiderSidebarCloseFriends,
            usersWiderSidebarFamily: this.$store.state.rightProfileSidebar.usersWiderSidebarFamily,
            usersWiderSidebarUncategorized: this.$store.state.rightProfileSidebar.usersWiderSidebarUncategorized,
            tooltips: this.$store.state.rightProfileSidebar.tooltips,
            smileIcons: this.$store.state.rightProfileSidebar.smileIcons
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../../assets/profile-images/'+pic);
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

.social-network-chat-header {
    display: none;
}

.right-sidebar {
    position: fixed;
    z-index: 5;
    width: 76px;
    height: 100%;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    transition: right ease-out .3s;
    transition-delay: .6s;
    cursor: pointer;
    color: gray;
    text-align: center;
    @include flex-column;
    margin-right: -6px;
    margin-top: 70px;
}

.right-sidebar.inactive {
    right: -76px;
    transition-delay: 0s;
}

.right-sidebar-users {
    height: calc(100% - 210px);
    overflow-y: scroll;
}

.right-sidebar-toggle {
    @include right-sidebar-toggle;
}

.right-sidebar-wider {
    position: fixed;
    z-index: 10;
    width: 270px;
    height: 100%;
    right: 0;
    top: 70px;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    transition: right ease-out .6s;
    transition-delay: .3s;
    cursor: pointer;
    color: gray;
    text-align: center;
    @include flex-column;
    margin-right: -6px;
}

.right-sidebar-wider.inactive {
    right: -270px;
    transition-delay: 0s;
}

.right-sidebar-wider-users {
    height: calc(100% - 210px);
    overflow-y: scroll;
    overflow-x: hidden;
}

.right-sidebar-wider-toggle {
    @include right-sidebar-toggle;
}

.chat-user {
    padding-top: 25px;
    position: relative;

    img {
        border-radius: 50%;
    }
}

.chat-user-wider {
    padding-top: 16px;
    position: relative;
    display: flex;
    padding-left: 18px;
    padding-bottom: 14px;

    img {
        border-radius: 50%;
    }
}

.user-status-online,
.user-status-away,
.user-status-disconected,
.user-status-invisible {
    @include user-status;
    top: 30px;
}

.user-status-online-wider,
.user-status-away-wider,
.user-status-disconected-wider,
.user-status-invisible-wider {
    @include user-status;
    top: 15px;
}

.user-status-away,
.user-status-away-wider {
    background-color: #ffd52f;
}

.user-status-disconected,
.user-status-disconected-wider {
    background-color: #ff4f60;
}

.user-status-invisible,
.user-status-invisible-wider {
    background-color: #cbdfee;
}

.user-status {
    @include flex-column;
    justify-content: center;
    margin-right: auto;
}

.user-name {
    color: #515365;
    font-size: $base-font-size - 4;
    font-weight: 700;
    padding-left: 10px;
    @include transition-vendors(color .2s ease);

    &:hover {
        color: #ff4f60;
    }
}

.status {
    font-size: $base-font-size - 8;
    font-weight: 700;
    display: flex;
    padding-left: 10px;
    color: #888da8;
}

.three-dots {
    display: flex;
    margin-right: 20px;
    align-items: center;
    position: relative;
    color: #c0c4d8;

    &:hover .three-chat-icons {
        @include visible-opacity;
        width: 160px;
    }
}

.three-chat-icons {
    @include flex-row;
    position: absolute;
    right: 100%;
    visibility: hidden;
    opacity: 1;
    background-color: #fff;
    width: 0px;
    @include transition-vendors(width .5s ease opacity .3s ease);
}

.fa-comment-dots,
.fa-comment-medical,
.fa-comment {
    position: relative;
    font-size: $base-font-size + 4;
    margin-right: 22px;

    &:hover .tooltiptext {
        @include visible-opacity;
        z-index: 1;
    }
}

.fa-comment-dots .tooltiptext,
.fa-comment-medical .tooltiptext,
.fa-comment .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #3f4257;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0px;
    position: absolute;
    z-index: -1;
    bottom: 150%;
    left: 50%;
    margin-left: -60px;
    font-size: $base-font-size - 7;
    opacity: 0;
    @include transition-vendors(all .5s ease);

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #3f4257 transparent transparent transparent;
    }
}

.right-sidebar-bar {
    box-shadow: 0 -50px 45px -3px rgba(255, 255, 255, 0.7);
    height: 70px;
    text-align: center;
    @include flex-center;
    align-items: center;
    width: 70px;
    background-color: #fff;
}

.right-sidebar-bar .fa-bars:hover {
    color: #ff5e3a; 
}

.social-network-chat-sidebar {
    color: #fff;
    width: 70px;
    height: 70px;
    background-color: #7c5ac2;
    @include flex-center;
    align-items: center;
    font-size: $base-font-size + 9;
    z-index: 22;
    right: 0;
    cursor: pointer;
}

.settings {
    @include flex-space-between;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    padding: 7px 0;
}

.left-title {
    color: #9a9fbf;
    margin-left: 20px;
    font-size: $base-font-size - 7;
}

.right-title {
    color: #515365;
    margin-right: 20px;
    font-size: $base-font-size - 7;
}

ul, li {
    @include ul-li;
}

a:link {
    text-decoration: none;
}

.form-group {
    @include flex-center;
    width: 75%;
    align-items: center;
}

.form-control {
    font-size: $base-font-size - 4;
    padding: 5px 10px;
    color: #515365;
    margin-right: 10px;
}

.fa-sliders-h {
    font-size: $base-font-size + 4;

    &:hover {
        color: #ff5e3a; 
    }
}

.search-friends {
    position: relative;
    box-shadow: 0 -50px 45px -3px rgba(255, 255, 255, 0.7);
    background-color: #fff;
    height: 70px;
    border-top: 1px solid #e6ecf5;
    @include flex-row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 20px;
}

.right-sidebar-bar-wider {
    @include flex-center;
    margin-left: 10px;
    padding-bottom: 18px;
}

.right-sidebar-bar-wider .fa-times {
    font-size: $base-font-size + 9;

    &:hover {
        color: #ff5e3a; 
    }
}

.social-network-chat-sidebar-wide {
    position: relative;
    color: #fff;
    width: 260px;
    height: 70px;
    background-color: #7c5ac2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    z-index: 22;
    right: 0;
    cursor: pointer;
}

.chat-title {
    font-size: $base-font-size - 2;
    font-weight: 700;
    color: #fff;
}

.modal {
    left: calc(100% - 300px);
    width: 300px;
}

.modal-header {
    background-color: #7c5ac2;
}

.close {
    color: #fff;
    font-weight: 500;
    font-size: $base-font-size + 3;
}

.close:hover {
    color: #fff;
}

.status-online {
    width: 6px;
    height: 6px;
    background-color: #32e4cd;
    border-radius: 50%;
    margin: auto 0;
}

.modal-header-chat-title {
    color: #fff;
    font-weight: 700;
    margin-left: 5px;
    font-size: $base-font-size - 4;
    margin: auto 185px auto 5px;
}

.modal-header-three-dots {
    @include flex-end;
}

.modal-header .fa-ellipsis-h {
    color: #fff;
    margin: auto 0;
    cursor: pointer;
}

.modal-body {
    @include flex-wrap;
    padding: 5px 25px 5px 24px;
}

.modal-chat-message {
    background-color: #f0f4f9;
    margin-top: 12px;
    border-radius: 10px;
    margin-bottom: 5px;
    font-size: $base-font-size - 4;
    margin-left: 8px;
    padding: 10px;
    width: 75%;
    text-align: justify;
    color: #888da8;
}

.modal-user-thumb img {
    border-radius: 50%;
}

.chat-message-date {
    color: #888da8;
    font-size: $base-font-size - 6;
    margin-left: 37px;
}

.modal-form-group {
    @include flex-row;
    width: 100%;
}

.modal-form-label {
    font-size: $base-font-size - 5;
    margin-top: 10px;
    color: #888da8;
}

.modal-footer-icons {
    margin: 70px auto 0 auto;
    display: flex;
    color: #c2c5d9;
}

textarea {
    outline: none;
    border: none;
    font-size: $base-font-size - 5;
    width: 95%
}

.fa-tv {
    margin-right: 20px;
    cursor: pointer;
    color: #c2c5d9;
}

.fa-smile {
    cursor: pointer;
}

.modal-smile-icon {
    position: relative;
    cursor: pointer;

    &:hover .more-smile-icons {
        @include visible-opacity;
        cursor: pointer;
    }
}

.more-smile-icons {
    @include flex-wrap;
    visibility: hidden;
    position: absolute;
    width: 150px;
    top: -100px;
    right: 100%;
    background-color: #fff;
    border-radius: 4px;
    opacity: 0;
    text-align: left;
    padding: 10px 10px 10px 15px;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    @include transition-vendors(all .3s ease);
}

/*media query*/
@media only screen and (max-width: 768px) {
    .right-sidebar,
    .right-sidebar-bar-wider .fa-times {
        display: none;
    }

    .social-network-chat-header {
        position: absolute;
        color: #fff;
        width: 76px;
        height: 70px;
        background-color: #7c5ac2;
        @include flex-center;
        align-items: center;
        font-size: $base-font-size + 9;
        position: fixed;
        z-index: 1031;
        right: 0;
        cursor: pointer;
    }
}
</style>

