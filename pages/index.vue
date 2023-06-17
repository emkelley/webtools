<template>
  <div>
    <Hero
      title="Eric's Web Tools"
      subtitle="A public collection of browser-based tools, utilities, and resources to help aid in web development."
    />
    <section class="max-w-7xl mx-auto px-4 mt-12">
      <div class="grid grid-cols-4 w-full gap-4">
        <div
          class="p-4 bg-gradient-to-br from-primary/80 to-black rounded-lg flex flex-col gap-2"
        >
          <Icon name="mdi:cpu-64-bit" color="white" class="text-4xl" />
          <h1 class="text-lg font-bold">Base64 Tools</h1>

          <nuxt-link
            to="/tools/base64"
            class="btn btn-primary w-full rounded-md"
          >
            Open
          </nuxt-link>
        </div>
        <div
          class="p-4 bg-gradient-to-br from-blue-900/70 to-black rounded-lg flex flex-col gap-2"
        >
          <Icon
            name="clarity:color-palette-solid"
            color="white"
            class="text-4xl"
          />
          <h1 class="text-lg font-bold">Color Tools</h1>

          <nuxt-link
            to="/tools/twitch"
            class="btn bg-blue-900 hover:bg-blue-950 w-full rounded-md"
          >
            Open
          </nuxt-link>
        </div>
        <div
          class="p-4 bg-gradient-to-br from-red-900/70 to-black rounded-lg flex flex-col gap-2"
        >
          <Icon name="jam:youtube" color="white" class="text-4xl" />
          <h1 class="text-lg font-bold">YouTube Utilities</h1>

          <nuxt-link
            to="/tools/twitch"
            class="btn bg-red-900 hover:bg-red-950 w-full rounded-md"
          >
            Open
          </nuxt-link>
        </div>
        <div
          class="p-4 bg-gradient-to-br from-teal-900/70 to-black rounded-lg flex flex-col gap-2"
        >
          <Icon name="bi:filetype-json" color="white" class="text-4xl" />
          <h1 class="text-lg font-bold">JSON Beautifier</h1>

          <nuxt-link
            to="/tools/twitch"
            class="btn bg-teal-900 hover:bg-teal-950 w-full rounded-md"
          >
            Open
          </nuxt-link>
        </div>
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
