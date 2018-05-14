<template>
  <div>
    <h1>Setlist Manager:</h1>
    <p><SongCreate/></p>
  </div>
</template>

<script>
import Vue from "vue";
import SongCreate from "./SongCreate.vue"

export default {
  data: ()=> {
    return {
      greeting: "Hello0"
    }
  },
  components: {
    SongCreate
  }
};
</script>

<style scoped>
</style>
