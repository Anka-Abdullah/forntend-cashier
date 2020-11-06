<template>
    <div class="bg-light">
        <Navbar title="Cashier" link="/history" icon="lni lni-bar-chart"/>
        <div class="container pt-3" style="margin-top: 60px;">
            <div class="navbar px-2 py-4 mb-2">
                <div class="row mx-auto my-auto">
                    <form action="" class="border rounded-pill p-2 shadow-sm">
                        <input type="text" class="border border-0" style="background: none;">
                        <button class="mr-2">
                            <i class="lni lni-search-alt"></i>
                        </button>
                    </form>
                    <button class="ml-3" data-toggle="modal" data-target="#staticBackdrop4">
                        <i class="lni lni-circle-plus" style="color: rgb(108, 179, 2); font-size: 35px;"></i>
                    </button>
                </div>
            </div>
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
            <CashierCard />
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
                        <button type="submit" style="background: #57CAD5;"
                            class="btn text-white m-2 px-4">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '../../components/global/Navbar'
import CashierCard from './components/CashierCard'
export default {
  components: {
    Navbar,
    CashierCard
  }
}
</script>
