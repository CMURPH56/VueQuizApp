<template>

  <div class="question">
    <h1> Question Number {{QuestionNumber}} </h1>
    <p>   {{Questions[QuestionNumber-1].question}} </p>
    <div class="answer-options">
      <ul>
        <li v-for="answer in answers">
          <input type="radio" :id="answer.number" :value="answer.number" v-model="selectedAnswer" >
          <label for="answer.number"> {{answer.answer}} </label>
        </li>
      </ul>
    </div>
    <div>
       checked answer: {{selectedAnswer}} 
     </div>
    <button v-on:click="clicked">Submit answer</button>
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
          if(this.selectedAnswer == "1"){
            alert("Demon")
          }
          if(this.selectedAnswer == "2"){
            alert("Sea Creature")
          }
          if(this.selectedAnswer == "3"){
            alert("Frankenstien")
          }

          if(this.selectedAnswer == "4"){
            alert("Dracula")
          }
      },

    }
  }

</script>
