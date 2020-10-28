<template>
    <div>
        <div class="fixed-top">
            <nav class="navbar bg-light p-0 px-3 shadow" id="navhome">
                <button style="margin-left: 10px">
                    <router-link to="/">
                        <img src="../assets/icon//menu.png" width="25">
                    </router-link>
                </button>
                <span class="navbar-brand mb-0 h1 mx-auto">
                    <h4 class="m-0">cashier list</h4>
                </span>
                <button class="mr-2">
                    <router-link to="/history">
                        <img src="../assets/icon/clipboard.png" width="30">
                    </router-link>
                </button>
            </nav>
        </div>
        <div class="container" style="margin-top: 80px;">
            <div class="navbar px-2 py-4 mb-2">
                <div class="row mx-auto my-auto">
                    <form action="" class="border rounded-pill p-2 shadow-sm">
                        <input type="text" class="border border-0">
                        <button class="mr-2">
                            <img src="../assets/icon/magnifying-glass.png" width="20">
                        </button>
                    </form>
                    <button class="ml-4" data-toggle="modal" data-target="#staticBackdrop4">
                        <img src="../assets/icon/add.png" width="30">
                    </button>
                </div>
            </div>
            <cashier />
            <cashier />
            <cashier />
            <cashier />
            <cashier />
            <cashier />
            <cashier />
            <cashier />
            <cashier />
            <cashier />
            <cashier />
        </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop4" data-backdrop="static" data-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border border-0">
                        <h4 class="modal-title" id="staticBackdropLabel"><strong>add a new cashier</strong></h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <label for="name">Name :</label>
                                <input type="text" class="form-control" id="name" placeholder="Input is only alphabetic" pattern="[A-Za-z]{}">
                            </div>
                            <div class="form-group">
                                <label for="email">Email :</label>
                                <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password :</label>
                                <input type="password" class="form-control" id="password">
                            </div>
                            <div class="form-group">
                                <label for="password2">Repeat Password :</label>
                                <input type="password" class="form-control" id="password2">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer border border-0">
                        <button type="button" style="background: #F24F8A;" class="btn text-white m-2"
                            data-dismiss="modal">Cancel</button>
                        <button type="submit" style="background: #57CAD5;" @click="onSubmit"
                            class="btn text-white m-2 px-4">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cashier from '../components/cashiercard'
export default {
  components: {
    cashier
  }
}
</script>
