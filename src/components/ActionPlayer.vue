<template>
  <div class="bottom-music">
    <div class="d-flex justify-content-between align-items-center action-music">
      <div>
        <button class="btn"><img src="@/assets/img/previous.svg" @click="prevmusic"/></button>
      </div>
      <div>
        <audio id="audio" class=" music-element d-none" controls preload="auto"  :src="listMusic.songSrc" ref="audioplayer"></audio>
        <AudioPlayer
                      :option="{
        src: listMusic.songSrc,
        progressBarColor: '#ad10e1',
        indicatorColor: '#ad10e1'

   }"
        />

      </div>
      <div>
        <button class="btn"><img src="@/assets/img/next.svg" @click="nextmusic"/></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

import {  defineProps, ref} from "vue";
import {useStore} from "vuex";
const store = useStore()
const props = defineProps([ 'listMusic'])
console.log(props)
const audioplayer = ref(null)
// const isplaying = computed(() => store.state.isplaying)



function prevmusic(){
  store.dispatch('prevmusic')
}
function nextmusic(){
  store.dispatch('nextmusic')
}



</script>

<style scoped lang="scss">
.audio__player {
  width: 600px;
}

.action-music {
  img {
    width: 35px;
  }
  .play-btn {
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #472EB4;
    width: 65px;
    height: 65px;
    img {
      width: 45px;
      height: 45px;
    }
  }
}
.bi-repeat {
  &.active {
    color: #472EB4;
  }
}
</style>
