<template>
  <canvas id="{{graphId}}" height="{{height}} " width="{{width}}" class="{{graphId}}"></canvas>
</template>
<script>
  import utils from '../shared/utils.vue';
  import Chart from 'chart.js';
  import { setMetricName } from '../../state/mutations';

  export default {
    name: 'Chart-JS',
    vuex: {
      actions: {
        setMetricName
      }
    },
    mixins: [utils],
    props: ['id', 'height','datasets','width',"graph-id"],
    data: function(){
      return {
        opts: {
          responsive:false,
          maintainAspectRatio: false,
          showTooltips: false,
          animation:false,
          scaleShowGridLines : true,
          scaleShowHorizontalLines: true,
          scaleShowVerticalLines: true,
          datasetStroke : false,
          datasetFill : false,
          datasetStrokeWidth : 1,
          showScale: true,     
          scales: {
            xAxes: [{
              type: 'time',
              position: 'bottom',
              time: {
                unit: 'day',
                unitStepSize: 7
                }
              }],
            },
          animation: {
            duration: 2000
            },
          legend: {
            position: 'bottom',
          }
        },
      };

    },
    watch : {

    },
    created: function() {
      this.setMetricName(this.$options.name);
    },
    ready: function() {
      setTimeout(this.updateData, this.$parent.$data.tempTimeout);
    },
    methods: {
      updateData: function() {
        
        var datasets = [];
        var color = this.getRandomColor;
        this.datasets.data.forEach(function(dataset) {
          var data = [];
          dataset['x'].forEach(function(x, i) {
          data.push({
            'x': x, 
            'y': dataset['y'][i]
             });
          });
          var newColor = color();
          var newDataset = {
            'backgroundColor': newColor,
            'borderColor': newColor,
            'fill': false,
            'radius': 1,
            'showLines':true,
            'label': dataset.name,
            'data': data
          }
          datasets.push(newDataset);
        });
        new Chart(document.getElementById(this.graphId).getContext("2d"),
          { 'type': 'line', 'data': { 'datasets': datasets }, 'options': this.opts });
      }
    }
  }
</script>
<style scoped>
  .chartjs {
    background: #fff;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 70px;
  }
</style>