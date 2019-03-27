<template>

  <div class="question">
    
    <!-- Header -->
    <div class="header">  
      <h1> Question Number {{QuestionNumber}} </h1>
    </div>

    <div class="question-title"> 
      {{Questions[QuestionNumber-1].question}} 
    </div>

    <div class="answer-options">
      <ul>
        <li v-for="answer in Questions[QuestionNumber-1].answers">
          <input type="radio" :id="answer.option" :value="answer.option" v-model="selectedAnswer" >
          <label for="answer.option"> {{answer.answer}} </label>
        </li>
      </ul>
    </div>
 
    <div v-if="QuestionNumber != 5">
      <button v-on:click="clicked">Next Question</button>
    </div>
    <div v-if="QuestionNumber == 5">
          <form action= "/Results" >
            <input v-on:click="finalSubmission" class="button" type="submit" value="Get Started" />
          </form>
      </div>

  </div>
</template>

<script>
  import {store} from  '../store'
  export default {
    store,
    methods:{
      clicked:function(event){
        this.QuestionNumber = this.QuestionNumber + 1;
        this.selectedAnswers.push(this.selectedAnswer);
       
      },
      finalSubmission:function(event){
        var modeMap = {};
        var maxChar = this.selectedAnswers[0], maxCount =1;
        for( var i = 0 ;  i < this.selectedAnswers; i++){
          var el = this.selectedAnswers[i];
          if(modeMap[el] == null)
            modeMap[el] = 1;
          else{
            modeMap[el]++;
          }
          if(modeMap[el] > maxCount){
            maxChar = el;
            maxCount = modeMap[el];
          }
        }
        var monster = 'monster'
        if (maxChar == "a")
          monster = 'Zombie'
        if (maxChar == "b")
          monster = "Witch"
        if(maxChar == "c")
          monster = "Frankenstien"
        if(maxChar == "d")
          monster = "Dracula"
        
        this.$store.commit('setAnswer', monster)
        alert(this.$store.state.answer)
      }
    },
    data(){
      return {
        QuestionNumber: 1,
        selectedAnswer: "",
        selectedAnswers: [],
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
      };
    }
      
  }
</script>


<style>

  body{
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/cat.jpg");
  }
  .header{
    background-color: black;
    color: orange;
  }
  .question-title{
    font-size: 20px;
    color:orange;
  }
  .answer-options{
      font-size: 15px; 
    color: white;
  } 

  ul{
      list-style-type: none;
    }
   
</style>
