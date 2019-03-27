<template>
  <div class="homepage">
    <div class="hero-image">
        <div class="hero-text">
<<<<<<< HEAD
          <h1> Which Horror Villian Are YOu?</h1>
          <h1> {{ testData }}</h1>
=======
          <h1> Welcome to Cam's Horror Quiz</h1>
>>>>>>> d054912242cee58394b5d0cae2df1f008858d9d7
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
  import { db } from '../../firebaseConfig.js'
  export default {
    name: 'HomePage',
    data () {
      return{
        testData : ''
      }
    },
    firestore () {
      testData: db.collection('Questions')
    },
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hero{
    height: 100vh;
    width: 100%
  }
<<<<<<< HEAD
  .hero-image{
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/horror-banner.png");
    display:block;
    height: 100%;
    width: 100%;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-size: contain;
    position: absolute;
    background-repeat: no-repeat;
=======
  body{

    background-color:black;
>>>>>>> d054912242cee58394b5d0cae2df1f008858d9d7
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
    margin-top: 10%;
    color:white;
    text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
  }
</style>
