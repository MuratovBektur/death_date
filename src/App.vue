<template>
  <div id="app">
    <vMain />
  </div>
</template>

<script>
import vMain from "@c/v-main/index.vue";
export default {
  name: "App",
  components: {
    vMain,
  },
};
</script>

<style lang="scss">
// Подключение шрифтов
@import "./assets/fonts/Roboto/stylesheet.css";
@import "./assets/fonts/Montserrat/stylesheet.css";

@import "./assets/variables.scss";
</style>
