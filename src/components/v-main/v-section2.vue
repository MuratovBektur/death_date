<template>
  <div class="v-section2">
    <img class="v-section2__img" src="@img/hands.png" alt="hands" />
    Позвольте нам раскрыть эту волнующую тайну и
    <span class="v-section2__highlighted-text">
      с точностью определить дату и время вашей смерти
    </span>
    , а также предшествующую этому событию причину
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-section2 {
  margin: 0 auto;
  width: 442.68px;
  height: 437.48px;
  padding: 130px 40px 80px;
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  font-weight: 400;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 3px;

  &__img {
    position: absolute;
    top: -80px;
    right: 142px;
  }
  &__highlighted-text {
    font-weight: 500;
    font-family: Montserrat;
    color: #f6c866;
  }
}

@media screen and (max-width: 600px) {
  .v-section2 {
    width: 255px;
    height: 252px;
    font-size: 16px;
    line-height: 25px;
    padding: 60px 20px 30px;
    &__img {
      width: 85px;
      top: -43px;
      right: 84px;
    }
  }
}
</style>
