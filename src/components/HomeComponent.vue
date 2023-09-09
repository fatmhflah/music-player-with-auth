<template>

<!--  <div v-if="isLoggedIn" >-->
<!--    <p>{{auth.currentUser.email}}</p>-->
<!--    <button class="btn btn-danger" @click="logout" >logout</button>-->
<!--  </div>-->
<!--  <div v-else>-->
<!--    <router-link class="btn btn-info" to="login">login</router-link>-->
<!--    <router-link class="btn btn-warning" to="register">sign up</router-link>-->
<!--  </div>-->

  <music-list  ></music-list>
  <music-player  ></music-player>

</template>

<script setup>
import MusicList from "@/components/MusicList.vue";
import MusicPlayer from "@/components/MusicPlayer.vue";
// import {computed} from "vue";
// import {useStore} from "vuex";
// import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
// import router from "@/router";
// const store = useStore()
// const isplayervisible = computed(() => store.state.isplayervisible)

// const isLoggedIn = ref(false)
// let auth = getAuth();
// onMounted(() => {
//   onAuthStateChanged(auth , (user) => {
//     if (user){
//       isLoggedIn.value = true;
//     } else {
//       isLoggedIn.value = false
//     }
//   })
// })

// const logout = () => {
//   console.log('log')
//   signOut(auth).then(() => {
//     router.push('/login')
//   })
// }
</script>

<style scoped>

</style>
