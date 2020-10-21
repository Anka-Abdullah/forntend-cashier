<template>
    <div>
  <div class="navbar border mb-4 px-3 mx-5">
      <img src="../assets/icon/add.user.png" width="40" class="mr-4 rounded-circle">
      <h6 class="my-auto mr-auto">Habib Eminem Al-kariim</h6>
      <div class="ml-auto">
          <span class="badge badge-success mr-4 p-2">Admin</span>
    <button>
        <img src="../assets/icon/delete.png" alt="">
    </button>
    <button data-toggle="modal" data-target="#staticBackdrop5">
        <img src="../assets/icon/edit.png" alt="">
    </button>
</div>
  </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop5" data-backdrop="static" data-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border border-0">
                        <h4 class="modal-title" id="staticBackdropLabel"><strong>Edit cashier data</strong></h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <label for="name">Name :</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email :</label>
                                <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option value="cashier">Cashier</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer border border-0">
                        <button type="button" style="background: #F24F8A;" class="btn text-white m-2"
                            data-dismiss="modal">Cancel</button>
                        <button type="submit" style="background: #57CAD5;"
                            class="btn text-white m-2 px-4">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
