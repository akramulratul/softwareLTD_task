<script>
    import { onMount, onDestroy } from 'svelte';
    import { Chart, registerables } from 'chart.js';
    import { countryDataStore } from '../utilities/countryDataStore.js';

    Chart.register(...registerables);

    let chart;

    onDestroy(() => {
        console.log("Component is being destroyed");
        if (chart) {
            chart.destroy();
        }
    });

    onMount(async () => {
        const data = $countryDataStore; 
        const sortedCountries = data.sort((a, b) => b.population - a.population).slice(0, 10);
        const labels = sortedCountries.map(country => country.name.common);
        const values = sortedCountries.map(country => country.population);
    console.log(data);
        let element = document.getElementById('myChart');
        if (element && element instanceof HTMLCanvasElement) {
            const ctx = element.getContext('2d');
            chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: labels,
                    datasets: [{
                        data: values,
                        // ... other chart configurations
                    }]
                },
                options: {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom', // or 'right', 'bottom', 'left'
            labels: {
                usePointStyle: true, // This makes the box next to the label a circle
                boxWidth: 10 // Adjust as necessary
            }
        },
      
    },
                },
            });
        }
    });
</script>
<div class=""><canvas id="myChart"></canvas></div>

