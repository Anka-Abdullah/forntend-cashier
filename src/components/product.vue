<template>
    <div>
        <div class="col mb-4">
            <div class="row">
                <div class="card border border-0 mx-auto" style="width: 15rem;">
                    <img src="../assets//ladybug-5508667_640.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <div class="row">
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
            <input type="text" v-model="item" class="form-control shadow"  required>
           </div>
          </div>
          <div class="form-group row">
           <label class="col-3"><h5>Image</h5></label>
            <input type="file" class="col form-control-file" @change="onFileUpload" required>
          </div>
          <div class="form-group row">
           <label class="col-3"><h5>Price</h5></label>
           <div class="col">
            <input type="number" v-model="price" class="col form-control w-75 shadow" required>
           </div>
          </div>
          <div class="form-group row">
           <label for="colFormLabel" class="col-3"><h5>Category</h5></label>
           <div class="col">
            <select class="custom-select w-50 shadow" v-model="category" required>
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
        <button type="submit" style="background: #57CAD5;" @click="onSubmit" class="btn text-white m-2 px-4">Edit</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
