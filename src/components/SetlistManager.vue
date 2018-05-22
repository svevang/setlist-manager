<template>
  <div>
      <h3>🎸 Setlist Manager</h3>
    <div class="column">
      <SongCreate/>
    </div>
    <div class="column">
      <SongList v-bind:songs="songs" />
    </div>
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

<style lang="scss" scoped>
.column {
  margin-top: 30px;
  width: 340px;
  background: #e2e4e6;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
}
.column:first-child{
  margin-left: 30px;
}
</style>
