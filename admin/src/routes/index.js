import Vue from "vue";
import Router from "vue-router";

const Index = () => import("@/Index");
const Home = () => import("@/Home");
const Chat = () => import("@/Chat");
const Firebase = () => import("@/Firebase");

Vue.use(Router);
const token = localStorage.getItem("token");

let router = new Router({
    routes:[       
        {
            path:"/",
            name:"Index",
            component: Index
        },
        {
            path:"/home",
            name:"Home",
            beforeEnter:(to,from,next)=>{
                if(!token) next('/')
                else next(true);
            },
            component:Home
        },
        {
            path:"/chat",
            name:"Chat",
            beforeEnter:(to,from,next)=>{
                if(!token) next('/')
                else next(true);
            },
            component:Chat
        },
        {
            path:"/fire",
            name:"Fire",
            beforeEnter:(to,from,next)=>{
                if(!token) next('/')
                else next(true);
            },
            component:Firebase
        }   
    
    ]
});

export default router;