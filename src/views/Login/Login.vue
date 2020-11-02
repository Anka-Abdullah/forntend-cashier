<template>
  <div id="container">
    <div id="forms-container">
      <div id="sign-in">
        <form action="" method="post" id="sign-in-form">
          <h2 id="title">Sign In</h2>
          <div id="input-field">
            <i class="lni lni-user"></i>
            <input type="text" placeholder="Email">
          </div>
          <div id="input-field">
            <i class="lni lni-lock-alt"></i>
            <input type="password" placeholder="Password">
          </div>
          <button type="submit" id="btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
#container{
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: aquamarine ;
  overflow: hidden;
}
#forms-contanier{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
#title{
  font-size: 2.2rem;
  color: rgb(104, 103, 103);
  margin-bottom: 10px;
  font-weight: 700;
}
#input-field{
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: white;
  margin: 10px 0;
  border-radius: 55px;
  display:grid;
  grid-template-columns: 15% 85%;
}
#input-field i{
  text-align: center;
  line-height: 55px;
  color: #acacac;
  font-size: 1.5rem;
  font-weight: 700;
}
#input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}
#input-field input::placeholder{
  color: #aaa;
  font-weight: 500;
}

#btn{
  width: 150px;
  height: 49px;
  border: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #518ffa;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: .2s;
}
#btn:hover{
  background-color: #385d9c;
}
</style>
