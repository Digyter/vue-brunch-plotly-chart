import MetricsChart from '../components/metrics-chart/metrics-chart.vue';
import MetricsPlotly from '../components/metrics-plotly/metrics-plotly.vue';
import Main from '../components/shared/main.vue';

export default {
  '*': {
    name: 'main',
    component: Main
  },
  '/chart': {
    name: 'metricschart',
    component: MetricsChart
  },
  '/plotly': {
    name: 'metricsplotly',
    component: MetricsPlotly
  }
}