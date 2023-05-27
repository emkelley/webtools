<template>
  <div>
    <Hero
      title="Eric's Web Tools"
      subtitle="A public collection of browser-based tools, utilities, and resources to help aid in web development."
    />
    <section class="max-w-7xl mx-auto px-4 mt-12">
      <div class="grid grid-cols-4 w-full gap-4">
        <div class="p-4 border-2 rounded-lg flex flex-col gap-2">
          <Icon name="mdi:cpu-64-bit" color="black" class="text-4xl" />
          <h1 class="text-lg font-bold">Base64 Tools</h1>
          <p>Encode/Decode text and images</p>
          <nuxt-link to="/tools/base64" class="btn btn-primary w-full">
            Open
          </nuxt-link>
        </div>
        <div class="p-4 border-2">asdf</div>
        <div class="p-4 border-2">asdf</div>
        <div class="p-4 border-2">asdf</div>
        <div class="p-4 border-2">asdf</div>
        <div class="p-4 border-2">asdf</div>
        <div class="p-4 border-2">asdf</div>
        <div class="p-4 border-2">asdf</div>
        <div class="p-4 border-2">asdf</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: "light",
});
</script>

<style scoped></style>
