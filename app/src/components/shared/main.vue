<template>
	<Headerbar></Headerbar>
  <div class="desc">
  	Visualization chart using 
  	<a v-link="{ name: 'metricsplotly' }">PlotlyJS</a> and 
  	<a v-link="{ name: 'metricschart' }">ChartJS</a> built with VueJS and Brunch.
  </div>
</template>
<script>
  import Headerbar from '../shared/header.vue';

  export default {
    name: 'Main',
    components: { Headerbar }
	}
</script>
<style scoped>
	.desc {
    color: #5e5e5e;
    font-size: 23px;
    padding: 5px 20px;
    background-color: transparent;
    line-height: 40px;
    font-weight: 300;
    text-decoration: none;
    word-wrap: break-word;
    -webkit-transition: color .2s linear;
    transition: color .2s linear;
    -webkit-transition: background-color .2s linear;
    transition: background-color .2s linear;
  }
</style>