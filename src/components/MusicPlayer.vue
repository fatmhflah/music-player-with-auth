<template>
  <div class="music-player-wrapper">
    <div class="d-flex justify-content-end nav-wrapper" v-if="isLoggedIn" >
      <p class="text">{{auth.currentUser.email}}</p>
      <button class=" logout-btn" @click="logout" >
        <img src="../assets/img/logout.svg"/>
      </button>
    </div>
    <div v-else class="d-flex justify-content-end">
      <router-link class="btn btn-info me-2" to="login">login</router-link>
      <router-link class="btn btn-warning" to="register">sign up</router-link>
    </div>
    <div>
      <div class="top-music">
        <music-info></music-info>
      </div>
      <action-player  :listMusic="lists"></action-player>
    </div>
  </div>





</template>

<script setup>
import ActionPlayer from "@/components/ActionPlayer";
import MusicInfo from "@/components/MusicInfo";

import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
const store = useStore()

const lists = computed(() => store.state.lists[store.state.currentindex])

import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from "@/router";


const isLoggedIn = ref(false)
let auth = getAuth();
onMounted(() => {
  onAuthStateChanged(auth , (user) => {
    if (user){
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false
    }
  })
})

const logout = () => {
  console.log('log')
  signOut(auth).then(() => {
    router.push('/login')
  })
}
</script>

<style scoped lang="scss">
.music-player-wrapper {
  background-image: linear-gradient(45deg, rgb(223, 217, 255) 0%, rgb(174, 184, 228) 100%);
  padding: 10px;
}
.top-music {;
  padding: 15px;
}

.bottom-music {
  border: 3px solid #ddd7f3;
  padding: 15px;
}


.info-music {
  .text {
    color: #333131;
    margin-bottom: 10px;
  }
}

input[type="range"] {
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 16px;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 8px;
  background: #ccc;
  border-radius: 16px;
}

input[type="range"]::-moz-range-track {
  height: 1px;
  background: #ccc;
  border-radius: 16px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  width: 8px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #2306b2;
  box-shadow: -407px 0 0 400px #2306b2;
}

.range {
  display: flex;
  align-items: center;
  max-width: 500px;
  height: 1rem;
  width: 80%;
  background: #fff;
  padding: 0px 10px;
}
.logout-btn {
  background: #7c6dcd;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  img {
    width: 100%;
  }
}
.nav-wrapper {
  display: flex;
  align-items: center;
  .text {
    margin: 0;
    margin-right: 10px;
  }
}
</style>
