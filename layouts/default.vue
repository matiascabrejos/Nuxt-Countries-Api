<template>
  <div>
    <header
      class="
        border-b
        md:flex md:items-center md:justify-between
        p-4
        pb-0
        shadow-lg
        md:pb-4
      "
    >
      <!-- Logo text or image -->
      <div class="flex items-center justify-between mb-4 md:mb-0">
        <h1 class="leading-none text-2xl text-grey-darkest">
          <a class="no-underline text-grey-darkest hover:text-black" href="#">
            Europe Countries App
          </a>
        </h1>

        <a class="text-black hover:text-orange md:hidden" href="#">
          <i class="fa fa-2x fa-bars"></i>
        </a>
      </div>
      <!-- END Logo text or image -->

      <!-- Search field -->
      <TheFilter></TheFilter>
      <!-- END Search field -->

      <!-- Global navigation -->
      <nav>
        <ul class="list-reset md:flex md:items-center">
          <li class="md:ml-4">
            <nuxt-link
              to="/"
              class="
                border-t
                block
                no-underline
                hover:underline
                py-2
                text-grey-darkest
                hover:text-black
                md:border-none md:p-0
                cursor-pointer
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block w-5 mr-2 stroke-current mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- END Global navigation -->
    </header>
    <nuxt />
  </div>
</template>

<script>
import TheFilter from '~/components/TheFilter.vue'
export default {
  components: TheFilter,
}
</script>
