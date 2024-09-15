<template>
  <canvas ref="chartCanvas" class="w-full h-full"></canvas>
</template>

<script setup>
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { evaluate } from 'mathjs';
import { onMounted, ref, watch } from 'vue';

Chart.register(...registerables, annotationPlugin);

const props = defineProps({
  equation: String,
  showGrid: Boolean,
  showXAxis: Boolean,
});

const chartCanvas = ref(null);
let chartInstance = null;

const generateData = (func, range) => {
  const data = [];
  for (let x = range[0]; x <= range[1]; x += 0.1) {
    try {
      const y = func(x);
      if (isFinite(y)) {
        data.push({ x, y });
      } else {
        data.push({ x, y: null });
      }
    } catch (error) {
      data.push({ x, y: null });
    }
  }
  return data;
};

const plotGraph = () => {
  try {
    const func = (x) => evaluate(props.equation, { x });
    const data = generateData(func, [-10, 10]);

    const chartData = {
      datasets: [
        {
          label: 'Graph',
          data: data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          showLine: true,
          spanGaps: true,
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          grid: {
            display: props.showGrid,
            color: 'rgba(200, 200, 200, 0.5)',
          },
          ticks: {
            display: props.showXAxis,
          },
        },
        y: {
          grid: {
            display: props.showGrid,
            color: 'rgba(200, 200, 200, 0.5)',
          },
        },
      },
      plugins: {
        annotation: {
          annotations: {
            line1: {
              type: 'line',
              yMin: 0,
              yMax: 0,
              borderColor: 'rgba(0, 0, 0, 0.5)',
              borderWidth: 1,
            },
          },
        },
      },
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(chartCanvas.value, {
      type: 'scatter',
      data: chartData,
      options: chartOptions,
    });
  } catch (error) {
    console.error("Invalid equation:", error);
  }
};

onMounted(() => {
  plotGraph();
});

watch([() => props.equation, () => props.showGrid, () => props.showXAxis], () => {
  plotGraph();
});
</script>

<style scoped>
/* Add any necessary styles here */
</style>