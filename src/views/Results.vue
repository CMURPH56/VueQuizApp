<template>
    <div class= "result">
        <h1> Thanks for playing!  </h1>

    <div>
        Most Popular Answers
        <ul class ="response-results">
            <li v-for="response in Responses">
                {{response.Name}}  {{response.Count}}  
            </li>
        </ul>
        <div>
        <svg class ="pie">
          <circle
            v-for= "item in dataObjects"
            v-bind:style="{strokeDashArray: `${item.RelativeSize} ${circleLength}`, strokeDashoffset: item.offset}"
            r="25%"
            cx="50%"
            cy="50%"
            />
        </svg>
        </div>

    </div>
    
    </div>
</template>

<style lang="scss">
.result{
    margin-top: 10%;
    color: white;
       text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
}
.response-results{
  list-style-type: none;
}
.pie circle {
  fill: none;
  stroke-width: 32px;
  transition: stroke-dasharray 0.3s ease-in-out, stroke-dash-offset 0.3s ease-in-out;
}
$colors: red, yellow, cyan, green,black, white, grey, purple;
@for $i from 1 through length($colors){
  .pie circle:nth-child(#{$i}){
    stroke: nth($colors, $i);
  }
}
</style>

<script>
  import {db} from '../../firebaseConfig'
  import { setInterval } from 'timers';
  export default{
    mounted(){
      setTimeout(() => {this.hasMounted = true}, 0);
      setInterval(()=> {this.shuffle(this.data)}, 1000);
    }, 
    data(){
      return {
       Responses: [],
       data: [30,20,40,50],
       circleLength: 371.9451599,
       hasMounted: false,
      };
    },
    methods: {
      shuffle(data){
        let dataCopy = data.slice();
        let temp;
        let index;
        let randomIndex;

        for(index = 0; index < dataCopy.length; index++){
          randomIndex = Math.floor(Math.random() * index);
          temp = dataCopy[index]
          dataCopy[index]= dataCopy[randomIndex]
          dataCopy[randomIndex] = temp
        }
        this.data = dataCopy
       
      }
    },
    computed: {
      dataTotal(){
        return this.data.reduce((previous,current) => previous + current);
      },
      dataObjects(){
        let startingPoint = 0;

        return this.data.map(item =>{
          let relativeSize = ((item /this.dataTotal) * this.circleLength)
          let dataObject = { relativeSize: this.hasMounted ? relativeSize: 0, offset: -startingPoint}
          startingPoint += relativeSize;
          return dataObject
        })
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
