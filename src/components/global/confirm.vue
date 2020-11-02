<template>
    <div>
    <div class="modal fade" :id="modalId" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border border-0">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <h3 class="text-center">{{ quetion }}</h3>
      </div>
      <div class="modal-footer border border-0">
        <button type="button" style="background: #F24F8A;" class="btn text-white mx-2 px-3 shadow" data-dismiss="modal"><h5 class="m-0">cancel</h5></button>
        <button type="submit" style="background: #57CAD5;" class="btn text-white mx-2 px-3 shadow"><h5 class="m-0">{{ yes }}</h5 ></button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
export default {
  props: ['modalId', 'quetion', 'yes']
}
</script>
