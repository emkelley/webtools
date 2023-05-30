<template>
  <section
    class="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-emerald-900 via-black to-emerald-900 py-20 flex justify-center items-center flex-col px-2"
  >
    <h1 class="text-3xl font-black text-white">{{ title }}</h1>
    <h2 class="text-xl text-white max-w-lg text-center mt-4">
      {{ subtitle }}
    </h2>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
});
</script>

<style scoped></style>
