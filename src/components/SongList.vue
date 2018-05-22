<template>
  <div>
    <h6 v-if="songs.length == 0">No Songs Created!</h6>
    <h6 v-if="songs.length > 0">Song List:</h6>
    <ul>
      <li v-for="song in songs">
      {{song}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['songs'],
};
</script>

<style scoped>
</style>
