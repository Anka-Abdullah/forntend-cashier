<template>
<div>
<div class="modal fade" :id="modalId" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border border-0">
        <h4 class="modal-title" id="staticBackdropLabel"><strong>{{ title }}</strong></h4>
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
            <p class="m-0 ml-3 text-muted" style="font-size: 15px;">.jpeg .jpg .png max 1mb</p>
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
        <button type="submit" style="background: #57CAD5;" class="btn text-white m-2 px-4">{{ yes }}</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'ModalProduct',
  // props: ['modalId', 'title', 'yes']
  props: {
    modalId: String,
    title: String,
    yes: String
  }
}
</script>
