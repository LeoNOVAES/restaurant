import Vue from "vue";
import Router from "vue-router";


const Index = () => import("@/Index");
const Home = () => import("@/Home");

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
        }   
    
    ]
});

export default router;