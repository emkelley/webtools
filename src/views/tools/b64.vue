<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Base-64 Image Encoder</h1>
          <p class="text">
            Select an image from your computer and click Encode Image to see the
            Base-64 value.
          </p>
        </div>
      </div>
    </section>
    <div class="columns is-centered">
      <div class="column is-5">
        <div class="box">
          <b-field class="file is-info" :class="{ 'has-name': !!file }">
            <b-upload v-model="file" class="file-label">
              <span class="file-cta">
                <b-icon class="file-icon" pack="fas" icon="upload"></b-icon>
                <span class="file-label">Select an Image</span>
              </span>
              <span class="file-name" v-if="file">
                {{ file.name }}
              </span>
            </b-upload>
          </b-field>
          <br />
          <b-field>
            <b-button
              type="is-info"
              label="Encode Image"
              @click="getBase64"
              :disabled="!file"
            />
          </b-field>
          <div class="" v-if="result">
            <hr />
            <h2 class="subtitle">Result:</h2>
            <textarea
              class="textarea"
              v-model="result"
              style="word-wrap:break-word;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: undefined,
      result: undefined,
    };
  },
  methods: {
    getBase64() {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        let base64String = reader.result;
        this.result = base64String;
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
.result {
  background: white;
  overflow: hidden;
  word-break: break-all !important;
}
</style>
