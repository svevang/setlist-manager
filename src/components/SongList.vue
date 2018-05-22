<template>
  <div>
    <h4 v-if="songs.length > 0">Song List</h4>
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
