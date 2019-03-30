import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firebaseAction } from 'vuexfire'
Vue.use(Vuex)

//Firebase Configuration
import {db} from '../firebaseConfig'
var QuestionsRef = db.collection("Questions")

export default new Vuex.Store({
  state: {
    answer: 'test',
    Questions:[
      {
        number:1,
        question: "What is your favorite color?",
        answers:[
          {
              option: "a",
              answer: "grey"
            },
            {
              option: "b",
              answer: "purple"
            },
            {
              option: "c",
              answer: "green"
            }, 
            {
              option: "d",
              answer: "black"
            }
        ]
      },
      {
        number:2,
        question: "If you had to live in any of the following time periods which one would it be?",
        answers:[
          {
              option: "a",
              answer: "20th Century"
            },
            {
              option: "b",
              answer: "16th Century"
            },
            {
              option: "c",
              answer: "19th Century"
            }, 
            {
              option: "d",
              answer: "18th Century"
            }
        ]
      },
        {
        number:3,
        question: "Which country would you most want to live in?",
        answers:[
          {
              option: "a",
              answer: "United States"
            },
            {
              option: "b",
              answer: "England"
            },
            {
              option: "c",
              answer: "Germany"
            }, 
            {
              option: "d",
              answer: "Romania"
            }
        ]
      },
      {
        number:4,
        question: "How would you best describe your personality?",
        answers:[
          {
              option: "a",
              answer: "Lethargic"
            },
            {
              option: "b",
              answer: "Shrill"
            },
            {
              option: "c",
              answer: "Brutish"
            }, 
            {
              option: "d",
              answer: "Pretentious"
            }
        ]
      },
      {
        number:5,
        question: "How would you friends best describe you?",
        answers:[
          {
              option: "a",
              answer: "Lazy"
            },
            {
              option: "b",
              answer: "Crazy cat person"
            },
            {
              option: "c",
              answer: "Idiot"
            }, 
            {
              option: "d",
              answer: "Loner"
            }
        ]
      }
    ]

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
