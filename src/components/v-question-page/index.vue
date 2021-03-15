<template>
  <div class="v-question-page">
    <header class="v-question-page__header">
      <div class="v-question-page__header-text">
        Мы расскажем Вам не только подробности вашей смерти, но также поможем
        Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.
      </div>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    const { num } = this.$route.params;
    if (isNaN(num) || num < 2 || num > 5) {
      this.$router.replace("/");
    }
    console.log(num);
  },
};
</script>

<style lang="scss">
.v-question-page {
  height: 100vh;
  &__header {
    min-height: 224px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  &__header-text {
    max-width: 411px;
    margin: 0 auto;
    font-family: Bad Script;
    font-size: 25px;
    line-height: 35px;
    /* or 140% */

    text-align: center;

    opacity: 0.6;
  }
}
</style>