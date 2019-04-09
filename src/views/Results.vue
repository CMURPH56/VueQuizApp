<template>
    <div class= "result">
        <h1>  You got {{answer}} !!! </h1>
    <div>
        Most Popular Answers
        
        <ul class="response-results">
            <li v-for="response in Responses">
                {{response.Name}}  {{response.Count}}  
            </li>
        </ul>

    </div>
    
    </div>
</template>

<style>
.result{
    margin-top: 10%;
    color: white;
    text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
}
.response-results{
  list-style-type: none;
}

</style>
<script>
import {db} from '../../firebaseConfig'
import {store} from'../store.js';
export default{
  data(){
      return {
       Responses: [],
      };
    },
    computed: {
      answer() {
        return this.$store.state.answer;
      }
    },

    created(){
      db.collection('Responses').get().then((querySnapshot) =>{
        this.loading= false
        querySnapshot.forEach((doc) =>{
          let data ={
            'Count' : doc.data().Count,
            'Name' : doc.data().Name,
          }
          this.Responses.push(data)
        })
      })
    }
}
</script>
