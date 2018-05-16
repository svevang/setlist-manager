<template>
  <div>
    <h3>Song Creator</h3>
    <input v-model="songTitle" placeholder="song title" >
    <button v-on:click="createSong">Create</button>
  </div>
</template>

<script>
import Vue from "vue";
import { CREATE_SONG } from "../mutation-types"

console.log('asdfasdfsadf')
console.log(CREATE_SONG)

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
    }
  },
};
</script>

<style scoped>
</style>
