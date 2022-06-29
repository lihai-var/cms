import Vue from 'vue'
import Router from 'vue-router'

import home from './map/home'
import error from './map/error'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        home,
        ...error
    ]
})
