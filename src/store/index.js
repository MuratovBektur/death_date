import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        answers: []
    },
    mutations: {
        ADD_ANSWER(state, answer) {
            state.answers = [...state.answers, answer]
        }
    }
})

export default store