<template>
    <div>
        <div class="col mb-5">
            <div class="row">
                <div class="card border border-0 mx-auto shadow" id="item">
                    <img src="../assets//ladybug-5508667_640.jpg" class="card-img-top">
                    <div class="card-body p-2 col">
                      <div class="my-auto">
                        <h5 class="card-title">Card title - product name web app</h5>
                        <p class="card-text m-0">Rp.20.000,-</p>
                      </div>
                    </div>
                        <div class="card-footer bg-white row m-0 p-0 border border-0">
                            <div class="ml-auto">
                                <button>
                                    <img src="../assets/icon/delete.png" alt="">
                                </button>
                                <button data-toggle="modal" data-target="#staticBackdrop">
                                    <img src="../assets/icon/edit.png" alt="">
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border border-0">
        <h4 class="modal-title" id="staticBackdropLabel"><strong>Edit Product</strong></h4>
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
            <p class="m-0 ml-3">.jpeg .jpg .png</p>
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
            <option value="food">Food</option>
             <option value="drink">Drink</option>
            </select>
           </div>
          </div>
          </form>
      </div>
      <div class="modal-footer border border-0">
        <button type="button" style="background: #F24F8A;" class="btn text-white m-2" data-dismiss="modal">Cancel</button>
        <button type="submit" style="background: #57CAD5;" class="btn text-white m-2 px-4">Edit</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<style scoped>
.card-body{
  height: 100px;
}
</style>
