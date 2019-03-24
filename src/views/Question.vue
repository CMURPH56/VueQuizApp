<template>

  <div class="question">
    <h1> Question Number {{QuestionNumber}} </h1>
    <p>   {{Questions[QuestionNumber-1].question}} </p>

    <div class="answer-options">
      <ul>
        <li v-for="answer in answers">
          <input type="checkbox" :id="answer.number" :value="answer.answer" >
          <label :for="answer.number"> {{answer.answer}} </label>
        </li>
      </ul>
    </div>

    <button v-on:click="clicked">Next Question</button>

  </div>

</template>

<script>

  export default {
    data(){
      return {
          QuestionNumber: 1,
          answers:[
            {
              number: "1",
              answer: "red"
            },
            {
              number: "2",
              answer: "blue"
            },
            {
              number: "3",
              answer: "green"
            }, 
            {
              number: "4",
              answer: "black"
            }
          ],
          selectedAnswer: "",
          Questions:[
            {
              number:1,
              question: "What is your favorite color?"
            },
            {
              number:2,
              question: "What is your favorite time period?"
            }
          ]
        };
      },
      methods:{
        clicked:function(event){
        this.QuestionNumber = this.QuestionNumber + 1;
      },

    }
  }

</script>
