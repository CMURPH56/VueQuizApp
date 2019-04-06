<template>
  <div class="question">
    <!-- Header -->
    <div class=header>
      <h1> Question Number {{QuestionNumber}} </h1>
   </div>
    <div class="question-title"> 
      {{testQuestions[QuestionNumber-1].Question}} 
    </div>
        <div class= "radio-buttons">
          <label v-for="answer in testQuestions[QuestionNumber-1].answers" class="button-label"  >
            <input type="radio" :value="answer.option" name="answer.Answer" v-model="selectedAnswer">
            <span>   {{answer.Answer}} </span>
          </label>
    <div v-if="QuestionNumber != 9" class="next-button">
      <button v-on:click="clicked">Next Question</button>
    </div>
    <div v-if="QuestionNumber == 9" class= "submit-button">
          <form action= "/Results" >
            <input v-on:click="finalSubmission" type="submit" value="Submit Results" />
          </form>
      </div>
 </div>
  </div>
</template>

<style>

  body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/cat.jpg");
  }
  .question-title{
    color: orange;
    font-size: 20px;
  }
  .header{
    background-color: black;
    color: orange;
  }
  .radio-buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .radio-buttons input[type="radio"] {
    display:none; 
  }
  .radio-buttons label {
    display:block;
    margin-top: 10px;
    background-color: white;
    font-size:20px;
    border: 3px solid black;
    border-radius: 7px ;   
    padding:3px; 
  }
  

 .radio-buttons :checked + span {
    background-color:orange;
}
.radio-buttons :hover {
  background-color: grey;
}

.next-button{
  margin-top: 15px;
}
.submit-button{
  margin-top: 15px;
}
   
</style>

<script>
  import {store} from  '../store'
  import { isUndefined } from 'util';
  import {db} from '../../firebaseConfig'

  export default {
    data(){
      return {
        QuestionNumber: 1,
        selectedAnswer: "",
        selectedAnswers: [],
        testQuestions: []        
      };
    },
    created(){
      console.log("test")
      db.collection('Questions').get().then((querySnapshot) =>{
        this.loading= false
        querySnapshot.forEach((doc) =>{
          let data ={
            'Number' : doc.data().Number,
            'Question': doc.data().Question,
            'answers': doc.data().answers
          }
          this.testQuestions.push(data)
        })
      })
    },
    
    methods:{
      clicked:function(event){
        this.QuestionNumber = this.QuestionNumber + 1;
        this.selectedAnswers.push(this.selectedAnswer);
       
      },
      finalSubmission:function(event){
        var modeMap = {};
        var maxChar = this.selectedAnswers[0], maxCount = 1;
   
        for( var i = 0 ;  i < this.selectedAnswers.length ; i++){ 
          var el = this.selectedAnswers[i];
          if(modeMap[el] == null){
            modeMap[el] = 1;
          }
          else{
            modeMap[el]++;
          }
          if(modeMap[el] > maxCount){
            maxChar = el;
            maxCount = modeMap[el];
          }
        }
        var monster = 'monster'
        if (maxChar == "A")
          monster = 'Zombie \nPeople who get Zombie are trendy, popular, and hardworking'
        if (maxChar == "B")
          monster = "Witch \nPeople who get Witch are inventive, mysterious, and good with animals"
        if(maxChar == "C")
          monster = "Frankenstien \nPeople who get Frankenstien are athletic, stubborn, and misunderstood"
        if(maxChar == "D")
          monster = "Dracula \nPeople who get Dracula are intelligent, reserved, and will do anything to get ahead"
        
        this.$store.commit('setAnswer', monster)
        alert(this.$store.state.answer)
      }
    },
      
  }
</script>

