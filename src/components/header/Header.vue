<template>
    <div>
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

                    <li class="nav-item">                    
                        <div class="dropdown-smile">
                            <div class="dropbtn">
                                <a class="smile" href="#">
                                    <i class="far fa-smile"></i>
                                    <div class="smile-badge">
                                        <span class="blue-badge">6</span>
                                    </div>
                                </a>                           
                            </div>
                            <div class="dropdown-content">                               
                                <div class="dropdown-header">
                                    <span class="dropdown-header-left-title">FRIEND REQUESTS</span>
                                    <div class="dropdown-header-right-titles">
                                        <span>Find Friends</span>
                                        <span>Settings</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar55-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-name">Tamara Romanoff</span>
                                                    <span class="dropdown-author-text">Mutual Friend: Sarah Hetfield</span>
                                                </div>
                                            </div>
                                            <div class="smile-squares">
                                                <div class="blue-smile"><i class="far fa-smile"></i></div>
                                                <div class="gray-smile"><i class="far fa-smile"></i></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar56-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-name">Tony Stevens</span>
                                                    <span class="dropdown-author-text">4 Friends in Common</span>
                                                </div>
                                            </div>
                                            <div class="smile-squares">
                                                <div class="blue-smile"><i class="far fa-smile"></i></div>
                                                <div class="gray-smile"><i class="far fa-smile"></i></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar57-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <div class="dropdown-author-text">You and
                                                        <span class="dropdown-author-name">Mary Jane Stark</span>
                                                        just <br> became friends. Write on <br>
                                                        <span class="blue-text">her wall</span>.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ordinary-smile">                                        
                                                <i class="far fa-smile"></i>
                                            </div>   
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar58-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-name">Stagg Clothing</span>
                                                    <span class="dropdown-author-text">9 Friends in Common</span>
                                                </div>
                                            </div>
                                            <div class="smile-squares">
                                                <div class="blue-smile"><i class="far fa-smile"></i></div>
                                                <div class="gray-smile"><i class="far fa-smile"></i></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="dropdown-footer-blue">
                                    <span class="dropdown-footer-text">Check all your events</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <div class="dropdown-comments">
                            <div class="dropbtn">
                                <a class="comments" href="#">
                                    <i class="far fa-comments"></i>
                                    <div class="comments-badge">
                                        <span class="purple-badge">2</span>
                                    </div>
                                </a>
                            </div>
                            <div class="dropdown-content">
                                <div class="dropdown-header">
                                    <span class="dropdown-header-left-title">CHAT/MESSAGES</span>
                                    <div class="dropdown-header-right-titles">
                                        <span>Settings</span>
                                        <span>Mark All As Read</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar59-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-name">Diana Jameson</span>
                                                    <span class="dropdown-author-text">
                                                        Hi James! It’s Diana, I just wanted to let you <br> 
                                                        know that we have to reschedule...
                                                    </span>
                                                    <span class="chat-time">4 hours ago</span>
                                                </div>
                                            </div>
                                            <div class="chat-message-icon">
                                                <i class="far fa-comment-alt"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar60-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-name">Jake Parker</span>
                                                    <span class="dropdown-author-text">Great, I’ll see you tomorrow!</span>
                                                    <span class="chat-time">4 hours ago</span>
                                                </div>
                                            </div>
                                            <div class="chat-message-icon-transparent">
                                                <i class="far fa-comment-alt"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar61-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-name">Elaine Dreyfuss</span>
                                                    <span class="dropdown-author-text">
                                                        We’ll have to check that at the office and <br> see if the client is on board with...
                                                    </span>
                                                    <span class="chat-time">Yesterday at 9:56pm</span>
                                                </div>
                                            </div>
                                            <div class="chat-message-icon-transparent">
                                                <i class="far fa-comment-alt"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-users-img">
                                                    <img src="../../assets/profile-images/avatar10-sm.jpg">
                                                    <img src="../../assets/profile-images/avatar11-sm.jpg">
                                                    <img src="../../assets/profile-images/avatar12-sm.jpg">
                                                    <img src="../../assets/profile-images/avatar13-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-name">You, Faye, Ed & Jet +3</span>
                                                    <span class="dropdown-author-message">Ed:
                                                        <span class="dropdown-author-text">Yeah! Seems fine by me!</span>
                                                    </span>
                                                    <span class="chat-time">March 16th at 10:23am</span>
                                                </div>
                                            </div>
                                            <div class="chat-message-icon-transparent">
                                                <i class="far fa-comment-alt"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="dropdown-footer-purple">
                                    <span class="dropdown-footer-text">View all Messages</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <div class="dropdown-thunder">
                            <div class="dropbtn">
                                <a class="thunder" href="#">
                                    <i class="fas fa-bolt"></i>
                                    <div class="thunder-badge">
                                        <span class="orange-badge">8</span>
                                    </div>
                                </a>
                            </div>
                            <div class="dropdown-content">
                                <div class="dropdown-header">
                                    <span class="dropdown-header-left-title">CHAT/MESSAGES</span>
                                    <div class="dropdown-header-right-titles">
                                        <span>Settings</span>
                                        <span>Mark All As Read</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar62-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <div class="dropdown-author-name">Mathilda Brinker
                                                        <span class="dropdown-author-text">commented on your<br>new
                                                            <span class="orange-text">profile status</span>
                                                        </span>
                                                    </div>
                                                    <span class="chat-time">4 hours ago</span>
                                                </div>
                                            </div>
                                            <div class="chat-message-icon-transparent">
                                                <i class="far fa-comment-alt"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar63-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-text">You and
                                                        <span class="dropdown-author-name">Nicholas Grissom</span>
                                                         just <br> became friends. Write on 
                                                         <span class="orange-text">his wall</span>.
                                                    </span>
                                                    <span class="chat-time">9 hours ago</span>
                                                </div>
                                            </div>
                                            <div class="ordinary-smile">                                        
                                                <i class="far fa-smile"></i>
                                            </div> 
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content-two-img">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar64-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <span class="dropdown-author-name">Sarah Hetfield
                                                        <span class="dropdown-author-text">commented on your</span>
                                                    </span>
                                                    <span class="orange-text">photo</span>
                                                    <span class="chat-time">Yesterday at 5:32am</span>
                                                </div>
                                            </div>
                                            <div class="chat-message-icon-transparent">
                                                <i class="far fa-comment-alt"></i>
                                            </div>
                                        </div>
                                        <div class="comment-photo">
                                            <img src="../../assets/profile-images/comment-photo1.jpg">
                                            <span class="dropdown-author-text">"She looks incredible in that <br> outfit! We should see each..."</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar65-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <div class="dropdown-author-name">Green Goo Rock
                                                        <span class="dropdown-author-text"> invited you to attend <br> to his event Goo in 
                                                            <span class="orange-text">Gotham bar</span>.
                                                        </span>
                                                    </div>
                                                    <span class="chat-time">March 5th at 6:43pm</span>
                                                </div>
                                            </div>
                                            <div class="ordinary-smile">                                        
                                                <i class="far fa-smile"></i>
                                            </div> 
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-author-content">
                                            <div class="dropdown-author-data-wrapper">
                                                <div class="dropdown-author-img">
                                                    <img src="../../assets/profile-images/avatar66-sm.jpg">
                                                </div>
                                                <div class="dropdown-author-data">
                                                    <div class="dropdown-author-name">James Summers
                                                        <span class="dropdown-author-text">commented on your<br>new
                                                            <span class="orange-text">profile status</span>
                                                        </span>
                                                    </div>
                                                    <span class="chat-time">March 2nd at 8:29pm</span>
                                                </div>
                                            </div>
                                            <div class="chat-message-heart">
                                                <i class="far fa-heart"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="dropdown-footer-orange">
                                    <span class="dropdown-footer-text">View all Notifications</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="nav-item">
                        <div class="dropdown-author">
                            <div class="dropbtn">
                                <div class="author-data-wrapper">
                                    <img src="../../assets/profile-images/author-page.jpg">
                                    <div class="author-data">
                                        <span class="author-title">James Spiegel</span>
                                        <span class="author-subtitle">SPACE COWBOY</span>
                                        <span class="online-status-dot"></span>
                                    </div>
                                    <i class="fas fa-caret-down"></i>
                                </div>
                            </div>
                            <div class="dropdown-content">
                                <div class="dropdown-title">
                                    <span class="title-account">Your Account</span>
                                </div>
                                <ul>
                                    <li class="settings">
                                        <i class="fas fa-bars"></i>
                                        <span class="title-settings">Profile Settings</span>
                                    </li>
                                    <li class="fav">
                                        <i class="far fa-star"></i>
                                        <span class="title-fav-page">Create Fav Page</span>
                                    </li>
                                    <li class="logout">
                                        <i class="fas fa-sign-out-alt"></i>
                                        <span class="title-logout">Log Out</span>
                                    </li>

                                    <div class="dropdown-title">
                                        <span class="title-chat-settings">Chat Settings</span>
                                    </div>
                                    <li class="status-online">
                                        <span class="green-dot"></span>
                                        <span class="title-online">Online</span>
                                    </li>
                                    <li class="status-away">
                                        <span class="yellow-dot"></span>
                                        <span class="title-away">Away</span>
                                    </li>
                                    <li class="status-disconnected">
                                        <span class="red-dot"></span>
                                        <span class="title-disconnected">Disconnected</span>
                                    </li>
                                    <li class="status-invisible">
                                        <span class="gray-dot"></span>
                                        <span class="title-invisible">Invisible</span>
                                    </li>

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
                                    <li class="terms">
                                        <span class="title-terms">Terms & Conditions</span>
                                    </li>
                                    <li class="faq">
                                        <span class="title-faq">FAQs</span>
                                    </li>
                                    <li class="careers">
                                        <span class="title-careers">Careers</span>
                                    </li>
                                    <li class="contact">
                                        <span class="title-contact">Contact</span>
                                    </li>
                                </ul>
                            </div>
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
    </div>
</template>

<script>
</script>

<style scoped>
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

ul {
    list-style-type: none;
}

ul, li {
    margin: 0;
    padding: 0;
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

.author-data-wrapper img {
    border-radius: 50%;
    margin-left: 50px;
}

.author-data-wrapper {
    display: flex;
    position: relative;
    cursor: pointer;
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

.online-status-dot {
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
    color: white;
}

/*dropdown smile*/
.dropdown-smile {
    position: relative;
    display: inline-block;
}

.dropdown-smile .dropdown-content {
    display: none;
    width: 380px;
    border-radius: 5px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    z-index: 20;
    right: -150px;
    top: 50px;
}

.dropdown-smile  .dropdown-content::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 200px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

.dropdown-smile:hover .dropdown-content {
    display: block;
}

.dropdown-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6ecf5;
}

.dropdown-header-left-title {
    color: #9a9fbf;
    font-size: 9px;
}

.dropdown-header-right-titles {
    color: #515365;
    font-size: 9px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
}

.dropdown-header-right-titles span:nth-child(2) {
    margin-left: 10px;
}

.dropdown-header-right-titles span:nth-child(1):hover,
.dropdown-header-right-titles span:nth-child(2):hover {
    color: #ff5e3a;
}

.dropdown-author-content {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #e6ecf5;
}

.dropdown-author-data-wrapper {
    display: flex;
    justify-content: space-between;
}

.dropdown-author-img img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
}

.dropdown-author-data {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}

.dropdown-author-name {
    color: #515365;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
    transition: 0.3s;
}

.dropdown-author-name:hover {
    color: #ff5e3a;
}

.dropdown-author-text {
    font-size: 12px;
    color: #9a9fbf;
}

.blue-text {
    color: #00b7ff;
}

.smile-squares {
    display: flex;
    justify-content: space-between;
}

.blue-smile {
    height: 40px;
    width: 40px;
    background-color: #38a9ff;
    border-radius: 4px;
}

.gray-smile {
    height: 40px;
    width: 40px;
    background-color: #9a9fbf;
    margin-left: 15px;
    border-radius: 4px;
}

.blue-smile .fa-smile,
.gray-smile .fa-smile {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
}

.dropdown-footer-blue {
    background-color: #38a9ff;
    padding: 20px;
    cursor: pointer;
}

.dropdown-footer-text {
    color: #fff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    font-weight: 700;
}

.ordinary-smile .fa-smile {
    color: #9a9fbf;
}

/*dropdown comments*/
.dropdown-comments {
    position: relative;
    display: inline-block;
}

.dropdown-comments .dropdown-content {
    display: none;
    width: 380px;
    border-radius: 5px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    z-index: 20;
    right: -153px;
    top: 50px;
}

.dropdown-comments .dropdown-content::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 200px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

.dropdown-comments:hover .dropdown-content {
    display: block;
}

.dropdown-users-img {
    display: flex;
    width: 36px;
    height: 36px;
    flex-wrap: wrap;
}

.dropdown-users-img img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
} 

.chat-time {
    color: #9a9fbf;
    font-size: 11px;
    margin-top: 5px;
}

.chat-message-icon .fa-comment-alt {
    color: #9a9fbf;
}

.chat-message-icon-transparent .fa-comment-alt {
    opacity: 0.5;
    color: #9a9fbf;
}

.dropdown-author-message {
    color: #515365;
    font-size: 13px;
    font-weight: 700;
}

.dropdown-footer-purple {
    background-color: #7c5ac2;;
    padding: 20px;
    cursor: pointer;
}

/*dropdown thunder*/
.dropdown-thunder {
    position: relative;
    display: inline-block;
}

.dropdown-thunder .dropdown-content {
    display: none;
    width: 380px;
    border-radius: 5px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    z-index: 20;
    right: -155px;
    top: 50px;
}

.dropdown-thunder .dropdown-content::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 200px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

.dropdown-thunder:hover .dropdown-content {
    display: block;
}

.orange-text {
    color: #ff5e3a;
    font-weight: 700;
    font-size: 12px;
}

.comment-photo {
    display: flex;
    margin-left: 72px;
    border-bottom: 1px solid #e6ecf5;
    padding-bottom: 20px;
}

.comment-photo img {
    margin-right: 15px;
    border-radius: 0 10px 10px 0;
}

.dropdown-footer-orange {
    background-color: #ff5e3a;
    padding: 20px;
    cursor: pointer;
}

.dropdown-footer-orange:hover {
    background-color: #dc310a;
    
}

.dropdown-author-content-two-img {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.chat-message-heart .fa-heart {
    color: #9a9fbf;
}

/*dropdown author*/
.dropdown-author {
    position: relative;
    display: inline-block;
}

.dropdown-author .dropdown-content {
    display: none;
    width: 230px;
    border-radius: 5px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 34px 0 rgba(63, 66, 87, 0.1);
    z-index: 20;
    right: -25px;
}

.dropdown-author .dropdown-content::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 200px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

.dropdown-author:hover .dropdown-content {
    display: block;
}

.dropdown-title {
    display: flex;
    border-bottom: 1px solid #e6ecf5;
    border-top: 1px solid #e6ecf5;
    padding: 10px 10px 10px 15px;
}

.title-account,
.title-chat-settings,
.title-custom-status,
.title-olympus {
    font-size: 9px;
    text-transform: uppercase;
    color: #9a9fbf;
    font-weight: 700;
}

.settings,
.fav,
.logout,
.status-online,
.status-away,
.status-disconnected,
.status-invisible,
.terms,
.faq,
.careers,
.contact {
    display: flex;
    padding: 10px;
    cursor: pointer;
}

.dropdown-content .fa-bars,
.dropdown-content .fa-star,
.dropdown-content .fa-sign-out-alt {
    color: #9a9fbf;
    font-size: 20px;
}

.title-settings,
.title-fav-page,
.title-logout,
.title-terms,
.title-faq,
.title-careers,
.title-contact {
    font-size: 12px;
    color: #515365;
    font-weight: 700;
    margin-left: 15px;
}

.title-online,
.title-away,
.title-disconnected,
.title-invisible {
    font-size: 12px;
    color: #9a9fbf;
    font-weight: 700;
    margin-left: 15px;
}

.title-online:hover,
.title-away:hover,
.title-disconnected:hover,
.title-invisible:hover {
    color: #515365;
}

.title-settings:hover,
.title-fav-page:hover,
.title-logout:hover,
.title-terms:hover,
.title-faq:hover,
.title-careers:hover,
.title-contact:hover {
    color: #ff5e3a;
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
    font-size: 12px;
    width: 100%;
}

button[type=button] {
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
    .fa-caret-down {
        display: none;
    }

    .author-title {
        display: none;
    }

    .author-subtitle {
        display: none;
    }
}

@media only screen and (max-width: 1080px) {
    .online-status-dot {
        left: 50px;
    }

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

    .online-status-dot {
        left: 20px;
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
        width: 200px;
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
}
</style>
