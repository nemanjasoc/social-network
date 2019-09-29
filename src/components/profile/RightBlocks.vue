<template>
    <div class="right-block">    
        <div class="right-side-first-block">
            <div class="right-side-first-block-title">
                <h6 class="title-photos">Last Photos</h6>
            </div>
            <div class="photos-content">
                <ul class="photos">
                    <li v-for="photo in photos" :key="photo.id">
                        <img :src="getImgUrl(photo.img)" :alt="photo.img">
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
                <div class="vote-content" v-for="vote in votes" :key="vote.id">
                    <div class="vote-info-first">                                   
                        <label class="vote-title">{{ vote.title }}
                            <input type="radio" checked="checked" name="radio">
                            <span class="checkmark"></span>
                        </label>                                 
                        <span class="vote-percent">{{ vote.percent }}</span>
                    </div>
                    <div class="completion-line">
                        <div class="max-range-line progress-moved">
                            <span :class="vote.filled"></span>
                        </div>
                    </div>
                    <div class="voted-number">{{ vote.number }}</div>
                    <ul class="friends-voted-images">
                        <li v-for="image in vote.images" :key="image.id">
                            <img :src="getImgUrl(image.user)" :alt="image.user">
                        </li>
                        <li><span :class="vote.other_users_color">{{ vote.other_users_number }}</span>
                        </li>
                    </ul>
                </div>
                <button type="button" class="vote-button">Vote Now!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photos: this.$store.state.rightBlocks.photos, 
            votes: this.$store.state.rightBlocks.votes
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../../assets/profile-images/'+pic)
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

p {
    margin: 25px 0;
    font-size: $base-font-size - 2;
    color: #9a9fbf;
}

.right-side-first-block {
    @include right-block;
    margin-bottom: 15px;
}

.right-side-first-block-title {
    @include header-block-title;
}

.title-photos {
    @include right-header-block-title;
}

.photos-content {
    padding: 24px 23px 23px;
}

.photos {
    @include flex-wrap;
    align-items: center;

    li {
        padding: 2px 2px 2px 2px;
        text-align: center;
        width: 33.33%;
        cursor: pointer;
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 4px;
    }
}

.right-side-second-block {
    @include right-block;
}

.right-side-second-block-title {
    @include header-block-title;
}

.title-name {
    @include right-header-block-title;
}

.right-side-second-block-content {
    padding: 24px;
}

.right-side-second-block-content p {
    font-size: $base-font-size - 3;
    margin-top: 0;
}

.vote-info-first {
    @include flex-space-between;
}

/* custom radio button */
.vote-title {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: $base-font-size - 3;
    color: #515365;
    @include user-select-vendors;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;

        &:checked ~ .checkmark {
            background-color: #fff;
            border: 1px solid $orange-main-color;

            &:after {
                @include visible-opacity;
            }
        }
    }

    .checkmark:after {
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        background-color: $orange-main-color;
    }
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px solid #c3c1c1;
    border-radius: 50%;
    z-index: 1031;

    &:after {
        content: "";
        position: absolute;
        visibility: hidden;
        opacity: 0;
        @include transition-vendors(opacity .5s linear);
    }
}

.vote-percent {
    font-size: $base-font-size - 3;
    color: #515365;
}

.completion-line {
    @include flex-center;
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
    background-color: $orange-main-color;  
    animation: progressAnimationFirst 3s;
}

.progress-moved .filled-second {
    width: 27%; 
    background-color: $orange-main-color;   
    animation: progressAnimationSecond 3s;
}

.progress-moved .filled-third {
    width: 11%; 
    background-color: $orange-main-color;   
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
    font-size: $base-font-size - 3;
    color: #9a9fbf;
    margin: 10px 0;
}

.friends-voted-images {
    @include flex-wrap;
    margin-bottom: 20px;

    li {
        margin-right: -12px;
    }

    img {
        border-radius: 50%;
        border: 2px solid #fff;
        cursor: pointer;
    }
}

.other-users {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-right: -12px;
    background-color: $orange-main-color;
    color: #fff;
    font-size: $base-font-size - 4;
    cursor: pointer;
    font-weight: 700;
    align-items: center;
    @include flex-center;
    opacity: 0.8;
}

.vote-button {
    border: 1px solid #d8dbe6;
    width: 100%;
    background-color: #fff;
    height: 40px;
    color: #888da8;
    border-radius: 4px;
    font-size: $base-font-size - 4;
    font-weight: 700;
    margin: 15px 0;

    &:hover {
        color: #9a9fbf;
    }
}

button[type="button"] {
    outline: none;
}

/*media query*/
@media only screen and (max-width: 1199px) {
    .title-photos,
    .title-name,
    .right-side-second-block-content p {
        font-size: $base-font-size - 4;
    }
}
</style>
