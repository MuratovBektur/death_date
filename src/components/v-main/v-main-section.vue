<template>
  <section class="v-main-section">
    <div class="v-main-section__header">
      <div class=" small-text">
        Лучшие астрологи и экстрасенсы Румынии
      </div>
      <div class="grey-line"></div>
      <div class="v-main-section__accuracy-index">
        Точность прогноза: 97%
      </div>
    </div>
    <div class="v-main-section__avatar">
      <div class="v-main-section__avatar-wrapper">
        <img
          class="v-main-section__avatar-bg"
          src="@img/avatar-bg.svg"
          alt="avatar"
        />
        <img
          class="v-main-section__avatar-img"
          src="@img/woman1.png"
          alt="womain"
        />
      </div>
      <div class="v-main-section__blik-wrapper">
        <img class="v-main-section__blik-img" src="@img/blik.png" alt="blik" />
      </div>
    </div>
    <div
      class="question-box"
      data-aos="fade-up"
      data-aos-once
      data-aos-delay="300"
    >
      Вас беспокоит вопрос о том,<br />
      КОГДА ВЫ ПОКИНЕТЕ ЭТОТ МИР И ПРИ КАКИХ ОБСТОЯТЕЛЬСТВАХ?
    </div>
    <div
      class="v-main-section__btns"
      data-aos="fade-up"
      data-aos-once
      data-aos-delay="400"
    >
      <button class="golden-btn">
        <!-- <button class="golden-btn" style="margin-top:30px"> -->
        Да
      </button>
      <button class="golden-btn">
        <!-- <button class="golden-btn" style="margin-top:30px"> -->
        Нет
      </button>
    </div>
    <div class="v-main-section__footer small-text">
      <!-- <div class="small-text" style="margin-top:30px"> -->
      <div>Онлайн предсказание</div>
    </div>
  </section>
</template>

<style lang="scss">
.v-main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  & > div {
    // border: 1px solid red;
  }

  &__header {
    margin-top: 10px;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__accuracy-index {
    font-weight: 300;
    font-size: 25px;
    line-height: 29px;
    // margin-top: 12px;

    text-align: center;
    letter-spacing: 0.1em;

    color: rgba(255, 255, 255, 0.6);
  }
  &__avatar {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    // margin: 65px auto;
    height: 344px;
  }
  &__avatar-wrapper {
    position: relative;
    right: 44px;
    z-index: 1;
  }
  &__avatar-bg {
    position: absolute;
    width: 344px;
  }
  &__btns > button {
    margin-top: 35px;
  }
  &__avatar-img {
    position: relative;
    left: 53px;
    top: 53px;
    width: 240px;
  }
  &__blik-img {
    display: none;
    position: absolute;
    right: 0;
    // top: -9%;
    top: -52px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
  }
}

@media screen and (max-width: 600px) {
  .v-main-section {
    &__header {
      font-size: 12px;
      line-height: 14px;
    }

    &__accuracy-index {
      font-size: 20px;
      line-height: 23px;
    }
    &__avatar {
      height: 223px;
      position: relative;
      width: 100vw;
      // margin-bottom: 15px;
    }
    &__avatar-wrapper {
      right: 34px;
    }
    &__avatar-bg {
      width: 200px;
    }
    &__avatar-img {
      width: 137px;
      left: 32px;
      top: 32px;
    }
    &__btns > button {
      margin-top: 20px;
    }
    &__blik-img {
      display: block;
      object-fit: cover;
      top: -296px;
      width: 533px;
      height: 764px;
    }
  }
}
</style>
