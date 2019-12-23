import Vuex, { Store } from '@vuexcellent/vuex'
import Vue from 'vue'
Vue.use(Vuex)

// modules
import users from './modules/users'

export default new Store({
    modules: {
        users
    }
})
