<template>
  <div>
    <h4 v-if="songs.length > 0">Song List</h4>
    <pre v-for="song in songs">
      {{song}}
    </pre>
  </div>
</template>

<script>

export default {
  props: ['songs'],
};
</script>

<style scoped>
</style>
