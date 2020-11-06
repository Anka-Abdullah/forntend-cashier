<template>
      <div id="cart" class="col-auto shadow">
    <div id="cartbox" class="p-3 bg-white">
        <!-- item -->
        <div class="navbar">
            <img src="../../../assets/ladybug-5508667_640.jpg" width="65">
            <div class="col">
                <h6>Product Name</h6>
                <div id="count">
                    <a>-</a>
                    <div id=countcart>0</div>
                    <a>+</a>
                </div>
            </div>
            <p class="mt-auto m-0">Rp14.000,-</p>
        </div>
    </div>
    <div id="footer">
    <div class="navbar p-0">
        <div class="col">
            <h6><strong>Total :</strong></h6>
            *Belum termasuk ppn
        </div>
        <h6 class="ml-auto mb-auto"><strong>Rp1.000.000,-</strong></h6>
    </div>
    <button class="btn btn-block mt-3 text-white" style="background: #F24F8A;" data-toggle="modal" data-target="#staticBackdrop8">Checkout</button>
    <button class="btn btn-block mt-2 text-white" style="background: #57CAD5;">Cancel</button>
    </div>
        <!-- Modal -->
<div class="modal fade" id="staticBackdrop8" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border border-0">
        <h4 class="modal-title" id="staticBackdropLabel"><strong>Checkout</strong></h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          ...
      </div>
      <div class="modal-footer border border-0">
        <button type="button" style="background: #F24F8A;" class="btn text-white mx-3 btn-block" data-dismiss="modal"><h5 class="m-0">print</h5></button>
            <h5 class="mx-auto m-0">Or</h5>
        <button type="submit" style="background: #57CAD5;" class="btn text-white mx-3 btn-block"><h5 class="m-0">send email</h5 ></button>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'Cart'
}
</script>
<style scoped>
#cart{
  height: calc(100vh - 60px);
  width: 380px;
  background-color: white;
}
#footer{
    position: fixed;
    margin-top: 425px;
    width: 355px;
}
#cartbox{
  width: 380px;
  height: 410px;
  position: fixed;
  z-index: 1;
  top: 50px;
  right: 0;
  overflow-x: hidden;
  overflow: scroll;
  padding-top: 15px;
}
a {
background-color: rgb(236, 252, 240);
  height: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
}
#count{
    color: #03b109;
    border: 1px solid #03b109;
    display: flex;
    width: 90px;
    border-radius: 5px;
    overflow: hidden;
}
#countcart {
  border-right: 1px solid #03b109;
  border-left: 1px solid #03b109;
  height: 30px;
  width: 30px;
text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
}
</style>
