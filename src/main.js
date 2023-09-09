import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import router from "./router.js";
import store from "./store/index.js";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqxPZD7CBEWeOrrSdtPOQv_nX4VkcW-DI",
    authDomain: "fir-d805b.firebaseapp.com",
    projectId: "fir-d805b",
    storageBucket: "fir-d805b.appspot.com",
    messagingSenderId: "943376702123",
    appId: "1:943376702123:web:fccf483d93be2ac915b5ee"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
