 <template>
     <div class="history">
         <nav class="navbar bg-light p-0 px-3 shadow" id="navhome">
             <button style="margin-left: 10px">
                 <router-link to="/">
                     <img src="../assets/icon//menu.png" width="25">
                 </router-link>
             </button>
             <span class="navbar-brand mb-0 h1">History</span>
             <button class="mr-2">
                 <router-link to="/cashier">
                     <img src="../assets/icon/add.user.png" width="30">
                 </router-link>
             </button>
         </nav>
         <div class="container-fluid p-5">
             <div class="row row-cols-1 row-cols-md-3">
                 <div class="col mb-4">
                     <div class="card py-4" id="board1">
                         <div class="card-body">
                             <h6>Today's Income</h6>
                             <h4>Rp100.000.000,-</h4>
                             <h6>+2% yesterday</h6>
                         </div>
                     </div>
                 </div>
                 <div class="col mb-4">
                     <div class="card py-4" id="board2">
                         <div class="card-body">
                             <h6>Orders</h6>
                             <h4>Rp100.000.000,-</h4>
                             <h6>+2% Last Week</h6>
                         </div>
                     </div>
                 </div>
                 <div class="col mb-4">
                     <div class="card py-4" id="board3">
                         <div class="card-body">
                             <h6>This Year's Income</h6>
                             <h4>Rp100.000.000,-</h4>
                             <h6>+2% Last Years</h6>
                         </div>
                     </div>
                 </div>
             </div>
             <table class="table">
  <thead>
    <tr>
      <th scope="col">INVOICES</th>
      <th scope="col">CASHIER</th>
      <th scope="col">DATE</th>
      <th scope="col">ORDERS</th>
      <th scope="col">AMOUNT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>hjk</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
         </div>
     </div>
 </template>
<style scoped>
#board1 {
border: none;
background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
}
#board2 {
border: none;
background: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
}
#board3 {
border: none;
background: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
}
</style>
