<template>
  <div id="app">
    <div class="hero is-secondary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered">
            <div class="column is-4">
              <h1 class="title">Eric's Web Tools</h1>
              <p style="color: ghostwhite">
                A public collection of browser-based tools, utilities, and
                resources to help aid in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000e1d;
  background: #dfecfa;
  min-height: 100vh;
}
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #002b3f;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$secondary: rgb(16, 128, 156);
$secondary-light: findLightColor($secondary);
$secondary-dark: findDarkColor($secondary);
$secondary-invert: findColorInvert($secondary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
  (
    "white": (
      $white,
      $black,
    ),
    "black": (
      $black,
      $white,
    ),
    "light": (
      $light,
      $light-invert,
    ),
    "dark": (
      $dark,
      $dark-invert,
    ),
    "primary": (
      $primary,
      $primary-invert,
      $primary-light,
      $primary-dark,
    ),
    "secondary": (
      $secondary,
      $secondary-invert,
      $secondary-light,
      $secondary-dark,
    ),
    "link": (
      $link,
      $link-invert,
      $link-light,
      $link-dark,
    ),
    "info": (
      $info,
      $info-invert,
      $info-light,
      $info-dark,
    ),
    "success": (
      $success,
      $success-invert,
      $success-light,
      $success-dark,
    ),
    "warning": (
      $warning,
      $warning-invert,
      $warning-light,
      $warning-dark,
    ),
    "danger": (
      $danger,
      $danger-invert,
      $danger-light,
      $danger-dark,
    ),
  ),
  $custom-colors
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
$label-color: ghostwhite;
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
.title,
.subtitle,
p {
  color: rgb(0, 0, 22);
}
</style>
