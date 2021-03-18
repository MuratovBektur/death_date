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
      {
        id: 5,
        type: "button",
        isNotification: true,
        headerTitle: "",
        question:
          "Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?",
        answerOptions: [
          { id: 1, value: "Да" },
          { id: 2, value: "Затрудняюсь ответить" },
        ],
      },
    ],
    questionPageId: 1,
  },
  mutations: {
    ADD_ANSWER(state, newAnswer) {
      const foundAnswer = state.answers.find(
        (answer) => answer.id == newAnswer.id
      );
      console.log("found", foundAnswer);
      if (foundAnswer) {
        state.answers = state.answers.filter(
          (answer) => answer.id != newAnswer.id
        );
        console.log("newState", state.answers);
        console.log(
          "filtered",
          state.answers.filter((answer) => answer.id == newAnswer.id)
        );
      }
      state.answers = [...state.answers, newAnswer];
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
    calculatedAge: (state) => {
      try {
        const ageObj = state.answers.find((answer) => answer.id == 3);
        if (ageObj) {
          const birthDate = new Date(
            ageObj.answer.selectedYear,
            ageObj.answer.selectedMonth,
            ageObj.answer.selectedDay
          );

          var today = new Date();
          var age = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
          return age;
        } else return;
      } catch (e) {
        return;
      }
    },
    getTitleByAge: (state, getters) => {
      const age = +getters.calculatedAge;
      if (age) {
        if (age < 18) {
          // return "Вали молокосос"
          return "Все будет хорошо";
        } else if (age >= 18 && age < 36)
          return "По вам скучает очень близкий человек, которого больше нет в мире живых.";
        else if (age >= 36 && age < 45)
          return "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.";
        else if (age >= 46)
          return "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.";
        return "Все будет хорошо";
      } else return "";
    },
  },
});

export default store;
