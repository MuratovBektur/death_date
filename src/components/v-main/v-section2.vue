<template>
  <section class="v-section2">
    <fieldset class="v-section2__fieldset">
      <legend>
        <img src="@img/hands.png" class="v-section2__img" alt="hands" />
      </legend>
      <div>
        Позвольте нам раскрыть эту волнующую тайну и
        <br />
        <span class="v-section2__highlighted-text">
          с точностью определить дату и время вашей смерти
        </span>
        , а также предшествующую этому событию причину
      </div>
    </fieldset>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-section2 {
  &__fieldset {
    margin: 0 auto;
    width: 442.68px;
    padding: 53px 40px 80px;
    font-size: 25px;
    line-height: 35px;
    text-align: center;
    font-weight: 400;
    border: 1px solid #ffffff;
    border-radius: 3px;
  }

  // &__img {
  //   position: absolute;
  //   top: -80px;
  //   right: 142px;
  // }
  &__highlighted-text {
    font-weight: 500;
    font-family: Montserrat;
    color: #f6c866;
  }
}

@media screen and (max-width: 600px) {
  .v-section2 {
    &__fieldset {
      width: 255px;
      // height: 252px;
      font-size: 16px;
      line-height: 25px;
      padding: 15px 20px 30px;
    }

    &__img {
      width: 85px;
    }
    &__highlighted-text {
      font-size: 20px;
      line-height: 25px;
    }
  }
}
</style>
