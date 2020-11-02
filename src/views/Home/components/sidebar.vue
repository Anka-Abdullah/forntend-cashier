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
            <button data-toggle="modal" data-target="#addProduct">
                <i class="lni lni-circle-plus" style="color: rgb(108, 179, 2);"></i>
            </button>
            <button data-toggle="modal" data-target="#logout">
                <i class="lni lni-power-switch" style="color:rgb(99, 1, 1);"></i>
            </button>
        </div>
        <!-- Modal -->
<confirm :modalId="'logout'" :yes="'Logout'" :quetion="'Do you want to Sign Out ?'"/>
<modal :modalId="'addProduct'" :yes="'Add'" :title="'Add product'"/>
    </div>
</template>
<script>
import modal from '../../../components/global/modal-product'
import confirm from '../../../components/global/confirm'
export default {
  components: {
    modal,
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
