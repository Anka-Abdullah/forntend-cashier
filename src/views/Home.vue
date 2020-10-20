<template>
  <div class="home">
    <navbar/>
    <div class="container-fluid" style="margin-top: 70px;">
      <div class="row">
              <div class="col-auto">
        <sidebar/>
      </div>
      <div id="product" class="col" style="margin: 20px 0px 0px 30px;">
        <div class="row row-cols-1 row-cols-md-3">
        <product/>
        <product/>
        <product/>
        <product/>
        </div>
      </div>
      <div id="cart" class="col-auto bg-warning" style="margin: 20px 0px 0px 0px;">
        <h1>Cart</h1>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navhome'
import sidebar from '../components/sidebar'
import product from '../components/product'
export default {
  name: 'Home',
  components: {
    navbar,
    sidebar,
    product
  }
}
</script>
<style scoped>

#cart{
  width: 380px;
}
</style>
