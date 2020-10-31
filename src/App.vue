<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
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
i{
  color: #000;
}
i:hover{
  color: #57CAD5 !important;
}
#navhome{
  height: 60px;
}
#cartnav{
  width: 380px;
  height: 60px;
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
