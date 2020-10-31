<template>
<div class="container-fluid bg-light">
        <navbar :link="'/'" :icon="'lni lni-menu'" :title="'History'" :linkB="'/cashier'" :iconB="'lni lni-users'"/>
    <div class="container pt-3" style="margin-top: 60px;">
      <board class="mt-3"/>
      <dataTable class="mt-5"/>
    </div>
</div>
</template>
<script>
import navbar from '../../components/global/navbar'
import board from './components/incomeBoard'
import dataTable from './components/table'
export default {
  components: {
    navbar,
    board,
    dataTable
  },
  data () {
    return {
    }
  }
}
</script>
