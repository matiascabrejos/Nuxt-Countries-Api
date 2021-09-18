<template>
  <div>
    <h1 class="title-font font-medium text-4xl text-gray-900 text-center pt-4">
      Countries of Europe
    </h1>
    <p class="title-font font-medium text-2xl text-gray-900 text-center pt-2">
      Click the flag for more info about the Countries
    </p>
    <form class="mb-4 w-full md:mb-0 md:w-1/4 mx-auto pt-6">
    <label class="hidden" for="search-form">Search</label>
    <input
      class="
        bg-grey-lightest
        border-2
        focus:border-orange
        p-2
        rounded-lg
        shadow-inner
        w-full
      "
      placeholder="Search"
      type="text"
      v-model="textSearch"
      @keyup="countryFilter()"
    />
    </form>

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
          border-2 border-gray-600
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
        <h2 class="title-font font-medium text-2xl text-gray-900">
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
      filteredCountries: []
    }
  },
  methods: {
    countryFilter() {
      this.filteredCountries = this.loadedCountries.filter((country) => country.name.toLowerCase().includes(this.textSearch.toLowerCase()))
    },
  },
  computed: {
    loadedCountries() {
      return this.$store.getters.loadedCountries
    },
  },
  mounted() {
    this.countryFilter()
  }
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
