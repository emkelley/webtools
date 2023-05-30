<template>
  <div>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">
          EK Webtools
        </nuxt-link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1"></ul>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
