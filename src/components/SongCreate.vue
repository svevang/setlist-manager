<template>
  <div>
    <input @keyup.enter="createSong" ref="song_input" v-model="songTitle" placeholder="song title" >
    <button v-on:click="createSong">Create</button>
  </div>
</template>

<script>
import Vue from "vue";
import { CREATE_SONG } from "../mutation-types"

export default {
  data: ()=> {
    return {
      songTitle: ""
    }
  },
  methods: {
    createSong () {
      const title = this.songTitle.trim()
      this.$store.commit(CREATE_SONG, title)
      // reset the form field
      this.songTitle = ''
      this.$refs.song_input.focus()
    }
  },
};
</script>

<style scoped>
</style>
