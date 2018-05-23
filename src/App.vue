<template>
  <div id="app">
    <SetlistManager/>
  </div>
</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'

import SetlistManager from './components/SetlistManager.vue'
import { CREATE_SONG, CREATE_SETLIST } from "./mutation-types"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    songs: [],
    setlists: [],
  },
  mutations: {
    [CREATE_SONG] (state, songTitle) {
      state.songs.push(songTitle)
    },
    [CREATE_SETLIST] (state, setlist) {
      state.setlists.push(setlist)
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

<style lang=scss>
  @import "../node_modules/bootstrap/scss/bootstrap.scss"
</style>
