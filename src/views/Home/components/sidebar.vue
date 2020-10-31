<template>
    <div>
        <div class="sidenav shadow bg-white" style="font-size: 32px;">
            <button class="m-0">
                <router-link to="/history">
                <i class="lni lni-bar-chart"></i>
                </router-link>
            </button>
            <button id="userbtn">
                <router-link to="/cashier">
                <i class="lni lni-users"></i>
                </router-link>
            </button>
            <button id="cartbtn">
                <i class="lni lni-cart"></i>
            </button>
            <button data-toggle="modal" data-target="#staticBackdrop2">
                <i class="lni lni-circle-plus" style="color: rgb(108, 179, 2);"></i>
            </button>
            <button data-toggle="modal" data-target="#logout">
                <i class="lni lni-power-switch" style="color:rgb(99, 1, 1);"></i>
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
            <input type="text" class="form-control shadow" placeholder="Input is only alphabetic" pattern="[A-Za-z]{}">
           </div>
          </div>
          <div class="form-group row">
           <label class="col-3"><h5>Image</h5></label>
           <div class="col">
            <input type="file" class="col form-control-file">
            <p class="m-0 ml-3">.jpeg .jpg .png max 1mb </p>
           </div>
          </div>
          <div class="form-group row">
           <label class="col-3"><h5>Price</h5></label>
           <div class="col">
            <input type="number" class="col form-control w-75 shadow" placeholder="input x 1000">
           </div>
          </div>
          <div class="form-group row">
           <label for="colFormLabel" class="col-3"><h5>Category</h5></label>
           <div class="col">
            <select class="custom-select w-50 shadow">
              <option value="">...</option>
            <option value="1">Food</option>
             <option value="2">Drink</option>
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
<confirm :modalId="'logout'" :yes="'Logout'" :quetion="'Do you want to Sign Out ?'"/>
    </div>
</template>
<script>
import confirm from '../../../components/global/confirm'
export default {
  components: {
    confirm
  }
}
</script>
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
  padding: 20px 8px 6px 16px;
}

</style>
