<template>
  <div class="bg-gray-900">
    <h1 class="title-font font-medium text-4xl text-white text-center pt-4">
      Countries of Europe
    </h1>
    <p class="title-font font-medium text-2xl text-white text-center pt-2">
      Click the flag for more info about the countries
    </p>

    <div class="max-w-screen-md mx-auto p-5 pb-0">
      <form class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full lg:w-60 mx-auto px-3">
            <input
              class="
                font-bold
                block
                w-full
                bg-gray-200
                text-gray-900
                border-2 border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none focus:bg-white focus:border-red-700
                text-center
              "
              v-model="textSearch"
              @keyup="countryFilter()"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </form>
    </div>

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
        v-for="country in filteredCountries"
        :key="country.id"
        class="
          border-2 border-white
          px-4
          py-6
          rounded-lg
          transform
          transition
          duration-500
          hover:scale-110
          text-center
          mr-6
          mb-6
        "
      >
        <nuxt-link :to="`/countries/${country.name}`"
          ><img :src="country.flag" alt=""
        /></nuxt-link>
        <h2 class="title-font font-medium text-2xl text-white">
          {{ country.name }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textSearch: '',
      filteredCountries: [],
    }
  },
  methods: {
    countryFilter() {
      this.filteredCountries = this.loadedCountries.filter((country) =>
        country.name.toLowerCase().includes(this.textSearch.toLowerCase())
      )
    },
  },
  computed: {
    loadedCountries() {
      return this.$store.getters.loadedCountries
    },
  },
  mounted() {
    this.countryFilter()
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
