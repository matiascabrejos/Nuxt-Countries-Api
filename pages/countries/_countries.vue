<template>
  <div>
    <section class="py-12 bg-blue-900">
      <div
        class="container mx-auto"
        v-for="country in specificCountry"
        :key="country.title"
      >
        <div class="flex flex-wrap px-6 text-center">
          <div class="w-full lg:w-1/2 md:px-4 lg:px-6 py-5 mx-auto shadow-2xl">
            <div class="bg-white hover:shadow-xl">
              <h1 class="text-2xl font-black text-gray-900 pb-4 px-6 md:px-12 pt-4">
                {{ country.name }}
              </h1>
              <div>
                <img v-bind:src="country.flag" alt="" class=""/>
              </div>
              <div class="px-4 py-4 md:px-10">
                <h1 class="font-bold text-lg">{{ country.subregion }}</h1>
                <p>Capital: {{ country.capital }}</p>
                <p>Population: {{ country.population }}</p>
                <p>Languages: {{ country.languages[0].name }}</p>
                <p>
                  Currencies: {{ country.currencies[0].name }}
                  {{ country.currencies[0].symbol }}
                </p>
                <p>Time Zone: {{ country.timezones[0] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  head: {
    title: 'Specific Country Information'    
  }
}
</script>

<style scoped>
img {
  height: 70%;
  min-width: 100%;
  object-fit: contain;
}
</style>
