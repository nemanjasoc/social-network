<template>
    <div>
        <ul class="right-sidebar" v-bind:class="{ inactive: rightSidebarToggle }">
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar67-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar62-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar68-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar69-sm.jpg">
                <span class="user-status-away"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar70-sm.jpg">
                <span class="user-status-disconected"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar64-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar71-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar72-sm.jpg">
                <span class="user-status-away"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar63-sm.jpg">
                <span class="user-status-invisible"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar72-sm.jpg">
                <span class="user-status-away"></span>                
            </li>
            <li class="chat-user">              
                <img src="../../assets/profile-images/avatar71-sm.jpg">
                <span class="user-status-online"></span>                
            </li>
            <li>
                <div class="right-sidebar-bar">
                    <i class="fas fa-bars" @click="rightSidebarToggle = !rightSidebarToggle"></i>
                </div>
            </li>
            <li>
                <div class="social-network-chat-sidebar">
                    <i class="far fa-comments"></i>
                </div>               
            </li>
        </ul>

        <ul class="right-sidebar-wider" v-bind:class="{ inactive: !rightSidebarToggle }">
            <div class="settings">
                <span class="left-title">CLOSE FRIENDS</span>
                <span class="right-title">SETTINGS</span>
            </div>
            <li class="chat-user-wider">
                <div class="user-thumb">              
                    <img src="../../assets/profile-images/avatar67-sm.jpg">
                    <span class="user-status-online-wider"></span>
                </div> 
                <div class="user-status">
                    <a href="#" class="user-name">Carol Summers</a>
                    <span class="status">ONLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>                
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div>               
            </li>
            <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../../assets/profile-images/avatar62-sm.jpg">
                    <span class="user-status-online-wider"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Mathilda Brinker</a>
                    <span class="status">AT WORK!</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div>                 
            </li>
            <li class="chat-user-wider">
                <div class="user-thumb">              
                    <img src="../../assets/profile-images/avatar68-sm.jpg">
                    <span class="user-status-online-wider"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Carol Summers</a>
                    <span class="status">ONLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div>                  
            </li>
            <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../../assets/profile-images/avatar69-sm.jpg">
                    <span class="user-status-away-wider"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Michael Maximoff</a>
                    <span class="status">AWAY</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div>                  
            </li>
             <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../../assets/profile-images/avatar70-sm.jpg">
                    <span class="user-status-disconected-wider"></span>
                 </div>
                <div class="user-status">
                    <a href="#" class="user-name">Rachel Howlett</a>
                    <span class="status">OFFLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div>                  
            </li>
            <div class="settings">
                <span class="left-title">MY FAMILY</span>
                <span class="right-title">SETTINGS</span>
            </div>
            <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../../assets/profile-images/avatar64-sm.jpg">
                    <span class="user-status-online-wider"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Sarah Hetfield</a>
                    <span class="status">ONLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div>                 
            </li>
            <div class="settings">
                <span class="left-title">UNCATEGORIZED</span>
                <span class="right-title">SETTINGS</span>
            </div>
            <li class="chat-user-wider">
                <div class="user-thumb">               
                    <img src="../../assets/profile-images/avatar71-sm.jpg">
                    <span class="user-status-online-wider"></span>
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Rachel Howlett</a>
                    <span class="status">OFFLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div> 
            </li>
            <li class="chat-user-wider"> 
                <div class="user-thumb"> 
                    <img src="../../assets/profile-images/avatar72-sm.jpg">
                    <span class="user-status-away-wider"></span>  
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Bruce Peterson</a>
                    <span class="status">ONLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div> 
            </li>
            <li class="chat-user-wider">   
                <div class="user-thumb"> 
                    <img src="../../assets/profile-images/avatar63-sm.jpg">
                    <span class="user-status-invisible-wider"></span> 
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Chris Greyson</a>
                    <span class="status">AWAY</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div> 
            </li>
            <li class="chat-user-wider">     
                <div class="user-thumb"> 
                    <img src="../../assets/profile-images/avatar72-sm.jpg">
                    <span class="user-status-away-wider"></span> 
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Nicholas Grisom</a>
                    <span class="status">INVISIBLE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div> 
            </li>
            <li class="chat-user-wider">    
                <div class="user-thumb"> 
                    <img src="../../assets/profile-images/avatar71-sm.jpg">
                    <span class="user-status-online-wider"></span> 
                </div>
                <div class="user-status">
                    <a href="#" class="user-name">Chris Greyson</a>
                    <span class="status">AWAY</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment">
                                <span class="tooltiptext">BLOCK FROM CHAT</span>
                            </i>
                        </li>
                    </ul>
                </div> 
            </li>
            <div class="search-friends">
                <form class="form-group">
                    <input class="form-control" type="text" placeholder="Search Friends...">
                    <i class="fas fa-sliders-h"></i>
                </form>
                <div class="right-sidebar-bar-wider" @click="rightSidebarToggle = !rightSidebarToggle">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <li>       
                <div class="social-network-chat-sidebar-wide">
                    <span class="chat-title">OLYMPUS CHAT</span>
                    <i class="far fa-comments"></i>
                </div>
            </li> 
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rightSidebarToggle: false
        }
    }
}
</script>

<style scoped>
.right-sidebar {
    position: fixed;
    z-index: 22;
    width: 80px;
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
    overflow: scroll;
}

.right-sidebar.inactive {
    right: -80px;
    transition-delay: 0s;
}

.right-sidebar-wider {
    position: fixed;
    z-index: 22;
    width: 270px;
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
    overflow: scroll;
}

.right-sidebar-wider.inactive {
    right: -270px;
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
    padding-top: 16px;
    position: relative;
    display: flex;
    padding-left: 18px;
    padding-bottom: 14px;
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

.user-status-online-wider,
.user-status-away-wider,
.user-status-disconected-wider,
.user-status-invisible-wider {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #32e4cd;
    top: 15px;
    left: 19px;
    border-radius: 50%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;
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
    color: #888da8;
}

.three-dots {
    display: flex;
    position: relative;
    margin-right: 20px;
    align-items: center;
    color: #c0c4d8;
}

.three-chat-icons {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
    opacity: 0;
    background-color: #fff;
    padding: 10px 25px 10px 10px;
    width: 190px;
}

.three-dots:hover .three-chat-icons {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 100%;
    opacity: 1;
    background-color: #fff;
    transition: ease all .4s;
    padding: 10px 25px 10px 10px;
    width: 160px;
}

.fa-comment-dots,
.fa-comment-medical,
.fa-comment {
    position: relative;
    font-size: 20px;
    margin-right: 22px;
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
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -60px;
    font-size: 9px;
}

.fa-comment-dots .tooltiptext::after,
.fa-comment-medical .tooltiptext::after,
.fa-comment .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #3f4257 transparent transparent transparent;
}

.fa-comment-dots:hover .tooltiptext,
.fa-comment-medical:hover .tooltiptext,
.fa-comment:hover .tooltiptext  {
    visibility: visible;
}

.right-sidebar-bar {
    position: relative;
    box-shadow: 0 -50px 45px -3px rgba(255, 255, 255, 0.7);
    height: 70px;
    margin-top: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right-sidebar-bar .fa-bars:hover {
    color: #ff5e3a; 
}

.social-network-chat-sidebar {
    position: absolute;
    color: #fff;
    width: 70px;
    height: 70px;
    background-color: #7c5ac2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    z-index: 22;
    right: 0;
    cursor: pointer;
}

.settings {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    padding: 7px 0;
}

.left-title {
    color: #9a9fbf;
    margin-left: 20px;
    font-size: 9px;
}

.right-title {
    color: #515365;
    margin-right: 20px;
    font-size: 9px;
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

.form-group {
    display: flex;
    align-items: center;
    width: 75%;
    padding-top: 20px;
}

.form-control {
    font-size: 12px;
    padding: 5px 10px;
    color: #515365;
    margin-right: 10px;
}

.fa-sliders-h {
    font-size: 20px;
}

.fa-sliders-h:hover {
    color: #ff5e3a; 
}

.search-friends {
    position: relative;
    box-shadow: 0 -50px 45px -3px rgba(255, 255, 255, 0.7);
    background-color: #fff;
    height: 70px;
    border-top: 1px solid #e6ecf5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.right-sidebar-bar-wider {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    margin-top: 3px;
}

.right-sidebar-bar-wider .fa-times {
    font-size: 25px;
}

.right-sidebar-bar-wider .fa-times:hover {
    color: #ff5e3a;
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
    font-size: 14px;
    font-weight: 700;
    color: #fff;
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

}
</style>
