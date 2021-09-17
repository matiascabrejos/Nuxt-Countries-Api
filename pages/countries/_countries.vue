<template>
  <div>
    <h1>Params: {{ $route.params.countries }}</h1>
    <ul v-for="country in specificCountry" :key="country.title">
      <li><img v-bind:src="country.flag" alt="" class="max-w-md" /></li>
      <li>Country: {{ country.name }}</li>
      <li>Capital: {{ country.capital }}</li>
      <li>Population: {{ country.population }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      specificCountry: [],
    }
  },
  asyncData(context) {
    return axios
      .get('https://restcountries.eu/rest/v2/name/' + context.params.countries)
      .then((res) => {
        return {
          specificCountry: res.data,
        }
      })
      .catch((e) => console.log(e))
  },
}
</script>
