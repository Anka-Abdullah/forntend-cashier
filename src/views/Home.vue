<template>
  <div class="home">
    <navbar/>
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
import navbar from '../components/navhome'
import sidebar from '../components/sidebar'
import product from '../components/product'
import cart from '../components/cart'
export default {
  name: 'Home',
  components: {
    navbar,
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
