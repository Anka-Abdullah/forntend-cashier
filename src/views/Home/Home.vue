<template>
  <div>
    <div class="container-fluid bg-light">
      <nav class="navbar p-0 m-0">
          <Navbar width="width: calc(100% - 380px);"
                  title="Food Items" />
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
        <Sidebar/>
      </div>
      <div class="col" id="product">
        <Product/>
        </div>
          <Cart/>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Navbar from '../../components/global/Navbar'
import Sidebar from './components/Sidebar'
import Product from './components/Product'
import Cart from './components/Cart'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Product,
    Cart
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
