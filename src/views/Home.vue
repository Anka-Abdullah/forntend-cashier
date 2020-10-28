<template>
  <div class="home">
    <div class="fixed-top">
<nav class="navbar navbar-light p-0 shadow-sm bg-white" id="navhome">
    <button style="margin-left: 10px">
<img src="../assets/icon//menu.png" width="25">
    </button>
  <span class="navbar-brand mb-0 h1 mx-auto"><h4 class="m-0">Food Items</h4></span>
  <nav class="navbar navbar-light p-0" id="cartnav">
  <span class="navbar-brand mb-0 h1 mx-auto"><h4 class="m-0">Cart</h4></span>
</nav>
</nav>
</div>
    <div class="container-fluid bg-light" style="margin-top: 42px;">
      <div class="row">
        <div class="col-auto">
        <sidebar/>
      </div>
      <div class="col" id="product">
        <div class="row row-cols-1 row-cols-md-3 p-0">
        <product/>
        <product/>
        <product/>
        <product/>
        </div>
      </div>
      <div id="cart" class="col-auto shadow">
          <cart/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar'
import product from '../components/product'
import cart from '../components/cart'
export default {
  name: 'Home',
  components: {
    sidebar,
    product,
    cart
  }
}
</script>
<style scoped>
#product{
  margin-left: 40px;
  margin-right: 10px;
  margin-top: 60px;
}
#cart{
  width: 380px;
  margin: 20px 0px 0px 0px;
  background-color: white;
}
</style>
