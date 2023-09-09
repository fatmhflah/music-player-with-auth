<template>
  <div class="list-music">
    <div v-for="(list,index) in lists" :key="index" @click="playmusic(index)" class="item d-flex align-items-center">
      <div>
        <img class="img-music" :src="list.src">
      </div>
      <div>
        <span>{{list.name}}</span>
        <br/>
        <span> {{list.artistName}} - {{list.albumName}} - {{list.year}}</span>
      </div>

    </div>
  </div>

</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from "vue";
const store = useStore()
const lists = computed(() => store.state.lists)

function playmusic(index) {

  store.dispatch('playmusic',index)
}

</script>

<style lang="scss">
.list-music {
  background: #fff;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  grid-row-gap: 1.5rem;
  overflow-y: auto;
  max-height: 100vh;
  padding: 30px;

  .item {
    background: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 52, .50);
    padding: 8px;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
      background: #876ef8;
    }
  }
}
.img-music {
  width: 60px;
  border-radius: 10px;
  margin-right: 15px;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
