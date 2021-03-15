<template>
  <footer class="v-footer">
    <img class="v-footer__eye-icon" src="@img/eye.svg" alt="eye" />

    <img class="v-footer__rune1" src="@img/rune1.svg" alt="rune1" />

    <div class="v-footer__text">
      Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут.
    </div>

    <img class="v-footer__rune2" src="@img/rune2.svg" alt="rune2" />
    <img class="v-footer__planet-icon" src="@img/planet.svg" alt="planet" />
    <div class="v-footer__bottom-text">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
      FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
    </div>
  </footer>
</template>



<style lang="scss">
.v-footer {
  position: relative;
  &__rune1 {
    display: block;
    margin: 10px auto 0;
  }

  &__eye-icon {
    position: absolute;
    right: -124px;
    top: -124px;
    transform: rotate(-9.61deg);
  }
  &__text {
    font-family: Bad Script;
    width: 235px;
    font-size: 25px;
    line-height: 35px;
    text-align: center;
    margin: 80px auto 0;
  }
  &__rune2 {
    display: block;
    margin: 80px auto 0;
  }
  &__planet-icon {
    position: relative;
    right: 33px;
    top: -59px;
  }
  &__bottom-text {
    width: 300px;
    font-size: 12px;
    line-height: 14px;
    /* or 129% */
    margin: 70px auto 0;

    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;

    color: #9d9d9d;
  }
}
@media screen and (max-width: 600px) {
  .v-footer {
    &__eye-icon {
      width: 83.64px;
      height: 44.13px;
      top: 0;
      right: -33px;
    }
    &__rune1 {
      width: 32.56px;
      height: 10px;
    }
    &__text {
      font-size: 20px;
      line-height: 28px;
      margin-top: 37px;
    }
    &__rune2 {
      margin-top: 37px;
      width: 32.56px;
      height: 10px;
    }
    &__planet-icon {
      width: 52px;
      right: 15px;
      bottom: 5px;
    }
    &__bottom-text {
      font-size: 7px;
      line-height: 9px;
      margin-top: 20px;
    }
  }
}
</style>
