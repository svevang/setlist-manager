<template>
  <div>
    <div class="form-group">
      <label for="venue-input">Venue Name</label>
      <input id="venue-input" ref="venue_input" v-model="venue" placeholder="enter venue name" >
    </div>
    <div class="form-group">
      <label for="">City</label>
      <input ref="city_input" v-model="city" placeholder="city name" >
    </div>
    <div class="form-group">
      <label for="">State</label>
      <input ref="state_input" v-model="usState" placeholder="state abbreviation" >
    </div>
    <div class="form-group">
      <label for="">Date</label>
      <input ref="date_input" v-model="date" placeholder="mm/dd/yyyy" >
    </div>
    <button v-on:click="createSetlist">Create</button>
  </div>
</template>

<script>
// @keyup.enter="createSetlist"
import Vue from "vue";
import { CREATE_SETLIST } from "../mutation-types"

export default {
  data: ()=> {
    return {
      venue: "",
      city: "",
      usState: "",
      date: "",
    }
  },
  methods: {
    createSetlist () {

      const venue = this.venue.trim()
      const usState = this.usState.trim()
      const city = this.city.trim()
      const date = this.date.trim()

      this.$store.commit(CREATE_SETLIST, {date, venue, usState, city})

      // reset the form field
      this.venue = ''
      this.usState = ''
      this.city = ''
      this.date = ''
      this.$refs.venue_input.focus()
    }
  },
};
</script>

<style scoped>
</style>
