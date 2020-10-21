<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button {
    border: none;
    background: none;
}
button.active.focus, button.active:focus,
button.focus, button:active.focus,
button:active:focus, button:focus {
  outline: none;
  box-shadow: none;
}
input:focus{
    outline: none;
}
#navhome{
  height: 60px;
}
#cartnav{
  width: 380px;
}
.card{
  width: 85%;
}
.card-body{
  height: 100px;
}
</style>
