<template>
  <section class="v-section3">
    <div class="v-section3__text">
      Многие не верят предсказаниям и мы решили доказать каждому,<br />
      <span class="golden-text"
        >что прогноз может изменить жизнь любого человека!</span
      >
    </div>
  </section>
</template>

<style lang="scss">
.v-section3 {
  background-image: url("../../assets/img/meditation.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 606px;

  &__text {
    font-size: 25px;
    line-height: 35px;
    width: 380.19px;
    padding: 240px 0 120px;
    text-align: center;
    margin: 0 auto;
  }
}

@media screen and (max-width: 600px) {
  .v-section3 {
    margin: 0 auto;
    // width: 498px;
    height: 331px;
    font-size: 16px;
    line-height: 25px;
    &__text {
      font-size: 16px;
      line-height: 25px;
      width: 219px;
      padding: 102px 0 80px;
    }
  }
}
</style>
