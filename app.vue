<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const theme = "light"; // this could be dynamic, depending on your use case

useHead(() => ({
  htmlAttrs: {
    "data-theme": theme,
  },
}));
</script>

<style lang="scss">
html {
  font-family: "Rubik", sans-serif;
}
</style>
