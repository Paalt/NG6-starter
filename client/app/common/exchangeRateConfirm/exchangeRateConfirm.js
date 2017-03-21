import angular from 'angular';
import uiRouter from 'angular-ui-router';
import exchangeRateConfirmComponent from './exchangeRateConfirm.component';

let exchangeRateConfirmModule = angular.module('exchangeRateConfirm', [
  uiRouter
])

.component('exchangeRateConfirm', exchangeRateConfirmComponent)

.name;

export default exchangeRateConfirmModule;
