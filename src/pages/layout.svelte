<script>
  import Mountain from "../Components/Mountain.svelte";

</script>
<div class="overflow-hidden">
    <div class="h-full mx-auto grid  grid-cols-12  md:grid-flow-row-dense justify-center align-middle">
      <div class="bg-blue-400 shadow-xl col-span-12 h-[calc(100vw*1.5)] md:h-[calc(100vw/12*3)] md:row-span-3 md:col-span-2 ">3x2 (color: blue-400)</div>
      <div class="bg-rose-100 shadow-xl col-span-12 h-[calc(100vw*1.5)] md:h-[calc(100vw/12*5)] md:row-span-5 md:col-span-4 ">2x2 (color: teal-400)</div>
      <div class="bg-blue-400 shadow-xl col-span-12 h-[calc(100vw*1.5)] md:h-[calc(100vw/12*2)] md:row-span-2 md:col-span-6 "></div>
      <div class="bg-yellow-100 shadow-xl col-span-12 h-[calc(100vw*1.5)] md:h-[calc(100vw/12*4)] md:row-span-4 md:col-span-4 "><div class="flex justify-center align-middle "><Mountain/></div></div>
      <div class="bg-emerald-400 shadow-xl col-span-12 h-[calc(100vw*1.5)] md:h-[calc(100vw/12*4)] md:row-span-4 md:col-span-2 "></div>
      <div class="bg-teal-400 shadow-xl col-span-12 h-[calc(100vw*1.5)] md:h-[calc(100vw/12*2)] md:row-span-2 md:col-span-2  "></div>
      <div class="bg-pink-300 shadow-xl col-span-12 h-[calc(100vw*1.5)] md:h-[calc(100vw/12*1)] md:row-span-1 md:col-span-6 "></div>
    </div>
</div>