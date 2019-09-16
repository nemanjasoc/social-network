<template>
    <div>
        <app-left-profile-sidebar></app-left-profile-sidebar>
        <app-header></app-header>

        <section class="main-container-wrapper">
            <div class="main-container">  
                <div class="image-block">
                    <div class="main-image">
                        <img src="../assets/profile-images/top-header1.jpg">
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
                                <img src="../assets/profile-images/author-main1.jpg">
                            </div>
                            <div class="autor-data">
                                <div class="author-name">James Spiegel</div>
                                <div class="country">San Francisco, CA</div>
                            </div>
                        </div>                       
                    </div>
                </div>
                  
                <div class="main-content">
                    <div class="left-side-block">                   
                        <div class="left-side-first-block">
                            <div class="left-side-first-block-title">
                                <h6 class="title-badges">James's Badges</h6>
                            </div>
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
                        </div>
                        <div class="left-side-second-block">
                            <div class="left-side-second-block-title">
                                <h6 class="title-playlist">My Spotify Playlist</h6>
                            </div>                      
                            <ol class="playlist">
                                <li class="first-video">
                                    <span class="one">1</span>                             
                                    <div class="play-icon" data-toggle="modal" data-target="#videoModalFirst">
                                        <img src="../assets/profile-images/ws-blue-orchid.jpg">
                                        <i class="fas fa-play"></i>
                                    </div>                               
                                    <div class="composition">
                                        <span class="composition-name">Blue Orchid</span>
                                        <span class="composition-author">The White Stripes</span>
                                    </div>
                                    <span class="composition-time">3:22</span>
                                </li>
                                <li class="second-video">
                                    <span class="two">2</span>                                
                                    <div class="play-icon" data-toggle="modal" data-target="#videoModalSecond">
                                        <img src="../assets/profile-images/ws-seven-nation-army.jpg">
                                        <i class="fas fa-play"></i>
                                    </div>                               
                                    <div class="composition">
                                        <span class="composition-name">Seven Nation Army</span>
                                        <span class="composition-author">The White Stripes</span>
                                    </div>
                                    <span class="composition-time">5:48</span>
                                </li>
                                <li class="third-video">
                                    <span class="three">3</span>                                  
                                    <div class="play-icon" data-toggle="modal" data-target="#videoModalThird">
                                        <img src="../assets/profile-images/rhcp-snow.jpg">
                                        <i class="fas fa-play"></i>
                                    </div>                                
                                    <div class="composition">
                                        <span class="composition-name">Snow</span>
                                        <span class="composition-author">Red Hot Chili Peppers</span>
                                    </div>
                                    <span class="composition-time">3:06</span>
                                </li>
                                <li class="fourth-video">
                                    <span class="four">4</span>                                   
                                    <div class="play-icon" data-toggle="modal" data-target="#videoModalFourth">
                                        <img src="../assets/profile-images/sg-mrs-robinson.jpg">
                                        <i class="fas fa-play"></i>
                                    </div>                               
                                    <div class="composition">
                                        <span class="composition-name">Mrs. Robinson</span>
                                        <span class="composition-author">Simon & Garfunkel</span>
                                    </div>
                                    <span class="composition-time">6:17</span>
                                </li>
                                <li class="fifth-video">
                                    <span class="five">5</span>                                
                                    <div class="play-icon" data-toggle="modal" data-target="#videoModalFifth">
                                            <img src="../assets/profile-images/bb-everybody.jpg">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <div class="composition">
                                        <span class="composition-name">Everybody Needs <br> Somebody</span>
                                        <span class="composition-author">The Blues Brothers</span>
                                    </div>
                                    <span class="composition-time">5:40</span>
                                </li>
                            </ol>                       
                        </div>
                    </div>
                    <div class="center-block">
                        <div class="center-first-block">
                            <div class="author-container">                           
                                <div class="author-data-block">
                                    <img src="../assets/profile-images/author-page.jpg" alt="author">
                                    <div class="author-data-wrapper">
                                        <span class="author-name-title">James Spiegel</span>
                                        <span class="time">19 hours ago</span>
                                    </div>
                                </div>
                                <div class="block-three-dots">
                                    <div class="dropdown-block-three-dots">
                                        <div class="dropbtn"><i class="fas fa-ellipsis-h"></i></div>
                                        <div class="dropdown-content">
                                            <ul>
                                                <li>
                                                    <a href="#">Edit Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Delete Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Turn Off Notifications</a>
                                                </li>
                                                <li>
                                                    <a href="#">Select As Featured</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque.
                            </p>
                            <div class="post-info">
                                <div class="post-heart">
                                    <i class="far fa-heart"></i>
                                    <span class="post-heart-number">8</span>
                                </div>
                                <ul class="friends-images">
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic7.jpg" alt="friend">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic8.jpg" alt="friend">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic9.jpg" alt="friend">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic10.jpg" alt="friend">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic11.jpg" alt="friend">
                                    </li>
                                </ul>
                                <div class="people-names">
                                    <span class="name-one">Jenny,</span>
                                    <span class="name-two">Robert</span>
                                    <span class="more-likes">and <br> 6 more liked this</span>
                                </div>
                                <div class="people-comments">
                                    <div class="people-message-icon">
                                        <i class="far fa-comment-alt"></i>
                                        <span class="comment-number">17</span>
                                    </div>
                                    <div class="share-icon">
                                        <i class="fas fa-share"></i>
                                        <span class="share-number">24</span>
                                    </div>
                                </div>
                            </div>
                            <div class="center-first-block-side-icons">
                                <div class="trophy-side-icon">
                                    <i class="fas fa-trophy"></i>
                                </div>
                                <div class="heart-side-icon">
                                    <i class="far fa-heart"></i>
                                </div>
                                <div class="comments-side-icon">
                                    <i class="far fa-comment-alt"></i>
                                </div>
                                <div class="share-side-icon">
                                    <i class="fas fa-share"></i>
                                </div>
                            </div>
                        </div>
                        <div class="center-second-block">
                            <div class="author-container">                           
                                <div class="author-data-block">
                                    <img src="../assets/profile-images/author-page.jpg" alt="author">
                                    <div class="author-data-wrapper">
                                        <div class="author-data">
                                            <span class="author-name-title">James Spiegel</span>
                                            <span class="shared-photo">shared</span>
                                            <a href="#">Diana Jameson</a>
                                            <span class="apostrophe">'s</span> 
                                            <a href="#">photo</a>
                                        </div>
                                        <span class="time">7 hours ago</span>
                                    </div>
                                </div>
                                <div class="block-three-dots">
                                    <div class="dropdown-block-three-dots">
                                        <div class="dropbtn"><i class="fas fa-ellipsis-h"></i></div>
                                        <div class="dropdown-content">
                                            <ul>
                                                <li>
                                                    <a href="#">Edit Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Delete Post</a>
                                                </li>
                                                <li>
                                                    <a href="#">Turn Off Notifications</a>
                                                </li>
                                                <li>
                                                    <a href="#">Select As Featured</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Hi! Everyone should check out these amazing photographs that my friend shot the past week.
                                Here’s one of them...leave a kind comment!
                            </p>
                            <div class="post-photo">
                                <img src="../assets/profile-images/post-photo6.jpg" alt="photo">
                            </div>
                            <div class="author-data-block">
                                <span class="author-dot"></span>
                                <img src="../assets/profile-images/avatar8-sm.jpg" alt="author">
                                <div class="author-data-wrapper">
                                    <span class="author-name-title">Diana Jameson</span>
                                    <span class="time">16 hours ago</span>
                                </div>
                            </div>
                            <p>
                                Here’s the first photo of our incredible photoshoot from yesterday. 
                                If you like it please say so and tel me what you wanna see next!
                            </p>
                            <div class="post-info">
                                <div class="post-heart">
                                    <i class="far fa-heart"></i>
                                    <span class="post-heart-number">15</span>
                                </div>
                                <ul class="friends-images">
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic7.jpg" alt="friend">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic8.jpg" alt="friend">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic9.jpg" alt="friend">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic10.jpg" alt="friend">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/friend-harmonic11.jpg" alt="friend">
                                    </li>
                                </ul>
                                <div class="people-names">
                                    <span class="name-one">Diana,</span>
                                    <span class="name-two">Nicholas</span>
                                    <span class="more-likes">and <br> 13 more liked this</span>
                                </div>
                                <div class="people-comments">
                                    <div class="people-message-icon">
                                        <i class="far fa-comment-alt"></i>
                                        <span class="comment-number">0</span>
                                    </div>
                                    <div class="share-icon">
                                        <i class="fas fa-share"></i>
                                        <span class="share-number">16</span>
                                    </div>
                                </div>
                            </div>
                            <div class="center-second-block-side-icons">
                                <div class="heart-side-icon">
                                    <i class="far fa-heart"></i>
                                </div>
                                <div class="comments-side-icon">
                                    <i class="far fa-comment-alt"></i>
                                </div>
                                <div class="share-side-icon">
                                    <i class="fas fa-share"></i>
                                </div>
                            </div>
                        </div>
                        <div class="more-content-blocks">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>

                    <div class="right-block">    
                        <div class="right-side-first-block">
                            <div class="right-side-first-block-title">
                                <h6 class="title-photos">Last Photos</h6>
                            </div>
                            <div class="photos-content">
                                <ul class="photos">
                                    <li>
                                        <img src="../assets/profile-images/last-photo10-large.jpg">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/last-photo11-large.jpg">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/last-photo12-large.jpg">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/last-photo13-large.jpg">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/last-photo14-large.jpg">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/last-photo15-large.jpg">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/last-photo16-large.jpg">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/last-photo17-large.jpg">
                                    </li>
                                    <li>
                                        <img src="../assets/profile-images/last-photo18-large.jpg">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="right-side-second-block">
                            <div class="right-side-second-block-title">
                                <h6 class="title-name">James's Poll</h6>
                            </div>
                            <div class="right-side-second-block-content">
                                <p>If you had to choose, which actor do you prefer to be the next Darkman?</p>
                                <div class="vote-content">
                                    <div class="vote-info-first">                                   
                                        <label class="vote-title">Thomas Bale
                                            <input type="radio" checked="checked" name="radio">
                                            <span class="checkmark"></span>
                                        </label>                                 
                                        <span class="vote-percent">62%</span>
                                    </div>
                                    <div class="completion-line">
                                        <div class="max-range-line progress-moved">
                                            <span class="filled-first"></span>
                                        </div>
                                    </div>
                                    <div class="voted-number">12 friends voted for this</div>
                                    <ul class="friends-voted-images">
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic1.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic2.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic3.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic4.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic5.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic6.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic7.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic8.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic9.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <span class="other-users">+3</span>
                                        </li>
                                    </ul>
                                    <div class="vote-info-second">                                   
                                        <label class="vote-title">Ben Robertson
                                            <input type="radio" checked="checked" name="radio">
                                            <span class="checkmark"></span>
                                        </label>                                 
                                        <span class="vote-percent">27%</span>
                                    </div>
                                    <div class="completion-line">
                                        <div class="max-range-line progress-moved">
                                            <span class="filled-second"></span>
                                        </div>
                                    </div>
                                    <div class="voted-number">7 friends voted for this</div>
                                    <ul class="friends-voted-images">
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic7.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic8.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic9.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic10.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic11.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic12.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic13.jpg" alt="friend">
                                        </li>
                                    </ul>

                                    <div class="vote-info-third">                                   
                                        <label class="vote-title">Michael Streiton
                                            <input type="radio" checked="checked" name="radio">
                                            <span class="checkmark"></span>
                                        </label>                                 
                                        <span class="vote-percent">11%</span>
                                    </div>
                                    <div class="completion-line">
                                        <div class="max-range-line progress-moved">
                                            <span class="filled-third"></span>
                                        </div>
                                    </div>
                                    <div class="voted-number">2 friends voted for this</div>
                                    <ul class="friends-voted-images">
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic14.jpg" alt="friend">
                                        </li>
                                        <li>
                                            <img src="../assets/profile-images/friend-harmonic15.jpg" alt="friend">
                                        </li>
                                    </ul>
                                    <button type="button" class="vote-button">Vote Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="back-to-top">
                        <i class="fas fa-arrow-up"></i>
                    </div>
                </div><!-- main-content -->
            </div><!-- main-container -->
            <!-- Modals -->
            <div class="modal fade" id="videoModalFirst">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <iframe width="100%" height="350px" src="https://www.youtube.com/embed/jW8UlrtcEac">
                            </iframe>
                        </div>            
                    </div>
                </div>
            </div>
            <div class="modal fade" id="videoModalSecond">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/0J2QdDbelmY">
                            </iframe>
                        </div>               
                    </div>
                </div>
            </div> 
            <div class="modal fade" id="videoModalThird">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/ifXalt3MJtM">
                            </iframe>
                        </div>               
                    </div>
                </div>
            </div>
            <div class="modal fade" id="videoModalFourth">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/9C1BCAgu2I8">
                            </iframe>
                        </div>               
                    </div>
                </div>
            </div>
            <div class="modal fade" id="videoModalFifth">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/EHV0zs0kVGg">
                            </iframe>
                        </div>               
                    </div>
                </div>
            </div>
        </section><!-- main-container-wrapper -->
        
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

.dropdown-settings-button .dropdown-content li a {
    display: block;
    font-weight: 700;
    color: #515365;
    font-size: 12px;
    padding: 7px 0;
}

.dropdown-settings-button:hover .dropdown-content {
    display: block;
}

.dropdown-settings-button .dropdown-content li a:hover {
    color: #ff5e3a;
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

.left-side-first-block {
    border-radius: 5px;
    /*border: 1px solid #e6ecf5;*/
    background: #fff;
    margin-bottom: 15px;
    border: 1px solid gray;
    height: fit-content;
}

.left-side-first-block-title {
    padding: 23px 25px 18px;
    border-bottom: 1px solid #e6ecf5;
}

.title-badges {
    color: #515365;
    font-weight: 700;
    font-size: 14px;
}

.badges-block-content {
    padding: 24px 23px 23px;
}

.badges {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 0 0 -20px -18px;
}

.badges li {
    margin: 0 0 20px 8px;
}
   
.orange-badge,
.blue-badge,
.green-badge {
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
    left: 32px;
}

.blue-badge {
    background-color: #38a9ff;
    left: 124px;
}

.green-badge {
    background-color: #08ddc1;
    top: 57px;
    left: 124px;
}

.center-first-block {
    position: relative;
    border-radius: 5px;
    /*border: 1px solid #e6ecf5;*/
    background: #fff;
    padding: 25px;
    border: 1px solid gray;
    height: fit-content;
    margin-bottom: 15px;
}

.author-container {
    display: flex;
    justify-content: space-between;
}

.author-data-block {
    display: flex;
}

.author-data-block img {
    border-radius: 100%;
    margin-right: 12px;
    width: 40px;
    height: 40px;
}

.author-data-wrapper {
    display: flex;
    flex-direction: column;
}

.author-name-title {
    font-size: 14px;
    color: #515365;
    font-weight: 700;
    cursor: pointer;
}

.author-name-title:hover {
    color: #ff5e3a;
}

.time {
    font-size: 12px;
    color: #9a9fbf;
}

.block-three-dots {
    color: #9a9fbf;
    cursor: pointer;
}

.dropdown-block-three-dots {
    position: relative;
    display: inline-block;
}

.dropdown-block-three-dots .dropdown-content {
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

.dropdown-block-three-dots .dropdown-content::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 168px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
}

.dropdown-block-three-dots .dropdown-content li a {
    display: block;
    font-weight: 700;
    color: #515365;
    font-size: 12px;
    padding: 7px 0;
}

.dropdown-block-three-dots:hover .dropdown-content {
    display: block;
}

.dropdown-block-three-dots .dropdown-content li a:hover {
    color: #ff5e3a;
}

p {
    margin: 25px 0;
    font-size: 14px;
    color: #9a9fbf;
}

.post-info {
    display: flex;
    padding: 20px 0 0;
    border-top: 1px solid #e6ecf5;
    align-items: center;
}

.post-heart {
    margin-right: 15px;
    cursor: pointer;
}

.post-heart:hover .fa-heart,
.post-heart:hover .post-heart-number {
    color: #ff5e3a;
}

.post-heart .fa-heart {
    color: #9a9fbf;
    margin-right: 8px;
}

.post-heart-number {
    color: #9a9fbf;
}

.friends-images {
    display: flex;
    margin-right: 27px;
}

.friends-images li {
    margin-right: -12px;
}

.name-one {
    color: #515365;
    font-weight: 700;
    font-size: 12px;
}

.name-two {
    color: #515365;
    font-weight: 700;
    font-size: 12px;
}

.friends-images img {
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
}

.more-likes {
    color: #9a9fbf;
    font-size: 12px;
}

.people-comments {
    display: flex;
    margin-left: auto;
}

.people-message-icon {
    margin-right: 15px;
    cursor: pointer;
}

.people-message-icon .fa-comment-alt {
    color: #c2c5d9;
    margin-right: 5px;
}

.comment-number {
    color: #888da8;
}

.people-message-icon:hover .fa-comment-alt,
.people-message-icon:hover .comment-number {
    color: #ff5e3a;
}

.share-icon {
    cursor: pointer;
}

.share-icon .fa-share {
    color: #c2c5d9;
    margin-right: 5px;
}

.share-number {
    color: #888da8;
}

.share-icon:hover .fa-share,
.share-icon:hover .share-number {
    color: #ff5e3a;
}

.right-side-first-block {
    border-radius: 5px;
    /*border: 1px solid #e6ecf5;*/
    background: #fff;
    border: 1px solid gray;
    margin-bottom: 15px;
}

.right-side-first-block-title {
    padding: 23px 25px 18px;
    border-bottom: 1px solid #e6ecf5;
}

.title-photos {
    color: #515365;
    font-weight: 700;
    font-size: 14px;
}

.photos-content {
    padding: 24px 23px 23px;
}

.photos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.photos li {
    padding: 2px 2px 2px 2px;
    text-align: center;
    width: 33.33%;
}

.photos img {
    width: 100%;
    height: auto;
    border-radius: 4px;
}

.left-side-second-block {
    border-radius: 5px;
    /*border: 1px solid #e6ecf5;*/
    background: #fff;
    margin-bottom: 15px;
    border: 1px solid gray;
    height: fit-content;
}

.left-side-second-block-title {
    padding: 23px 25px 18px;
    border-bottom: 1px solid #e6ecf5;
}

.title-playlist {
    color: #515365;
    font-weight: 700;
    font-size: 14px; 
}

.playlist {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-top: 20px;
}

.playlist li {
    padding: 13px 5px;
}

.first-video,
.second-video,
.third-video,
.fourth-video,
.fifth-video {
    display: flex;
    flex-wrap: wrap;
}

.first-video:hover .play-icon .fa-play,
.second-video:hover .play-icon .fa-play,
.third-video:hover .play-icon .fa-play,
.fourth-video:hover .play-icon .fa-play,
.fifth-video:hover .play-icon .fa-play {
    position: absolute;
    left: 12px;
    top: 10px;
    color: #fff;
    opacity: 0.8;
    cursor: pointer;
}

.one,
.two,
.three,
.four,
.five {
    margin-right: 8px;
    font-size: 10px;
    color: #888da8;
    align-items: center;
    display: flex;
}

.play-icon {
    position: relative;
    cursor: pointer;
}

.play-icon img {
    border-radius: 4px;
    width: 40px;
    height: 40px;
}

.play-icon .fa-play {
    position: absolute;
    left: 12px;
    top: 10px;
    color: #fff;
    opacity: 0;
    cursor: pointer;
}

.composition {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    margin-right: auto;
}

.composition-name {
    font-size: 12px;
    font-weight: 600;
    color: #515365;
}

.composition-author {
    font-size: 11px;
    color: #888da8;
}

.composition-name:hover,
.composition-author:hover {
    color: #ff5e3a;
    cursor: pointer;
}

.composition-time {
    font-size: 11px;
    margin-right: 5px;
    color: #888da8;
}

.center-first-block-side-icons {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: -17px;
    top: 20px;
}

.trophy-side-icon,
.heart-side-icon,
.comments-side-icon,
.share-side-icon {
    background-color: #9a9fbf;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
}

.trophy-side-icon .fa-trophy,
.heart-side-icon .fa-heart,
.comments-side-icon .fa-comment-alt,
.share-side-icon .fa-share {
    color: #fff;
}

.trophy-side-icon:hover {
    background-color: #fdc014;
}

.heart-side-icon:hover,
.comments-side-icon:hover,
.share-side-icon:hover {
    background-color: #ff5e3a;
}

.center-second-block {
    position: relative;
    border-radius: 5px;
    /*border: 1px solid #e6ecf5;*/
    background: #fff;
    padding: 25px;
    border: 1px solid gray;
    height: fit-content;
}

.post-photo {
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    margin-bottom: 25px;
}

.post-photo img {
    display: block;
    width: 100%;
}

.center-second-block-side-icons {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: -17px;
    top: 20px;
}

.author-dot {
    width: 9px;
    height: 9px;
    background-color: #fafbfd;
    border-radius: 50%;
    border: 2px solid #c2c5d9;
    margin-top: 13px;
    margin-right: 20px;
}

.author-data a {
    color: #ff5e3a;
    font-size: 14px;
    font-weight: 700;
}

.shared-photo {
    color: #9a9fbf;
    font-size: 12px;
    cursor: default;
}

.apostrophe {
    color: #9a9fbf;
    font-size: 14px;
    font-weight: 600;
}

.right-side-second-block {
    border-radius: 5px;
    /*border: 1px solid #e6ecf5;*/
    background: #fff;
    border: 1px solid gray;
    height: fit-content;
}

.right-side-second-block-title {
    padding: 23px 25px 18px;
    border-bottom: 1px solid #e6ecf5;
}

.title-name {
    color: #515365;
    font-weight: 700;
    font-size: 14px;
}

.right-side-second-block-content {
    padding: 24px;
}

.right-side-second-block-content p {
    font-size: 13px;
    margin-top: 0;
}

.vote-info-first,
.vote-info-second,
.vote-info-third {
    display: flex;
    justify-content: space-between;
}

/* custom radio button */
.vote-title {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    color: #515365;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.vote-title input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    border: 1px solid gray;
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.vote-title:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the radio button is checked, add a white background and orange border */
.vote-title input:checked ~ .checkmark {
    background-color: #fff;
    border: 2px solid #ff5e3a;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.vote-title input:checked ~ .checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.vote-title .checkmark:after {
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    background-color: #ff5e3a;
}

.vote-percent {
    font-size: 14px;
    color: #515365;
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
}

.filled-first,
.filled-second,
.filled-third {
    position: absolute;
    height: 6px; 
    border-radius: 10px;
    top: 0;
    left: 0;
}

.progress-moved .filled-first {
    width: 62%; 
    background-color: #ff5e3a;   
    animation: progressAnimationFirst 3s;
}

.progress-moved .filled-second {
    width: 27%; 
    background-color: #ff5e3a;   
    animation: progressAnimationSecond 3s;
}

.progress-moved .filled-third {
    width: 11%; 
    background-color: #ff5e3a;   
    animation: progressAnimationThird 3s;
}

@keyframes progressAnimationFirst {
    0%   { width: 0%;}
    100% { width: 62%;}
}

@keyframes progressAnimationSecond {
    0%   { width: 0%;}
    100% { width: 27%;}
}

@keyframes progressAnimationThird {
    0%   { width: 0%;}
    100% { width: 11%;}
}

.voted-number {
    font-size: 13px;
    color: #9a9fbf;
    margin: 10px 0;
}

.friends-voted-images {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.friends-voted-images li {
    margin-right: -12px;
}

.friends-voted-images img {
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
}

.other-users {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    display: block;
    margin-right: -12px;
    background-color: #ff5e3a;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    font-weight: 700;
    align-items: center;
    display: flex;
    justify-content: center;
}

.vote-button {
    border: 1px solid #d8dbe6;
    width: 100%;
    background-color: #fff;
    height: 40px;
    color: #888da8;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    margin: 15px 0;
}

.vote-button:hover {
    color: #9a9fbf;
}

button[type=button] {
    outline: none;
}

.modal-body {
    padding: 0 5px 5px 5px;
}

.more-content-blocks {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccd1e0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    cursor: pointer;
    color: white;
    font-size: 20px;
    transition: 0.3s;
}

.more-content-blocks:hover {
    color: #ff5e3a;
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
    .green-badge {
        left: 172px;
    }

    .main-container {
        width: 80%;
    }

    .play-icon img {
        width: 36px;
        height: 36px;
    }
}

@media (max-width: 1216px) {
    .green-badge {
        left: 80px;
        top: 116px;
    }
}

@media (max-width: 1199px) {
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

    p {
        font-size: 12px;
    }

    .more-content-blocks {
        margin: 40px auto 25px auto;
    }

    .green-badge {
        left: 355px;
        top: 0;
    }
}

@media (max-width: 1105px)  {
    .green-badge {
        left: 32px;
        top: 58px;
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

    .people-message-icon,
    .share-icon {
        font-size: 14px;
    }
}

@media (max-width: 977px) {
    .green-badge {
        left: 77px;
        top: 58px;
    }
}

@media (max-width: 849px) {
    .green-badge {
        left: 125px;
        top: 58px;
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

    .center-first-block-side-icons {
        position: absolute;
        display: flex;
        flex-direction: row;
        right: 33px;
        top: -19px;
    }

    .trophy-side-icon,
    .heart-side-icon,
    .comments-side-icon,
    .share-side-icon {
        margin-right: 8px;
    }

    .center-second-block-side-icons {
        position: absolute;
        display: flex;
        flex-direction: row;
        right: 35px;
        top: -16px;
    }
}

@media (max-width: 580px) {
    .main-container {
        width: 90%;
    }
}

@media (max-width: 480px) {
    .author-main-content {
        left: 35%;
    }

    .post-info {
        display: flex;
        flex-wrap: wrap;
    }

    .people-comments {
        margin-left: 0;
    }
}

@media (max-width: 350px) {
    .author-main-content {
        left: 26%;
    }
}
</style>
