<template>
  <main class="grid w-full min-h-screen bg-gray-900 place-content-center">
    <div class="rounded-lg">
      <div class="bg-gray-100 rounded-lg w-96">
        <img
          src="https://unsplash.it/640/425"
          alt=""
          class="
            w-full
            h-48
            transition
            duration-300
            rounded-t-lg
            sm:h-56
            opacity-80
            hover:opacity-100
          "
        />

        <div class="px-10 py-6 mb-10 text-center">
          <div class="mb-4 text-3xl font-bold text-purple-600 uppercase">
            title
          </div>
          <span class="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            tempore eligendi magnam distinctio molestias. Incidunt at
            consequuntur consequatur officiis repudiandae! Culpa cum vel tenetur
            itaque eius provident voluptatum similique impedit?
          </span>
        </div>
        <button
          class="
            w-full
            h-16
            text-lg
            font-extrabold
            text-gray-100
            transition
            duration-300
            bg-purple-600
            rounded-b-lg
            hover:bg-purple-700
          "
        >
          VIEW RECIPES
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    props: ['countries']
}
</script>

