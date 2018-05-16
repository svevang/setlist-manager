<template>
  <div id="app">
    <SetlistManager/>
  </div>
</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'

import SetlistManager from './components/SetlistManager.vue'
import { CREATE_SONG } from "./mutation-types"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    songs: []
  },
  mutations: {
    [CREATE_SONG] (state, songTitle) {
      state.songs.push(songTitle)
    }
  }
})

export default {
  store,
  components: {
    SetlistManager
  }
}
</script>

