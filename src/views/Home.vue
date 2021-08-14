<template>
  <main>
    <section class="tool-list">
      <div class="container">
        <div class="columns is-multiline">
          <div v-for="(tool, index) in tools" :key="index" class="column is-4">
            <div class="tool-card content" :class="tool.brandColor">
              <h2 class="subtitle">
                <i :class="tool.iconClasses" style="margin-right: .25rem"></i>
                {{ tool.name }}
              </h2>
              <p class="description">{{ tool.description }}</p>
              <router-link
                :to="tool.route"
                class="button is-link is-primary is-small"
              >
                Open Resource
              </router-link>
            </div>
          </div>
          <div class="column is-12">
            <div class="tool-card content coming-soon">
              <p>
                More tools will be added as I need them. If you want to request
                a tool, tweet at me,
                <a href="https://twitter.com/0NEGUYY">@0NEGUYY</a> .
              </p>
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
          brandColor: "b64",
          iconClasses: "fas fa-terminal",
        },
        {
          name: "Twitch Utilities",
          description:
            "Various tools, resources, and utilities to aid in extension and bot development.",
          route: "/tools/twitch",
          brandColor: "twitch",
          iconClasses: "fab fa-twitch",
        },
        {
          name: "Netlify Functions",
          description: "Random code snippets I've found useful over the years.",
          route: "/tools/netlify",
          brandColor: "netlify",
          iconClasses: "fak fa-netlify",
        },
        {
          name: "YouTube Utilities",
          description:
            "Various tools, resources, utilities for various YouTube related things.",
          route: "/tools/youtube",
          brandColor: "youtube",
          iconClasses: "fab fa-youtube",
        },
        {
          name: "Vue Snippets",
          description: "Random code snippets I've found useful over the years.",
          route: "/tools/vue",
          brandColor: "vue",
          iconClasses: "fab fa-vuejs",
        },
        {
          name: "Fake Data Generator",
          description:
            "Generate wide variety of realistic fake data: address, avatars, names, phones, etc.",
          route: "/tools/fakedata",
          brandColor: "fakedata",
          iconClasses: "fas fa-user-secret",
        },
        {
          name: " Ipsum Generator",
          description:
            "Generate Ipsum of various styles for any specified length.",
          route: "/tools/ipsum",
          brandColor: "ipsum",
          iconClasses: "fas fa-university",
        },
        {
          name: "QR Code Generator",
          description:
            "A decently customizable QR code generator with support for custom logos.",
          route: "/tools/qr",
          brandColor: "qr",
          iconClasses: "fas fa-qrcode",
        },
        {
          name: "CSV Parsing",
          description:
            "For when you just need to convert the damn CSV into JSON already.",
          route: "/tools/vue",
          brandColor: "csv",
          iconClasses: "fas fa-file-csv",
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
  border: 2px solid rgb(70, 104, 143);
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 0px 0.6px rgba(0, 0, 0, 0.02), 0 0px 1.3px rgba(0, 0, 0, 0.028),
    0 0px 2.5px rgba(0, 0, 0, 0.035), 0 0px 4.5px rgba(0, 0, 0, 0.042),
    0 0px 8.4px rgba(0, 0, 0, 0.05), 0 0px 20px rgba(0, 0, 0, 0.07);
  .subtitle,
  .description {
    color: rgb(38, 36, 78);
  }
  &.twitch {
    border-color: rgb(100, 65, 165);
  }
  &.netlify {
    border-color: rgb(21, 132, 125);
  }
  &.vue {
    border-color: rgb(65, 184, 131);
  }
  &.fakedata {
    border-color: rgb(144, 79, 49);
  }
  &.ipsum {
    border-color: rgb(185, 133, 65);
  }
  &.csv {
    border-color: rgb(51, 98, 199);
  }
  &.qr {
    border-color: rgb(51, 157, 199);
  }
  &.b64 {
    border-color: rgb(199, 177, 51);
  }
  &.youtube {
    border-color: rgb(202, 45, 45);
  }
  &.coming-soon {
    border-color: rgb(223, 240, 255);
  }
  .button {
    opacity: 0.75;
    border-radius: 4px;
    transition: all 350ms ease-in-out;
    &:hover {
      opacity: 1;
      border-radius: 40px;
    }
  }
}
</style>
