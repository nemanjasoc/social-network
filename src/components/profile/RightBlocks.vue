<template>
    <div class="right-block">    
        <div class="right-side-first-block">
            <div class="right-side-first-block-title">
                <h6 class="title-photos">Last Photos</h6>
            </div>
            <div class="photos-content">
                <ul class="photos">
                    <li><img src="../../assets/profile-images/last-photo10-large.jpg" alt="photo-10"></li>
                    <li><img src="../../assets/profile-images/last-photo11-large.jpg" alt="photo-11"></li>
                    <li><img src="../../assets/profile-images/last-photo12-large.jpg" alt="photo-12"></li>
                    <li><img src="../../assets/profile-images/last-photo13-large.jpg" alt="photo-13"></li>
                    <li><img src="../../assets/profile-images/last-photo14-large.jpg" alt="photo-14"></li>
                    <li><img src="../../assets/profile-images/last-photo15-large.jpg" alt="photo-15"></li>
                    <li><img src="../../assets/profile-images/last-photo16-large.jpg" alt="photo-16"></li>
                    <li><img src="../../assets/profile-images/last-photo17-large.jpg" alt="photo-17"></li>
                    <li><img src="../../assets/profile-images/last-photo18-large.jpg" alt="photo-18"></li>
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
                        <li> <img src="../../assets/profile-images/friend-harmonic1.jpg" alt="friend-1"></li>
                        <li> <img src="../../assets/profile-images/friend-harmonic2.jpg" alt="friend-2"></li>
                        <li> <img src="../../assets/profile-images/friend-harmonic3.jpg" alt="friend-3"></li>
                        <li> <img src="../../assets/profile-images/friend-harmonic4.jpg" alt="friend-4"></li>
                        <li> <img src="../../assets/profile-images/friend-harmonic5.jpg" alt="friend-5"></li>
                        <li> <img src="../../assets/profile-images/friend-harmonic6.jpg" alt="friend-6"></li>
                        <li> <img src="../../assets/profile-images/friend-harmonic7.jpg" alt="friend-7"></li>
                        <li> <img src="../../assets/profile-images/friend-harmonic8.jpg" alt="friend-8"></li>
                        <li> <img src="../../assets/profile-images/friend-harmonic9.jpg" alt="friend-9"></li>
                        <li> <span class="other-users">+3</span></li>
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
                        <li><img src="../../assets/profile-images/friend-harmonic7.jpg" alt="friend-7"></li>
                        <li><img src="../../assets/profile-images/friend-harmonic8.jpg" alt="friend-8"></li>
                        <li><img src="../../assets/profile-images/friend-harmonic9.jpg" alt="friend-9"></li>
                        <li><img src="../../assets/profile-images/friend-harmonic10.jpg" alt="friend-10"></li>
                        <li><img src="../../assets/profile-images/friend-harmonic11.jpg" alt="friend-11"></li>
                        <li><img src="../../assets/profile-images/friend-harmonic12.jpg" alt="friend-12"></li>
                        <li><img src="../../assets/profile-images/friend-harmonic13.jpg" alt="friend-13"></li>
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
                        <li><img src="../../assets/profile-images/friend-harmonic14.jpg" alt="friend-14"></li>
                        <li><img src="../../assets/profile-images/friend-harmonic15.jpg" alt="friend-15"></li>
                    </ul>
                    <button type="button" class="vote-button">Vote Now!</button>
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

p {
    margin: 25px 0;
    font-size: 14px;
    color: #9a9fbf;
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
    cursor: pointer;
}

.photos img {
    width: 100%;
    height: auto;
    border-radius: 4px;
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
    font-size: 13px;
    color: #c3c1c1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.vote-title input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px solid #c3c1c1;
    border-radius: 50%;
}

.vote-title input:checked ~ .checkmark {
    background-color: #fff;
    border: 1px solid #ff5e3a;
}

.checkmark:after {
    content: "";
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: opacity .5s linear;
}

.vote-title input:checked ~ .checkmark:after {
    visibility: visible;
    opacity: 1;
}

.vote-title .checkmark:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    background-color: #ff5e3a;
}

.vote-percent {
    font-size: 13px;
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

/*media query*/
@media (max-width: 1199px) {
    .title-photos,
    .title-name,
    .right-side-second-block-content p {
        font-size: 12px;
    }
}
</style>
