<template>
  <header
    class="
      md:flex md:items-center md:justify-between
      p-4
      pb-0
      shadow-lg
      md:pb-4
      text-center
    "
  >
    <div class="items-center justify-between mb-4 md:mb-0">
      <nuxt-link to="/">
        <h1 class="leading-none text-2xl text-gray-900 mx-auto font-bold">
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
              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
            />
          </svg>
          Europe Countries App
        </h1>
      </nuxt-link>
    </div>

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
              text-gray-900
              hover:text-black
              md:border-none md:p-0
              cursor-pointer
              font-bold
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
  </header>
</template>
