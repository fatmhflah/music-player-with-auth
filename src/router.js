import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import FeedComponent from "@/components/FeedComponent.vue";
import {getAuth , onAuthStateChanged} from "firebase/auth";



const routes = [
    { path: '/', name : 'home' , component: HomeComponent},
    { path: '/login' , name: 'login' , component: LoginComponent},
    { path: '/register' , name: 'register' , component: RegisterComponent},
    { path: '/feed' , name: 'feed' , component: FeedComponent  , meta: {
            requiresAuth : true,

        }}


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(getAuth() , (user) => { removeListener() , resolve(user)} , reject)
    })
}
router.beforeEach(async (to , from , next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)){
        if (await getCurrentUser()){
            next()
        } else {
            console.log('you dont have acess')
            next('/')
        }

    } else {
        next()
    }
})
export default router;
