//Properties
export const METRIC_NAME = 'METRIC_NAME';
export const COMPANY_NAME = 'COMPANY_NAME';

//Setters and Getters
export function getMetricName(state) {
  return state.metric_name;
}
export function setMetricName({dispatch}, metric_name) {
  dispatch(METRIC_NAME, metric_name);
}
export function getCompanyName(state) {
  return state.company_name;
}
export function setCompanyName({dispatch}, company_name) {
  dispatch(COMPANY_NAME, company_name);
}

//Mutations
export default {
  [METRIC_NAME] (state, metric_name) {
    state.metric_name = metric_name;
  },
  [COMPANY_NAME] (state, company_name) {
    state.company_name = company_name;
  }
}