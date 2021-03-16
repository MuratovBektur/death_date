<template>
  <section class="v-first-question">
    <div class="question-box">Боитесь ли вы умереть?</div>
    <div class="v-first-question__btns">
      <button class="golden-btn" @click="addAnswer(1)">Да</button>
      <button class="golden-btn" @click="addAnswer(2)">Нет</button>
    </div>
    <div class="small-text">Вопрос 1-5</div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    addAnswer(answer) {
      this.ADD_ANSWER({ answerId: 1, answer });

      this.$router.push("/question/2");
    },
    ...mapMutations(["ADD_ANSWER"]),
  },
};
</script>

<style lang="scss">
.v-first-question {
  &__btns {
    margin-top: 47px;
  }
  &__btns > button {
    margin-bottom: 35px;
  }
}
@media screen and (max-width: 600px) {
  .v-first-question {
    &__btns {
      margin-top: 27px;
    }
    &__btns > button {
      margin-bottom: 20px;
    }
  }
}
</style>
