import Index from 'view/index'
import Home from 'view/home'
import Attention from 'view/attention'
import Recommend from 'view/recommend'
import Hotlist from 'view/hotlist'
import Idea from 'view/idea'
import University from 'view/university'
import Inform from 'view/inform'
import Page from 'view/page'
import Detail from 'view/Detail'

export default [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: Index,
    children: [{
        path: '/index',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        children: [{
            path: '/home',
            redirect: '/home/attention'
        }, {
            path: '/home/attention',
            component: Attention
        }, {
            path: '/home/recommend',
            component: Recommend
        }, {
            path: '/home/hotlist',
            component: Hotlist
        }]
    }, {
        path: '/idea',
        component: Idea
    }, {
        path: '/university',
        component: University
    }, {
        path: '/inform',
        component: Inform
    }, {
        path: '/page',
        component: Page
    }]
},
{
    path: '/detail',
    name: 'detail',
    component: Detail
}]