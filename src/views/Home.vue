<template>
  <main>
    <section class="tool-list">
      <div class="container">
        <div class="columns is-multiline">
          <div v-for="(tool, index) in tools" :key="index" class="column is-4">
            <div class="tool-card content">
              <h2 class="subtitle">{{ tool.name }}</h2>
              <p class="description">{{ tool.description }}</p>
              <router-link
                :to="tool.route"
                class="button is-link is-light is-small"
              >
                Open Tool
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import { useLoadUsers, deleteUser } from '@/firebase'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      tools: [
        {
          name: "B64 Encode Image",
          description: "Upload an image to be converted to Base-64 format.",
          route: "/tools/b64",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tool-list {
  margin-top: 5rem;
}
.tool-card {
  background: darken($color: #002b3f, $amount: 3);
  padding: 2rem;
  .subtitle,
  .description {
    color: white;
  }
}
</style>
