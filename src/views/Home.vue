<template>
  <div class="home">
    <vMainPage />
  </div>
</template>

<script>
// @ is an alias to /src
import vMainPage from "@/components/v-main/index.vue";

export default {
  name: "Home",
  components: {
    vMainPage,
  },
};
</script>
