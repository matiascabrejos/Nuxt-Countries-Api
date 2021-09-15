<template>
  <div>
    <section
      class="text-gray-700 body-font"
      v-for="country in countries"
      :key="country.id"
    >
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div
              class="
                border-2 border-gray-600
                px-4
                py-6
                rounded-lg
                transform
                transition
                duration-500
                hover:scale-110
              "
            >
              <nuxt-link :countries="countries" to="/countryinfo"><img v-bind:src="country.flag" alt="" /></nuxt-link>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                {{ country.name }}
              </h2>
              <p class="leading-relaxed">{{ country.capital }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['countries'],
}
</script>
