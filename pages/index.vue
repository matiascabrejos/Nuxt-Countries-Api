<template>
  <div>
    <h1 class="text-center">Countries Data</h1>
    <CountryPreview :countries="countries"></CountryPreview>
    <CountryAllInfo :countries="countries"></CountryAllInfo>
<!--     <ul v-for="country in countries" :key="country.id">
      <li>Country: {{ country.name }}</li>
      <li>Capital: {{ country.capital }}</li>
      <li>Region: {{ country.region }}</li>
      <li><img v-bind:src="country.flag" alt="" /></li>
    </ul> -->
  </div>
</template>

<script>
import axios from 'axios'
import CountryCard from '~/components/CountryPreview.vue'
import CountryAllInfo from '~/components/CountryAllInfo.vue'

export default {
  data() {
    return {
      countries: [],
    }
  },
  asyncData() {
    const url = 'https://restcountries.eu/rest/v2/all'
    return axios
      .get(url)
      .then((res) => {
        return {
          countries: res.data,
        }
      })
      .catch((e) => console.log(e))
  },
}
</script>
