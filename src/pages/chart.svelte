<script>
  import PolarAreaChart from "../Components/PolarAreaChart.svelte";
  import Table from "../Components/Table.svelte";
</script>


<div class="page-wrapper">
  <div class="main-wrapper">
     <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 overflow-hidden justify-center">
       <div class="md:w-1/2 align-middle justify-center"> <Table/></div>
       <div class="md:w-1/2"> <PolarAreaChart/></div>
     </div>
   </div> 
</div>






<style>
.page-wrapper{
  padding: 95px 100px;
}
</style>



