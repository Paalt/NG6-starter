import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderConfirmComponent from './orderConfirm.component';

let orderConfirmModule = angular.module('orderConfirm', [
  uiRouter
])

.component('orderConfirm', orderConfirmComponent)

.name;

export default orderConfirmModule;
