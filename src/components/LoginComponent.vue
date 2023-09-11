<template>
  <div class="container">
    <h3>login</h3>
    <form @submit.prevent>
      <div class="form-group">
        <label>email</label>
        <input type="email" class="form-control" placeholder="enter email..." v-model.trim="email">
      </div>

      <div class="form-group">
        <label>password</label>
        <input type="password" class="form-control" placeholder="enter password..." v-model.trim="password">
      </div>

      <p class="alert alert-danger mt-3" v-if="errMsg">{{ errMsg }}</p>


      <div class="mt-3">
        <button class="btn btn-primary" @click="login">login</button>
      </div>
      <div class="d-flex mt-3">
        <p>dont have an account? </p>
        <router-link to="/register">regiser now</router-link>
      </div>



    </form>
  </div>


</template>

<script setup>
import {ref} from "vue";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";

const email = ref('')
const password = ref('')
const errMsg = ref('')
import {useRouter} from 'vue-router'
const router = useRouter()
const login = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(getAuth() , email.value, password.value)
      .then((data) => {
        console.log(data)
        console.log(auth.currentUser)
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)

        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
                break
          case 'auth/user-not-found':
            errMsg.value = 'no account with that email was found'
            break
          case 'auth/wrong-password':
            errMsg.value = 'incorrect password'
            break
          case 'auth/email-already-in-use':
            errMsg.value = 'this account already exists'
            break
        }
      })
}
</script>

<style scoped>

</style>
