<template>
    <div>
        <div class="sidenav shadow bg-white">
            <button>
                <router-link to="/history">
                <img src="../assets/icon/clipboard.png" width="30">
                </router-link>
            </button>
            <button id="userbtn">
                <router-link to="/cashier">
                <img src="../assets/icon/add.user.png" width="30">
                </router-link>
            </button>
            <button id="cartbtn">
                <img src="../assets/icon/cart.png" width="30">
            </button>
            <button data-toggle="modal" data-target="#staticBackdrop2">
                <img src="../assets/icon/add.png" width="30">
            </button>
            <button>
                <img src="../assets/icon/logout.png" width="30">
            </button>
        </div>
        <!-- Modal -->
<div class="modal fade" id="staticBackdrop2" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border border-0">
        <h4 class="modal-title" id="staticBackdropLabel"><strong>Add Product</strong></h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form action="" enctype="multipart/form-data" method="post">
                     <div class="form-group row">
           <label class="col-3"><h5>Name</h5></label>
           <div class="col">
            <input type="text" class="form-control shadow">
           </div>
          </div>
          <div class="form-group row">
           <label class="col-3"><h5>Image</h5></label>
            <input type="file" class="col form-control-file">
          </div>
          <div class="form-group row">
           <label class="col-3"><h5>Price</h5></label>
           <div class="col">
            <input type="number" class="col form-control w-75 shadow">
           </div>
          </div>
          <div class="form-group row">
           <label for="colFormLabel" class="col-3"><h5>Category</h5></label>
           <div class="col">
            <select class="custom-select w-50 shadow">
              <option value="">...</option>
            <option value="food">Food</option>
             <option value="drink">Drink</option>
            </select>
           </div>
          </div>
          </form>
      </div>
      <div class="modal-footer border border-0">
        <button type="button" style="background: #F24F8A;" class="btn text-white m-2" data-dismiss="modal">Cancel</button>
        <button type="submit" style="background: #57CAD5;" class="btn text-white m-2 px-4">Add</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<style scoped>
.sidenav {
  height: 100%;
  width: 60px;
  position: fixed;
  z-index: 1;
  top: 50px;
  left: 0;
  overflow-x: hidden;
  padding-top: 15px;
}

.sidenav button {
  padding: 30px 8px 6px 17px;
}

</style>
