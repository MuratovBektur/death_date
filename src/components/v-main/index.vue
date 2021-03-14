<template>
  <div class="v-main">
    <img class="v-main__blik-img" src="@img/blik.png" alt="blik" />
    <div class="container">
      <vMainSection data-aos="fade-down" data-aos-delay="200" />
      <!-- <vMainSection data-aos="fade-up" data-aos-delay="300" /> -->
      <vSection2
        class="v-main__second-section"
        data-aos="fade-up"
        data-aos-delay="300"
      />
    </div>
  </div>
</template>

<script>
import { vMainSection, vSection2 } from "./index.js";
export default {
  components: {
    vMainSection,
    vSection2,
  },
};
</script>

<style lang="scss">
.v-main {
  &__blik-img {
    position: absolute;
    right: 0;
    // top: -9%;
    top: -52px;
  }
  &__second-section {
    margin-top: 128px;
  }
}

@media screen and (max-width: 600px) {
  .v-main {
    &__blik-img {
      display: none;
    }
    &__second-section {
      margin-top: 50px;
    }
  }
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
