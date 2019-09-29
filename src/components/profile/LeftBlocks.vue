<template>
    <div>
        <div class="left-side-block">                   
            <div class="left-side-first-block">
                <div class="left-side-first-block-title">
                    <h6 class="title-badges">James's Badges</h6>
                </div>
                <div class="badges-block-content">
                    <ul class="badges">
                        <li v-for="badge in badges" :key="badge.id">
                            <img :src="getImgUrl(badge.img)" :alt="badge.img">
                            <div :class="badge.color">{{ badge.number }}</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="left-side-second-block">
                <div class="left-side-second-block-title">
                    <h6 class="title-playlist">My Spotify Playlist</h6>
                </div>                      
                <ol class="playlist">
                    <li class="video" v-for="song in playlist" :key="song.id">
                        <span class="song-number">{{ song.number }}</span>                             
                        <div class="play-icon" data-toggle="modal" data-target="#videoModal" @click="playSong(song)">
                            <img :src="getImgUrl(song.img)" :alt="song.img">
                            <i class="fas fa-play"></i>
                        </div>                               
                        <div class="composition">
                            <span class="composition-name">{{ song.name }}</span>
                            <span class="composition-author">{{ song.author }}</span>
                        </div>
                        <span class="composition-time">{{ song.time }}</span>
                    </li>
                </ol>                       
            </div>
        </div>
        
        <div class="modal fade" id="videoModal" @click="closeVideo()">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <iframe width="100%" height="350px" :src="currentVideo"></iframe>
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
            currentVideo: '',
            playlist: this.$store.state.leftBlocks.playlist,
            badges: this.$store.state.leftBlocks.badges
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../../assets/profile-images/'+pic);
        },
        playSong(song) {
            this.currentVideo = song.video;
        },
        closeVideo() {
            this.currentVideo = '';
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

ul, li {
    @include ul-li;
}

.left-side-first-block {
    @include left-block;
}

.left-side-first-block-title {
    @include header-block-title;
}

.title-badges {
    color: #515365;
    font-weight: 700;
    font-size: $base-font-size - 2;
}

.badges-block-content {
    padding: 24px 23px 23px;
}

.badges {
    @include flex-wrap;
    margin: 0 0 -20px -18px;

    li {
        position: relative;
        margin: 0 0 20px 15px;
    }
}

.orange-badge {
    @include left-block-badges;
    background-color: $orange-main-color;
}

.blue-badge {
    @include left-block-badges;
    background-color: #38a9ff;
}

.green-badge {
    @include left-block-badges;
    background-color: #08ddc1;
}

.left-side-second-block {
    @include left-block;
}

.left-side-second-block-title {
    @include header-block-title;
}

.title-playlist {
    color: #515365;
    font-weight: 700;
    font-size: $base-font-size - 2; 
}

.playlist {
    @include flex-column;
    padding-left: 5px;
    padding-top: 20px;

    li {
        padding: 13px 5px;
    }
}

.video {
    @include flex-wrap;

    &:hover .play-icon .fa-play {
        position: absolute;
        left: $base-font-size - 4;
        top: 10px;
        color: #fff;
        opacity: 0.8;
        cursor: pointer;
    }
}

.song-number {
    margin-right: 8px;
    font-size: $base-font-size - 6;
    color: #888da8;
    align-items: center;
    display: flex;
}

.play-icon {
    position: relative;
    cursor: pointer;

    img {
        border-radius: 4px;
        width: 40px;
        height: 40px;
    }

    &:hover .fa-play {
        @include visible-opacity;
    }
}

.play-icon .fa-play {
    visibility: hidden;
    position: absolute;
    left: 12px;
    top: 10px;
    color: #fff;
    opacity: 0;
    cursor: pointer;
    @include transition-vendors(opacity .3s ease);
}

.composition {
    @include flex-column;
    margin-left: 8px;
    margin-right: auto;
}

.composition-name {
    font-size: $base-font-size - 4;
    font-weight: 600;
    color: #515365;
    @include transition-vendors(color .3s linear);

    &:hover {
        @include orange-and-pointer;
    }
}

.composition-author {
    font-size: $base-font-size - 5;
    color: #888da8;
    @include transition-vendors(color .3s linear);

    &:hover {
        @include orange-and-pointer;
    }
}

.composition-time {
    font-size: $base-font-size - 5;
    margin-right: 5px;
    color: #888da8;
}

.modal-body {
    padding: 0 5px 5px 5px;
}

/*media query*/
@media only screen and (max-width: 1399px) {
    .play-icon img {
        width: 36px;
        height: 36px;
    }
}

@media only screen and (max-width: 1199px) {
    .title-badges,
    .title-playlist {
        font-size: $base-font-size - 4;
    }
}

@media only screen and (max-width: 768px) {
    .composition-name {
        font-size: $base-font-size - 5;
    }
    
    .composition-author {
        font-size: $base-font-size - 6;
    }
}
</style>
