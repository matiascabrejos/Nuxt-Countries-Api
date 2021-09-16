<template>
  <div>
    <h1>HI</h1>
    <div class="grid grid-cols-4">
      <ul v-for="country in loadedCountries" :key="country.id">
        <li>{{ country.name }}</li>
        <li>{{ country.capital }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async() {
    return axios.get('https://restcountries.eu/rest/v2/name/' + country.name)
  },
  computed: {
    loadedCountries() {
      return this.$store.getters.loadedCountries
    },
  },
}
</script>
