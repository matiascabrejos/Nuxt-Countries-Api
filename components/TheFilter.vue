<template>
  <form class="mb-4 w-full md:mb-0 md:w-1/4">
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
    <button class="hidden">Submit</button>
  </form>
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
}
</script>

<style></style>
