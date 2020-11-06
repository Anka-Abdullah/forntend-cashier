<template>
<div class="container-fluid bg-light">
        <Navbar title="History" link="/cashier" icon="lni lni-users"/>
    <div class="container pt-3" style="margin-top: 60px;">
      <IncomeBoard class="mt-3"/>
      <Table class="mt-5"/>
    </div>
</div>
</template>
<script>
import Navbar from '../../components/global/Navbar'
import IncomeBoard from './components/IncomeBoard'
import Table from './components/Table'
export default {
  components: {
    Navbar,
    IncomeBoard,
    Table
  },
  data () {
    return {
    }
  }
}
</script>
