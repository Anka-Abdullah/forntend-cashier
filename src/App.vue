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
#item{
  width: 85%;
}
#board {
  margin: 35px 20px;
  width: 30%;
  height: 190px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  background-color: aqua;
}
</style>
