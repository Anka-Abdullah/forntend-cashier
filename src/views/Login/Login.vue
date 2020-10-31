<template>
    <div class="container-fluid p-0 bg-dark" style="position: fixed;">
      <div class="container-fluid" id="main">
            <h1 id="title" class="mt-5"><i class="lni lni-coffee-cup"></i> CoffeeShop</h1>
        <div class="card ml-auto mt-auto" style="width: 18rem;">
  <div class="card-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <label for="email"><h5 class="m-0"><strong>Email :</strong></h5></label>
                                <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <label for="password"><h5 class="m-0"><strong>Password :</strong></h5></label>
                                <input type="password" class="form-control" id="password">
                            </div>
                        </form>
  </div>
</div>
      </div>
    </div>
</template>
<script>
export default {
  components: {
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');
#main{
  position: fixed;
  background-image: url('../../assets/pexelsa.jpg');
  opacity: 0.8;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  height: 100vh;
}
#title, i{
  color: #57CAD5;
  font-size: 50px;
  margin: 50px;
}
.card{
  background-color: rgb(255, 255, 255, 0.6);
  letter-spacing: 2px;
  font-family: 'Didact Gothic', sans-serif;
}
</style>
