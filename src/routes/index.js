import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView  from '../views/CreatedListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    //mode 추가로 url에 # 제거
  mode:'history',
  routes: [
    {
        path:'/',
        redirect: '/news',
    },
    {
        //path: url에 대한 정보
        path: '/news', 
        //component : url 주소로 갔을 때 표시될 컴포넌트
        name: 'news',
        component: NewsView,
        // component: createListView('NewsView'),
        beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            setTimeout( () => {
    
            store.dispatch("FETCH_LIST", to.name)
            .then( () => {
                console.log('fetched');
                //bus.$emit('end:spinner');
                next();
            })
            .catch((error) =>{
                console.log(error);
            });
            }, 300)
        }
    },
    {

        path: '/ask',
        name: 'ask',
        component: AskView,
        beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            setTimeout( () => {
    
            store.dispatch("FETCH_LIST", to.name)
            .then( () => {
                console.log('fetched');
                
                //bus.$emit('end:spinner');
                next();
            })
            .catch((error) =>{
                console.log(error);
            });
            }, 300)
        }
    },
    {

        path: '/jobs',
        name: 'jobs',
        component: createListView('JobsView'),
    },
    {
        path:'/user/:id',
        component: UserView,
    },
    {
        path:'/item/:id',
        component: ItemView,
    }
  ]
})