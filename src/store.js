import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firebaseAction } from 'vuexfire'
Vue.use(Vuex)

//Firebase Configuration
import {db} from '../firebaseConfig'
var QuestionsRef = db.collection("Questions")

export default new Vuex.Store({
  state: {
    answer: '',
  },
 // modules: { questionsTest },
  mutations: {
    setAnswer (state, input) {
      state.answer = input
    },

  },
  actions: {

  },
  getters:{
    loadedQuestions(state){
      return state.Questions
    }
  }
})
