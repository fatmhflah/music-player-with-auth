<template>
  <div class="container">
    <form @submit.prevent>
      <h3>Register</h3>

      <div class="form-group">
        <label>name</label>
        <input type="text" class="form-control" placeholder="enter name..." v-model="name">
      </div>

      <div class="form-group">
        <label>email</label>
        <input type="email" class="form-control" placeholder="enter email..." v-model.trim="email">
      </div>

      <div class="form-group">
        <label>password</label>
        <input type="password" class="form-control" placeholder="enter password..." v-model.trim="password">
      </div>
      <p class="alert alert-danger" v-if="errMsg">{{ errMsg }}</p>

      <div class="mt-3">
        <button class="btn btn-primary" @click="register">Register</button>
      </div>
      <div class="d-flex mt-3">
        <p>do you have an account? </p>
        <router-link to="/login">login now</router-link>
      </div>

    </form>
  </div>


</template>

<script setup>
import { getAuth , createUserWithEmailAndPassword   } from 'firebase/auth'
import {ref} from "vue";
import {useRouter} from 'vue-router'
const router = useRouter()
const email = ref('')
const password = ref('')
const name = ref('')
const errMsg = ref('')
const register = () => {
  createUserWithEmailAndPassword(getAuth() , email.value, password.value)
  .then((data) => {

    console.log(data)
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
    }
  })
}
</script>

<style scoped>

</style>
