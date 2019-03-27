<template>
  <div class="homepage">
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
  export default {
  name: 'HomePage',
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
    margin-top: 10%;
    color:white;
    text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;
  }
</style>
