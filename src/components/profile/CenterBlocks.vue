<template>
    <div class="center-block">
        <div class="center-first-block">
            <div class="author-container">                           
                <div class="author-data-block">
                    <img src="../../assets/profile-images/author-page.jpg" alt="author">
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
                                    <a href="#" v-for="li in dropdownContent" :key="li.id">{{ li.text }}</a>
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
                    <li v-for="image in postInfoImagesFirstBlock" :key="image.id">
                        <img :src="getImgUrl(image.friend)" :alt="image.friend">
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
                    <img src="../../assets/profile-images/author-page.jpg" alt="author">
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
                                    <a href="#" v-for="li in dropdownContent" :key="li.id">{{ li.text }}</a>
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
                <img src="../../assets/profile-images/post-photo6.jpg" alt="photo">
            </div>
            <div class="author-data-block">
                <span class="author-dot"></span>
                <img src="../../assets/profile-images/avatar8-sm.jpg" alt="author">
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
                    <li v-for="image in postInfoImagesSecondBlock" :key="image.id">
                        <img :src="getImgUrl(image.friend)" :alt="image.friend">
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
</template>

<script>
export default {
    data() {
        return {
            dropdownContent: this.$store.state.centerBlocks.dropdownContent,
            postInfoImagesFirstBlock: this.$store.state.centerBlocks.postInfoImagesFirstBlock,
            postInfoImagesSecondBlock: this.$store.state.centerBlocks.postInfoImagesSecondBlock
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

a:link {
    text-decoration: none;
}

.center-first-block {
    @include center-block; 
    margin-bottom: 15px;
}

.author-container {
    @include flex-space-between;
}

.author-data-block {
    display: flex;

    img {
        border-radius: 100%;
        margin-right: 12px;
        width: 40px;
        height: 40px;
    }
}

.author-data-wrapper {
    @include flex-column;
}

.author-name-title {
    font-size: $base-font-size - 2;
    color: #515365;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: $orange-main-color;
    }
}

.time {
    font-size: $base-font-size - 4;
    color: #9a9fbf;
}

.block-three-dots {
    color: #9a9fbf;
    cursor: pointer;
}

.dropdown-block-three-dots {
    position: relative;
    display: inline-block;

    &:hover .dropdown-content {
        @include visible-opacity;
    }

    .dropdown-content {
        visibility: hidden;
        opacity: 0;
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
        @include transition-vendors(opacity .3s ease);

        &::after {
            @include after-arrow;
            left: 168px;
        }

        li a {
            display: block;
            font-weight: 700;
            color: #515365;
            font-size: $base-font-size - 4;
            padding: 7px 0;

            &:hover {
                color: $orange-main-color;
            }
        }
    }
}

p {
    margin: 25px 0;
    font-size: $base-font-size - 2;
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

    &:hover .fa-heart,
    &:hover .post-heart-number {
        color: $orange-main-color;
    }
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

    li {
        margin-right: -12px;
    }

    img {
        border-radius: 50%;
        border: 2px solid #fff;
        cursor: pointer;
    }
}

.name-one,
.name-two {
    color: #515365;
    font-weight: 700;
    font-size: $base-font-size - 4;
}

.more-likes {
    color: #9a9fbf;
    font-size: $base-font-size - 4;
}

.people-names {
    margin-right: 5px;
}

.people-comments {
    display: flex;
    margin-left: auto;
}

.people-message-icon {
    margin-right: 15px;
    cursor: pointer;

    &:hover .fa-comment-alt,
    &:hover .comment-number {
        color: $orange-main-color;
    }
}

.people-message-icon .fa-comment-alt,
.share-icon .fa-share {
    color: #c2c5d9;
    margin-right: 5px;
}

.comment-number,
.share-number {
    color: #888da8;
}

.share-icon {
    cursor: pointer;

    &:hover .fa-share,
    &:hover .share-number {
        color: $orange-main-color;
    }
}

.center-first-block-side-icons {
    @include center-block-side-icons;
}

.trophy-side-icon {
    @include side-icons;
    @include transition-vendors(background-color .2s ease);

    &:hover {
        background-color: #fdc014;
    }
}

.heart-side-icon,
.comments-side-icon,
.share-side-icon {
    @include side-icons;
    @include transition-vendors(background-color .2s ease);

    &:hover {
        background-color: $orange-main-color;
    }
}

.trophy-side-icon .fa-trophy,
.heart-side-icon .fa-heart,
.comments-side-icon .fa-comment-alt,
.share-side-icon .fa-share {
    color: #fff;
}

.center-second-block {
    @include center-block; 
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
    @include center-block-side-icons;
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
    color: $orange-main-color;
    font-size: $base-font-size - 2;
    font-weight: 700;
}

.shared-photo {
    color: #9a9fbf;
    font-size: $base-font-size - 4;
    cursor: default;
}

.apostrophe {
    color: #9a9fbf;
    font-size: $base-font-size - 2;
    font-weight: 600;
}

.more-content-blocks {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccd1e0;
    padding: 20px;
    @include flex-center;
    align-items: center;
    margin: 40px auto;
    cursor: pointer;
    color: #fff;
    font-size: $base-font-size + 4;
    @include transition-vendors(color .3s linear);

    &:hover {
        color: $orange-main-color;
    }
}

/*media query*/
@media only screen and (max-width: 1199px) {
    .author-name-title,
    p,
    .post-heart,
    .people-message-icon,
    .share-icon,
    .author-data a,
    .apostrophe {
        font-size: $base-font-size - 4;
    }

    .time {
        font-size: $base-font-size - 5;
    }
}

@media only screen and (max-width: 480px) {
    .post-info {
        @include flex-wrap;
    }

    .people-comments {
        margin-left: 0;
    }
}
</style>
