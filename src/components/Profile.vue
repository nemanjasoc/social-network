<template>
    <div>
        <app-left-profile-sidebar></app-left-profile-sidebar>
        <app-header></app-header>

        <div class="main-content"></div>

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
.main-content {
    background-color: #edf2f6;
    display: flex;
    position: absolute;
    width: 100%;
    height: calc(100% - 70px);
}
</style>
