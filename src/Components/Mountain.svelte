<div class="mountain-container">
    <div class="circle"></div>
    <div class="mountain"></div>
</div>

<style>   
.mountain-container {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #293462;
  }
  
  .circle {
    position: absolute;
    top: 50px; /* Adjust accordingly */
    left: 50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: transparent;
  }
  
  .mountain {
    position: absolute;
    /* You will need to adjust the sizes and positions */
    /* Create a triangular shape for the mountain using borders */
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #fe5f55;
  }
  </style>