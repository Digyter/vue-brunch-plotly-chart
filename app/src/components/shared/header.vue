<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">
          {{ company_name }}
        </span>
      </div>
    </header>
  </div>
</template>
<script>
  import { getCompanyName as company_name } from '../../state/mutations';
  export default {
    vuex: {
      getters: {
        company_name
      }
    }
  }
</script>
<style scoped>
  .mdl-layout__header {
    background: #4285f4 !important;
    background-color: #4285f4 !important;
  }
  .mdl-layout-title {
    color: #FFFFFF;
    background-color: none;
    font-weight:normal;
    text-decoration: none;
    font-family: Roboto-Medium;
    font-size: 45px;
  }
</style>