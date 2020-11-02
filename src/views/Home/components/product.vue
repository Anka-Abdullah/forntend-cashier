<template>
<div>
        <div class="col mb-5">
            <div class="row">
                <div class="card border border-0 mx-auto shadow" id="item">
                    <img src="../../../assets/ladybug-5508667_640.jpg" class="card-img-top">
                    <div class="card-body p-2 col">
                      <div class="my-auto">
                        <h5 class="card-title">Card title - product name web app</h5>
                        <p class="card-text m-0">Rp.20.000,-</p>
                      </div>
                    </div>
                        <div class="card-footer bg-white row m-0 p-0 border border-0">
                            <div class="ml-auto">
                                <button data-toggle="modal" data-target="#delete">
                                    <i class="lni lni-trash"></i>
                                </button>
                                <button data-toggle="modal" data-target="#edit">
                                    <i class="lni lni-pencil"></i>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
<confirm :modalId="'delete'" :yes="'Delete'" :quetion="'Delete this product ?'"/>
<modal :modalId="'edit'" :yes="'Edit'" :title="'Edit product'"/>
    </div>
</template>
<script>
// import axios from 'axios'
import modal from '../../../components/global/modal-product'
import confirm from '../../../components/global/confirm'
export default {
  components: {
    modal,
    confirm
  },
  data () {
    return {
      products: []
    }
  }
  // methods: {
  //   getData () {
  //     axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
  //       console.log(res.data)
  //     })
  //   }
  // }
}
</script>
<style scoped>
.card-body{
  height: 100px;
}
</style>
