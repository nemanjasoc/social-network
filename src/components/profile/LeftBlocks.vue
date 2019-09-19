<template>
    <div>
        <div class="left-side-block">                   
            <div class="left-side-first-block">
                <div class="left-side-first-block-title">
                    <h6 class="title-badges">James's Badges</h6>
                </div>
                <div class="badges-block-content">
                    <ul class="badges">
                        <li>
                            <img src="../../assets/profile-images/badge1.png" alt="badge-1">
                            <div class="orange-badge">2</div>
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge4.png" alt="badge-4">
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge3.png" alt="badge-3">
                            <div class="blue-badge">4</div>
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge6.png" alt="badge-6">
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge11.png" alt="badge-11">
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge8.png" alt="badge-8">
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge10.png" alt="badge-10">
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge13.png" alt="badge-13">
                            <div class="green-badge">2</div>
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge7.png" alt="badge-7">
                        </li>
                        <li>
                            <img src="../../assets/profile-images/badge12.png" alt="badge-12">
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
                            <img src="../../assets/profile-images/ws-blue-orchid.jpg" alt="ws-blue-orchid">
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
                            <img src="../../assets/profile-images/ws-seven-nation-army.jpg" alt="ws-seven-nation-army">
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
                            <img src="../../assets/profile-images/rhcp-snow.jpg" alt="rhcp-snow">
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
                            <img src="../../assets/profile-images/sg-mrs-robinson.jpg" alt="sg-mrs-robinson">
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
                            <img src="../../assets/profile-images/bb-everybody.jpg" alt="bb-everybody">
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
        
        <div class="modal fade" id="videoModalFirst">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <iframe width="100%" height="350px" src="https://www.youtube.com/embed/jW8UlrtcEac"></iframe>
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
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/0J2QdDbelmY"></iframe>
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
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/ifXalt3MJtM"></iframe>
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
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/9C1BCAgu2I8"></iframe>
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
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/EHV0zs0kVGg"></iframe>
                    </div>               
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
    margin: 0 0 -20px -18px;
}

.badges li {
    position: relative;
    margin: 0 0 20px 15px;
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
    top: 0px;
    right: -4px;
}

.blue-badge {
    background-color: #38a9ff;
}

.green-badge {
    background-color: #08ddc1;
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
    visibility: hidden;
    position: absolute;
    left: 12px;
    top: 10px;
    color: #fff;
    opacity: 0;
    cursor: pointer;
    -webkit-transition: opacity .3 ease;
    -moz-transition: opacity .3 ease;
    -o-transition: opacity .3 ease;
    transition: opacity .3 ease;
}

.play-icon:hover .fa-play {
    visibility: visible;
    opacity: 1;
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
    -webkit-transition: color .2 linear;
    -moz-transition: color .2 linear;
    -o-transition: color .2 linear;
    transition: color .2 linear;
}

.composition-author {
    font-size: 11px;
    color: #888da8;
    -webkit-transition: color .2 linear;
    -moz-transition: color .2 linear;
    -o-transition: color .2 linear;
    transition: color .2 linear;
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

.modal-body {
    padding: 0 5px 5px 5px;
}

/*media query*/
@media (max-width: 1399px) {
    .play-icon img {
        width: 36px;
        height: 36px;
    }
}

@media (max-width: 1199px) {
    .title-badges,
    .title-playlist {
        font-size: 12px;
    }
}

@media (max-width: 768px) {
    .composition-name {
        font-size: 11px;
    }
    
    .composition-author {
        font-size: 10px;
    }
}
</style>
