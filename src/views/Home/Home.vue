<template>
  <div>
    <div class="container-fluid bg-light">
      <nav class="navbar p-0 m-0">
          <navbar :width="'width: calc(100% - 380px);'"
                  :link="{name: 'Home'}"
                  :icon="'lni lni-menu'"
                  :title="'Food Items'"
                  :titleB="'Cart'" />
          <nav class="navbar p-0 m-0 bg-white shadow-sm ml-auto fixed-top" id="cartnav">
            <div class="row mx-auto">
            <h3 class="m-0">Cart</h3>
            <div class="ml-1 m-0 p-0" id="count">
              <span>0</span>
            </div>
            </div>
          </nav>
      </nav>
      <div class="row" style="margin-top: 60px;">
        <div class="col-auto">
        <sidebar/>
      </div>
      <div class="col" id="product">
    <div class="row row-cols-1 row-cols-md-3 p-0">
        <product/>
    </div>
        </div>
          <cart/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/global/navbar'
import sidebar from './components/sidebar'
import product from './components/product'
import cart from './components/cart'
export default {
  name: 'Home',
  components: {
    navbar,
    sidebar,
    product,
    cart
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
#product{
  margin-left: 40px;
  margin-right: 10px;
  margin-top: 30px;
}
#count {
  margin-top: 20px;
  margin-left: 10px;
  width: 23px;
  height: 23px;
  border-radius: 100%;
  background-color: #57CAD5;
  color: white;
  display: flex;
}
#count span {
  margin: auto;
}
</style>
