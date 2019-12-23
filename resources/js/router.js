import Router from 'vue-router';
import Vue from 'vue'
import PhaseRoutes from '@j0nz/phase/routes'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: PhaseRoutes
})
