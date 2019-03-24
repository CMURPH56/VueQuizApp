<template>

  <div class="question">
    <h1> Question Number {{QuestionNumber}} </h1>
    <p> {{Questions[0].question}} </p>

    <li v-for="answer in answers">
      <input type="checkbox">
        {{answer.answer}}
      </input>
    </li>

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
          Questions:[
            {
              number:1,
              question: "What is your favorite color?"
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
