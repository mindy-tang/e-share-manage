import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Cate from '../components/cate/Cate.vue'
import Book from '../components/book/Book.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/welcome',
        children: [
            { path: '/welcome', component: Welcome },
            { path: '/cate', component: Cate },
            { path: '/book', component: Book },
        ]
    }
]

const router = new VueRouter({
    routes
})

//路由导航守卫控制路由权限
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const tokenStr = window.sessionStorage.getItem('token');
    // if (!tokenStr) return next('/login');
    next();
})

export default router