<template>

  <div class="homepage">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Creepster">
    <div class="hero-image">
        <div class="hero-text">
          <h1> Welcome to Cam's Horror Quiz</h1>
        </div>
        <div >
          <form action= "/Question" >
            <input class="button" type="submit" value="Get Started" />
          </form>
        </div>
    </div>
  </div>
</template>

<script>
  import {db} from '../../firebaseConfig'
  export default {

    name: 'HomePage',
    data () {
      return{
        testData : ["cam"]
      }
    },

    props: {
    },
    created(){
      console.log("test")
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hero{
   
    height: 100vh;
    width: 100%
  }

  
  body{
    background-color:black;
  }

  .button{
    margin-top: 250px;
    padding: 20px 50px;
    background-color:white;
    color: black;
  }

  .button:hover{
    background-color:orange;
  }

  .hero-text{
    font-size: 24px;
     font-family: 'Creepster', serif; 
    margin-top: 10%;
    color:green;
    text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
  }
</style>
