<template>
  <div id="app">
    <div id="nav">
      
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
      <router-link to="/Question"></router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  display:flex;
  flex-direction: column;

  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
