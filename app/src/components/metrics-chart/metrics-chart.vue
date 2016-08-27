<template>
  <Headerbar></Headerbar>
  <div class="page-content">
    <div class="status">
      <div class="header_report_title">
        <div class="float_left">{{ metric_name }}</div>
      </div>
    </div>
    <div class="metrics">
      <report-scatter-chart graph-id="chartjs" height="300" width="1200" :datasets="datasets"></report-scatter-chart>
    </div>
  </div>
</template>
<script>
  import Headerbar from '../shared/header.vue';
  import ReportScatterChart from './report-scatter-chartjs.vue';
  import { getMetricName as metric_name } from '../../state/mutations';

  export default {
    name: 'Metrics-Chart',
    vuex: {
      getters: {
        metric_name
      }
    },
    components: { Headerbar, ReportScatterChart },
    data: function(){
      return {
        datasets: {},
        tempTimeout:0
      };
    },
    created: function(){
      this.updateData();
    },
    methods: {
      updateData: function(){ 
        this.$http.get('/data/sample.json').then( 
          function(response) {
            this.datasets = response.data;
          }
        );
      }
    }
  }
</script>
<style scoped>
  .mdl-grid {
    width: 100%;
  }
  .page-content {
    padding: 15px;
    padding-left: 60px;
    padding-right: 60px;
    background: #f5f5f5;
  }
  .header_report_title {
    color: #5e5e5e;
    font-size: 23px;
    padding: 5px 20px;
    background-color: transparent;
    line-height: 40px;
    text-transform: uppercase;
    font-weight: 300;
    text-decoration: none;
    word-wrap: break-word;
    -webkit-transition: color .2s linear;
    transition: color .2s linear;
    -webkit-transition: background-color .2s linear;
    transition: background-color .2s linear;
  }
  .float_left {
    float:left;
  }
  .float_right {
    float:right;
  }
  .filterDate {
    border: none;
    font-size: 22.6px;
    background: 16px;
    text-align: right;
    color: inherit;
    text-transform: uppercase;
  }
  .mdl-select__input {
    border: none;
    display: inline-block;
    font-size: 22.6px;
    width: auto;
    background: 16px;
    text-align: left;
    color: inherit;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 300;
    text-decoration: none;
    word-wrap: break-word;
  }
  .md-headline {
    font-family:Roboto-Regular;
    font-size:16px;
    color:rgba(0,0,0,0.54);
    line-height:24px;
  }
  .float_left {
    float:left;
  }
  .metrics {
    margin-top: 50px;
  }
</style>