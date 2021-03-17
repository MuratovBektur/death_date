<template>
  <div class="container">
    <div class="v-question-page">
      <template v-if="isLoaded && currentQuestion">
        <header
          class="v-question-page__header"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <div
            :class="[
              {
                'v-question-page__header-text-notification':
                  currentQuestion.isNotification,
              },
              'v-question-page__header-text',
            ]"
          >
            {{ currentQuestion.headerTitle }}
          </div>
          <img
            class="v-question-page__eye-icon"
            src="@img/eye.svg"
            alt="eye-icon"
          />
        </header>
        <div class="v-question-page__content-section">
          <main data-aos="fade-up" data-aos-delay="300">
            <div class="v-question-page__question-section question-box">
              {{ currentQuestion.question }}
            </div>
            <div class="v-question-page__btns">
              <template v-if="currentQuestion.type === 'button'">
                <button
                  class="golden-btn"
                  v-for="answer in currentQuestion.answerOptions"
                  :key="answer.id"
                  @click="addAnswer(answer.id)"
                >
                  {{ answer.value }}
                </button>
              </template>
              <!-- <input type="text" class="question-input" /> -->

              <template v-else>
                <div class="v-question-page__select center-btn">
                  <span class="select-wrapper">
                    <select v-model="form.selectedDay">
                      <option value="*" disabled selected>День</option>
                      <option :value="n" v-for="n in 31" :key="n">{{
                        n
                      }}</option>
                    </select>
                  </span>
                </div>
                <div class="v-question-page__select center-btn">
                  <span class="select-wrapper">
                    <select v-model="form.selectedMonth">
                      <option value="*" disabled selected>Месяц</option>
                      <option :value="n" v-for="n in 12" :key="n">{{
                        n
                      }}</option>
                    </select>
                  </span>
                </div>
                <div class="v-question-page__select center-btn">
                  <span class="select-wrapper">
                    <select v-model="form.selectedYear">
                      <option value="*" disabled selected>Год</option>
                      <option :value="n" v-for="n in aviableYears" :key="n">{{
                        n
                      }}</option>
                    </select>
                  </span>
                </div>
                <button class="golden-btn" @click="addAnswer(null)">
                  Далее
                </button>
              </template>
            </div>
          </main>
          <footer>
            <div>
              <img
                class="v-question-page__planet-icon"
                src="@img/planet.svg"
                alt="planet-icon"
              />
              <div class="v-question-page__footer-text small-text">
                Вопрос {{ questionPageId }}-5
              </div>
            </div>
          </footer>
        </div>
      </template>

      <div v-else class="v-question-page__spinner">
        <div>
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="v-question-page__spinner-text">Loading</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isLoaded: false,
      questionId: null,
      aviableYears: Array(121).fill(1),
      form: {
        selectedDay: "*",
        selectedMonth: "*",
        selectedYear: "*",
      },
    };
  },
  mounted() {
    const { id } = this.$route.params;
    if (isNaN(id) || id < 2 || id > 5) {
      this.$router.replace("/");
    } else {
      let beginYear = new Date().getFullYear() - 5;
      this.aviableYears = this.aviableYears.map(() => beginYear--);
      this.CHANGE_ID(id);
    }
    window.onpopstate = () => {
      this.CHANGE_ID(id);
      this.isLoaded = true;
    };
    console.log(id);
    setTimeout(() => (this.isLoaded = true), 500);
  },
  methods: {
    ...mapMutations(["CHANGE_ID", "ADD_ANSWER"]),
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    addAnswer(answer) {
      if (this.questionPageId == 3) {
        const canSubmit = !Object.values(this.form).some((v) => v === "*");
        if (!canSubmit) {
          return;
        }
      }
      this.ADD_ANSWER({
        answerId: this.questionPageId,
        answer: answer == null ? this.form : answer,
      });
      if (this.questionPageId == 4) {
        this.$router.push("/");
        return;
      }
      this.CHANGE_ID(+this.questionPageId + 1);
      this.isLoaded = false;
      this.$router.push("/question/" + this.questionPageId);
    },
  },
  async updated() {
    if (this.isLoaded === false) {
      await this.sleep(2000);
      this.isLoaded = true;
    }
    window.onpopstate = (e) => {
      const { id } = this.$route.params;
      console.log("e", e);
      this.CHANGE_ID(id);
      this.isLoaded = true;
    };
    console.log(this.form);
  },
  computed: {
    ...mapGetters(["currentQuestion"]),
    ...mapState(["questionPageId"]),
  },
  watch: {
    form(val) {
      console.log(val);
    },
  },
  // methods:{
  //   store.getters.getTodoById(2);
  // }
};
</script>

<style lang="scss">
.v-question-page {
  min-height: 100vh;
  &__spinner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__spinner-text {
    color: rgba(255, 255, 255, 0.6);

    margin-top: 15px;
    text-align: center;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
  }
  &__header {
    min-height: 224px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  &__header-text {
    position: relative;
    left: 73px;
    width: 420px;
    font-family: Bad Script;
    font-size: 25px;
    line-height: 35px;
    /* or 140% */

    text-align: center;

    opacity: 0.6;
  }
  &__header-text-notification {
    background-color: #fff;
    color: #202024;
    padding: 12px 0;
    opacity: 1;
    position: relative;
  }
  &__header-text-notification::after {
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
  &__eye-icon {
    position: relative;
    height: 77px;

    left: 19px;

    top: 76px;
  }
  &__question-section {
    margin-top: 74px;
    max-width: 503px;
    text-transform: uppercase;
  }
  &__btns {
    margin: 22px 0 58px;
  }
  &__btns > button:not(:last-child) {
    margin-bottom: 32px;
  }
  &__select {
    margin-bottom: 32px;
  }
  &__planet-icon {
    display: block;
    margin: 59px auto 0;
    position: relative;
    right: 250px;
    height: 89px;
  }
  & footer {
    margin: 35px 0 20px;
  }
}
@media screen and (max-width: 600px) {
  .v-question-page {
    display: flex;
    flex-direction: column;
    &__header {
      min-height: 124px;
    }
    &__header-text {
      font-size: 14px;
      line-height: 20px;

      width: 234px;
      left: 34px;
    }
    &__eye-icon {
      height: 44px;

      left: 21px;
      top: 41px;
    }
    &__content-section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-grow: 1;
    }
    &__question-section {
      margin-top: 36px;
      max-width: 288px;
    }
    &__btns {
      margin: 40px 0 0;
    }
    &__btns > button:not(:last-child) {
      margin-bottom: 20px;
    }
    &__select {
      margin-bottom: 20px;
    }
    &__planet-icon {
      display: block;
      margin: 30px auto 0;
      position: relative;
      right: calc(50vw - 20px);
      height: 51px;
      width: 37px;
      object-fit: cover;
      object-position: 100%;
    }
    & footer {
      margin-top: 0;
    }
    &__footer-text {
      margin-top: -25px;
    }
  }
}
</style>
