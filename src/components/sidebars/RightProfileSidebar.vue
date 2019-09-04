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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal" data-backdrop="false">Carol Summers</a>
                    <span class="status">ONLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal" data-backdrop="false"></i>                
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal" data-backdrop="false">Mathilda Brinker</a>
                    <span class="status">AT WORK!</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal" data-backdrop="false"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal" data-backdrop="false">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Carol Summers</a>
                    <span class="status">ONLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Michael Maximoff</a>
                    <span class="status">AWAY</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Rachel Howlett</a>
                    <span class="status">OFFLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Sarah Hetfield</a>
                    <span class="status">ONLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Rachel Howlett</a>
                    <span class="status">OFFLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Bruce Peterson</a>
                    <span class="status">ONLINE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Chris Greyson</a>
                    <span class="status">AWAY</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Nicholas Grisom</a>
                    <span class="status">INVISIBLE</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
                    <a href="#" class="user-name" data-toggle="modal" data-target="#chatModal">Chris Greyson</a>
                    <span class="status">AWAY</span>
                </div>
                <div class="three-dots">
                    <i class="fas fa-ellipsis-h" data-toggle="modal" data-target="#chatModal"></i>
                    <ul class="three-chat-icons">
                        <li>
                            <i class="fas fa-comment-dots" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">START CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment-medical" data-toggle="modal" data-target="#chatModal">
                                <span class="tooltiptext">AD TO CONVERSATION</span>
                            </i>
                        </li>
                        <li>
                            <i class="fas fa-comment" data-toggle="modal" data-target="#chatModal">
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
        <!-- Modal -->
        <div class="modal fade" id="chatModal" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="status-online"></span>
                        <h6 class="modal-header-chat-title">Chat</h6>
                        <i class="fas fa-ellipsis-h"></i>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-user-thumb"> 
                            <img src="../../assets/profile-images/avatar62-sm.jpg">
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
                                <i class="fas fa-tv"></i>
                                <i class="far fa-smile"></i>
                                <!--ul class="modal-smile-icons">
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat9.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                    <li>
                                        <img src="../../assets/profile-images/icon-chat1.png">
                                    </li>
                                </ul-->
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
            rightSidebarToggle: false
        }
    }
}
</script>

<style>
.modal {
    left: calc(100% - 300px);
    width: 300px;
    top: -29px;
}

.modal-backdrop {
    display: none;
}

.modal-header {
    background-color: #7c5ac2;
}

.close {
    color: #fff;
    font-weight: 500;
    font-size: 19px;
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
    font-size: 12px;
    margin: auto 185px auto 5px;
}

.modal-header-three-dots {
    display: flex;
    justify-content: flex-end;
}

.fa-ellipsis-h {
    color: #fff;
    margin: auto 0;
    cursor: pointer;
}

.modal-body {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 25px 5px 24px;
}

.modal-chat-message {
    background-color: #f0f4f9;
    margin-top: 12px;
    border-radius: 10px;
    margin-bottom: 5px;
    font-size: 12px;
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
    font-size: 10px;
    margin-left: 37px;
}

.modal-form-group {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.modal-form-label {
    font-size: 11px;
    margin-top: 10px;
    color: #888da8;
}

.modal-footer-icons {
    margin: 70px auto 0 auto;
    display: flex;
    color: #888da8;
}

textarea {
    outline: none;
    border: none;
    font-size: 11px;
    width: 95%
}

.fa-tv {
    margin-right: 20px;
    cursor: pointer;
}

.fa-smile {
    cursor: pointer;
}

/*
.modal-smile-icons {
    display: flex;
    width: 100px;
    height: 100px;
    background: gray;
    padding: 5px;
    text-align: justify;
    position: relative;
}

.modal-smile-icons img {
    vertical-align: middle;
    border-style: none;
    display: flex;
    margin: 4px;
    position: absolute;
}
*/




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
    margin-right: 20px;
    align-items: center;
    position: relative;
    color: #c0c4d8;
}

.three-chat-icons {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
    opacity: 0;
    background-color: #fff;
    width: 0px;
}

.three-dots:hover .three-chat-icons {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 100%;
    opacity: 1;
    background-color: #fff;
    transition: ease all .8s;
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
    opacity: 0;
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
    opacity: 1;
    transition: ease all .8s;
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
