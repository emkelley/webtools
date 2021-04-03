<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Twitch Dev Utilities</h1>
          <p>
            Here you'll find a collection of utilities you might find useful
            when developing Twitch Extensions or Bots.
          </p>
          <hr />
        </div>
      </div>
    </section>
    <section class="utilities">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="tool-card">
              <h2 class="subtitle">Get a Twitch User's ID</h2>
              <p>
                Enter a Twitch username in the field below to get the user's ID
                for use with bots.
              </p>
              <br />
              <br />
              <b-field>
                <b-input
                  v-model="twitchUsernameInput"
                  placeholder="0neguy"
                  type="search"
                  size="is-medium"
                  expanded
                />
                <p class="control">
                  <b-button
                    @click="swapUsernameAndID('username')"
                    class="button is-secondary"
                    :class="{ 'is-loading': this.loading }"
                    size="is-medium"
                  >
                    Convert Username to ID
                  </b-button>
                </p>
              </b-field>
              <center v-if="fetchedUserID" transition="expand">
                <br />
                <p class="user-id">
                  <code>{{ fetchedUserID }}</code>
                  <span class="help" @click="copy(fetchedUserID)">
                    Click to copy ID
                  </span>
                </p>
              </center>
            </div>
          </div>
          <div class="column is-6">
            <div class="tool-card">
              <h2 class="subtitle">Get a Twitch Username from ID</h2>
              <p>
                Enter a Twitch ID in the field below to get the user's username
                for use with bots.
              </p>
              <br />
              <br />
              <b-field>
                <b-input
                  v-model="twitchIDInput"
                  placeholder="129551825"
                  type="search"
                  size="is-medium"
                  expanded
                />
                <p class="control">
                  <b-button
                    @click="swapUsernameAndID('id')"
                    class="button is-secondary"
                    :class="{ 'is-loading': this.loading }"
                    size="is-medium"
                  >
                    Convert ID to Username
                  </b-button>
                </p>
              </b-field>
              <center v-if="fetchedUserUsername" transition="expand">
                <br />
                <p class="user-id">
                  <code>{{ fetchedUserUsername }}</code>
                  <span class="help" @click="copy(fetchedUserUsername)">
                    Click to copy Username
                  </span>
                </p>
              </center>
            </div>
          </div>
          <div class="column is-6">
            <div class="tool-card">
              <h2 class="subtitle">OAuth Token Generator</h2>
              <p>
                Use the button below to go to the TwitchApps site to generate
                your OAuth code.
              </p>
              <br />
              <a
                href="https://twitchapps.com/tokengen/"
                class="button is-secondary"
                >Open Twitch OAuth Token Generator</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Twitch Tools",
    titleTemplate: "%s | emk.dev",
  },
  data() {
    return {
      loading: false,
      twitchUsernameInput: "",
      twitchIDInput: "",
      fetchedUserUsername: undefined,
      fetchedUserID: undefined,
      id: undefined,
    };
  },
  methods: {
    swapUsernameAndID(type) {
      this.loading = true;
      if (type === "username") {
        axios
          .get("/.netlify/functions/twitch", {
            params: { query: this.twitchUsernameInput },
          })
          .then(({ data: { id } }) => {
            this.loading = false;
            this.fetchedUserID = id;
            this.id = id;
          });
      }
      if (type === "id") {
        axios
          .get("/.netlify/functions/twitch", {
            params: { query: this.twitchIDInput },
          })
          .then(({ data: { username } }) => {
            this.loading = false;
            this.fetchedUserUsername = username;
            this.id = username;
          });
      }
    },
    async copy(s) {
      await navigator.clipboard.writeText(s);
      alert("Copied!");
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 300;
}
.tool-card {
  background: white;
  padding: 2rem;
  transition: all 200ms ease-in-out;
  color: rgb(0, 0, 22);
  border-radius: 8px;
  box-shadow: 0 0px 0.6px rgba(0, 0, 0, 0.02), 0 0px 1.3px rgba(0, 0, 0, 0.028),
    0 0px 2.5px rgba(0, 0, 0, 0.035), 0 0px 4.5px rgba(0, 0, 0, 0.042),
    0 0px 8.4px rgba(0, 0, 0, 0.05), 0 0px 20px rgba(0, 0, 0, 0.07);
}

.user-id {
  code {
    background: darken($color: #002b3f, $amount: 10);
    color: aqua;
    font-size: 2rem;
  }
  svg {
    color: #dcfbff88;
    margin-left: 1rem;
  }
}
.help {
  cursor: pointer;
  opacity: 0.5;
  margin-top: 0.5rem;
}

/* TRANSITION */
/* always present */
.expand-transition {
  transition: all 0.5s ease;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave {
  height: 0;
  opacity: 0;
}
</style>
