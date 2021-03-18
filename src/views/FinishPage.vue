<template>
  <div class="container">
    <div class="finish-page">
      <header
        class="finish-page__header"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <div class="finish-page__header-text">
          Спасибо за Ваши ответы!
          <br />
          <b>
            Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.
          </b>
        </div>
      </header>
      <div class="finish-page__grey-text">
        Вы можете узнать, как повлиять на события, которые ожидают вас в
        ближайшем будущем.
      </div>

      <div class="finish-page__important-text">
        <b>Первое значимое событие может произойти уже 14.02.2021</b>, вам надо
        быть готовым, что бы последствия не оказались необратимыми.
      </div>
      <div class="finish-page__grey-text">
        Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона.
        Прослушайте важную информацию!
      </div>
      <button class="finish-page__btn" @click="submit">
        Позвонить и прослушать
      </button>
      <footer class="small-text footer">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
        FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    if (this.answers.length != 5) {
      this.$router.push("/");
    }
  },
  methods: {
    async submit() {
      try {
        let response = await fetch("https://swapi.dev/api/people/1/");
        if (response.ok) {
          response = await response.json();
          console.log(response);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  computed: {
    ...mapState(["answers"]),
  },
};
</script>

<style lang="scss">
.finish-page {
  min-height: 100vh;
  &__header {
    margin-top: 20px;
    min-height: 224px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__header-text {
    width: 420px;
    font-size: 25px;
    line-height: 35px;
    /* or 140% */

    text-align: center;
    background-color: #fff;
    color: #202024;
    padding: 12px 0;
    opacity: 1;
    position: relative;
  }
  &__header-text::after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-color: #fff transparent;
    border-width: 20px 11px 0;
    bottom: -20px;
    left: 90%;
    margin-left: -11px;
  }
  &__grey-text {
    max-width: 470px;
    font-weight: 300;
    margin: 37px auto 20px;
    font-size: 25px;
    line-height: 35px;
    /* or 140% */
    display: flex;
    align-items: center;

    text-align: center;
    text-transform: uppercase;

    color: #ffffff;
  }
  &__important-text {
    margin: 0 auto;
    width: 480px;
    border: 1px solid #ffffff;
    padding: 64px 50px 38px;
    border-radius: 3px;
    font-size: 25px;
    line-height: 35px;
    /* or 140% */

    text-align: center;
    text-transform: uppercase;

    color: #f6c866;
  }
  &__btn {
    width: 310.75px;
    height: 69.44px;
    background-size: 200% auto;
    color: #ffffff;
    border-radius: 50px;
    transition: 0.5s;
    font-size: 20px;
    line-height: 23px;
    text-transform: capitalize;
    display: block;
    border: none;
    margin: 0 auto;
    cursor: pointer;
    background-image: linear-gradient(
      248.67deg,
      green 30.84%,
      rgba(255, 255, 255, 0.64) 46.06%,
      green 64.04%
    );
    animation: 5s infinite greenbtnbgcolorchange;
    animation-direction: alternate;
  }
  @keyframes greenbtnbgcolorchange {
    100% {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
  }
  & footer {
    margin-top: 10px;
    font-size: 12px;
    line-height: 18px;
  }
}

@media screen and (max-width: 600px) {
  .finish-page {
    display: flex;
    flex-direction: column;
    // justify-content: space-evenly;
    &__header {
      margin-top: 0;
      height: 16vh;

      min-height: auto;
    }
    &__header-text {
      font-size: 14px;
      line-height: 17px;

      width: 234px;
      padding: 0;
    }
    &__header-text::after {
      border-width: 11px 5px 0;
      bottom: -11px;
      margin-left: -5px;
    }
    &__grey-text {
      margin: 5px auto;
      width: 220px;
      font-size: 14px;
      line-height: 16px;
      height: 16vh;
    }
    &__important-text {
      padding: 5px 15px;
      font-size: 16px;
      line-height: 25px;
      width: 259px;
    }
    &__btn {
      width: 238.01px;
      height: 40px;
      font-size: 14px;
      line-height: 16px;
    }
    & footer {
      position: absolute;
      bottom: 5px;
      font-family: Roboto;
      font-size: 7px;
      line-height: 9px;
      letter-spacing: 3px;
    }
  }
}
</style>
