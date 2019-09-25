import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import leftBlocks from './modules/leftBlocks';
import rightBlocks from './modules/rightBlocks';
import loginPage from './modules/loginPage';
import centerBlocks from './modules/centerBlocks';
import header from './modules/header';
import rightProfileSidebar from './modules/rightProfileSidebar';
import leftProfileSidebar from './modules/leftProfileSidebar';
import profile from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        
    },
    modules: {
        leftBlocks,
        rightBlocks,
        loginPage,
        centerBlocks,
        header,
        rightProfileSidebar,
        leftProfileSidebar,
        profile
    }
})
