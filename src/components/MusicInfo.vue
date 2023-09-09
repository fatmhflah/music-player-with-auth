<template>
  <div class="text-center info-music">
    <img class="mt-4 mb-3 img-music" :src="lists.src"/>
    <p class="text fw-bold">{{lists.name}}</p>
    <p class="text">{{lists.artistName}} - {{lists.albumName}}</p>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
const store = useStore()
const lists = computed(() => store.state.lists[store.state.currentindex])

</script>

<style scoped lang="scss">
.img-music {
  width: 250px;
  height: 250px;
  border-radius: 60px;
  box-shadow: rgba(71, 46, 180, 100) 0px 3px 8px;;
}
</style>
