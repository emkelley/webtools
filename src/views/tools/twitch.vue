<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Twitch Dev Utilities</h1>
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
              <b-field label="Twitch Username">
                <b-input
                  v-model="twitchUsernameInput"
                  placeholder="0neguy"
                  type="search"
                  expanded
                ></b-input>
                <p class="control">
                  <b-button @click="search()" class="button is-info"
                    >Search</b-button
                  >
                </p>
              </b-field>
              <center v-if="fetchedUserID" transition="expand">
                <br />
                <p class="user-id" @click="copyUserID()">
                  <code>{{ fetchedUserID }}</code>
                  <i class="fas fa-copy fa-lg"></i>
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      twitchUsernameInput: "",
      fetchedUserID: undefined,
    };
  },
  methods: {
    search() {
      this.fetchedUserID = this.twitchUsernameInput;
    },
    copyUserID() {
      console.log("copy");
    },
    getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        console.log(reader.result);
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 300;
}
.tool-card {
  background: darken($color: #002b3f, $amount: 3);
  padding: 2rem;
  transition: all 200ms ease-in-out;
}

.user-id {
  cursor: pointer;
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
