<template>
  <div id="{{graphId}}" class="chart_area"></div>
</template>
<script>
  import { setMetricName } from '../../state/mutations';

  export default {
    name: 'Plotly-JS',
    vuex: {
      actions: {
        setMetricName
      }
    },
    props: ['id','datasets','graph-id'],
    data: function(){
      return {
        layout: {
          showlegend: true,
          margin: {
            l: 50,
            r: 50,
            b: 50,
            t: 50,
            pad: 5
          }
        },
        options: {
          scrollZoom: true
        }
      };
    },
    created: function() {
      this.setMetricName(this.$options.name);
    },
    ready: function() {
      setTimeout(this.updateData, this.$parent.$data.tempTimeout);
    },
    methods: {
      updateData: function() {
        Plotly.newPlot(this.graphId, this.datasets.data, this.layout, this.options);
      }
    }
  }
</script>
<style scoped>
</style>