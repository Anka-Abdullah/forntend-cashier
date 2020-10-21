<template>
<div>
    <div id="cartbox" class="p-3 bg-white">
        <!-- item -->
        <div class="navbar">
            <img src="../assets//ladybug-5508667_640.jpg" width="65">
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
    <button class="btn btn-block mt-3 text-white" style="background: #F24F8A;">Checkout</button>
    <button class="btn btn-block mt-2 text-white" style="background: #57CAD5;">Cancel</button>
    </div>
</div>
</template>
<style scoped>
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
