import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    answers: [],
    questions: [
      {
        id: 2,
        type: "button",
        headerTitle:
          "Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.",
        question: "Когда Вы чувствуете себя наиболее комфортно?",
        answerOptions: [
          { id: 1, value: "Утро" },
          { id: 2, value: "День" },
          { id: 3, value: "Вечер" },
          { id: 4, value: "Ночь" },
        ],
      },
      {
        id: 3,
        type: "select",
        headerTitle:
          "Уже совсем скоро Вы узнаете много интересного о своем будущем!",
        question: "Укажите свою дату рождения:",
      },
      {
        id: 4,
        type: "button",
        headerTitle:
          "Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!",
        question: "Снятся ли Вам умершие люди?",
        answerOptions: [
          { id: 1, value: "Да" },
          { id: 2, value: "Нет" },
          { id: 3, value: "Иногда" },
        ],
      },
    ],
    questionPageId: 1,
  },
  mutations: {
    ADD_ANSWER(state, answer) {
      state.answers = [...state.answers, answer];
    },
    CHANGE_ID(state, id) {
      state.questionPageId = id;
    },
  },
  getters: {
    currentQuestion: (state) => {
      return state.questions.find(
        (question) => question.id == state.questionPageId
      );
    },
  },
});

export default store;
