<template lang="">
    <div>
        <div class="container">
        <div class="row ">
            <div class="col-xl-6 col-lg-6 widthOfcard">
                <div class="card l-bg-cherry">
                    <div class="card-statistic-3 p-2">
                        <!-- <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div> -->
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Budget</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8 mx-auto">
                                <h2 class="d-flex align-items-center mb-0" >
                                    <canvas ref="myChart"></canvas>

                                </h2>
                            </div>
                            <!-- <div class="col-4 text-right">
                            <span>12.5% <i class="fa fa-arrow-up"></i></span>
                        </div> -->
                        </div>
                        <!-- <div class="progress mt-1 " data-height="8" style="height: 8px;">
                            <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 widthOfcard">
                <div class="card l-bg-blue-dark">
                    <div class="card-statistic-3 p-2">
                        <!-- <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div> -->
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Dates</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8 mx-auto">
                                <h2 class="d-flex align-items-center mb-0">
                                    <canvas ref="myChartCanvas"></canvas>

                                </h2>
                            </div>
                            <!-- <div class="col-4 text-right">
                            <span>9.23% <i class="fa fa-arrow-up"></i></span>
                        </div> -->
                        </div>
                        <!-- <div class="progress mt-1 " data-height="8" style="height: 8px;">
                            <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                        </div> -->
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>

    </div>
</template>
<script>
     import Chart from 'chart.js/auto';

export default { 
    name:"dashBoard2",
    mounted() {
      const ctx = this.$refs.myChart; // Reference to the canvas element
  const labels= ['budget','Amount used','Amount remaining']
      
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      
    ],
    borderWidth: 1
  }]
};
  
      const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
  
      const myChart = new Chart(ctx, config);
  
      // Resize the chart when the window is resized
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      
    }
  };
    

</script>
<style scoped>
    
.widthOfcard {
width: 50%;


}

@media screen and (max-width: 1415px) {

.widthOfcard {
    width: 50%;
}
}

@media screen and (max-width: 900px) {

.widthOfcard {
    width: 100%;
}
}

.card {
background-color: #fff;
border-radius: 10px;
border: none;
position: relative;
margin-bottom: 30px;
box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1), 0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1), 0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12), 0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}

.l-bg-cherry {
/* background: linear-gradient(to right, #493240, #f09) !important; */
color: #fff;
}

.l-bg-blue-dark {
background: linear-gradient(to right, #373b44, #4286f4) !important;
color: #fff;
}

.l-bg-green-dark {
background: linear-gradient(to right, #0a504a, #38ef7d) !important;
color: #fff;
}

.l-bg-orange-dark {
background: linear-gradient(to right, #a86008, #ffba56) !important;
color: #fff;
}

.card .card-statistic-3 .card-icon-large .fas,
.card .card-statistic-3 .card-icon-large .far,
.card .card-statistic-3 .card-icon-large .fab,
.card .card-statistic-3 .card-icon-large .fal {
font-size: 110px;
}

.card .card-statistic-3 .card-icon {
text-align: center;
line-height: 50px;
margin-left: 15px;
color: #000;
position: absolute;
right: -5px;
top: 20px;
opacity: 0.1;
}

.l-bg-cyan {
background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
color: #fff;
}

.l-bg-green {
background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
color: #fff;
}

.l-bg-orange {
background: linear-gradient(to right, #f9900e, #ffba56) !important;
color: #fff;
}

.l-bg-cyan {
background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
color: #fff;
}

.inputText {
padding: 0.4rem;
border-radius: 1rem;
text-align: center;
}
</style>