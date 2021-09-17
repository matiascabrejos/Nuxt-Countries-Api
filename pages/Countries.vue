<template>
  <div>
    <h1>Countries of Europe</h1>

    <div
      class="
        p-10
        grid grid-cols-1
        sm:grid-cols-1
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-3
        gap-5
      "
    >
      <div
        v-for="country in loadedCountries"
        :key="country.id"
        class="
          border-2 border-gray-600
          px-4
          py-6
          rounded-lg
          transform
          transition
          duration-500
          hover:scale-110
          text-center
        "
      >
        <nuxt-link :to="`/countries/${country.name}`"
          ><img :src="country.flag" alt=""
        /></nuxt-link>
        <h2 class="title-font font-medium text-2xl text-gray-900">
          {{ country.name }}
        </h2>
      </div>
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

<style scoped>
img {
  height: 70%;
  min-width: 100%;
  object-fit: cover;
}

h2 {
  padding-top: 20px;
}
</style>
