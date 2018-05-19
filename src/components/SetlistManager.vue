<template>
  <div>
    <h1>Setlist Manager:</h1>
    <p><SongCreate/></p>
    <p><SongList v-bind:songs="songs" /></p>

  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from 'vuex'

import SongCreate from "./SongCreate.vue"
import SongList from "./SongList.vue"

export default {
  data: ()=> {
    return {
    }
  },
  components: {
    SongCreate,
    SongList,
  },
  computed: {
    // set up the 'computed' accessors, e.g. `songs`
    ...mapState(['songs'])
  }
};
</script>

<style scoped>
</style>
