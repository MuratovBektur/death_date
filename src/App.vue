<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<style lang="scss">
// Подключение шрифтов
@import "./assets/fonts/Roboto/stylesheet.css";
@import "./assets/fonts/Montserrat/stylesheet.css";
@import "./assets/fonts/BadScript/stylesheet.css";

@import "./assets/variables.scss";
#app {
  overflow: hidden;
}
</style>
