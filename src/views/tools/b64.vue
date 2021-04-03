<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Base-64 Encode an Image</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
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
</style>
