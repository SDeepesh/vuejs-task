import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// Vuex
Vue.use(Vuex);

// Store
export default new Vuex.Store({
    modules:{
        todos
    }
});