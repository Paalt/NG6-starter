import angular from 'angular';
import uiRouter from 'angular-ui-router';
import confirmComponent from './confirm.component';

let confirmModule = angular.module('confirm', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('confirm', {
      url: '/confirm',
      component: 'confirm'
    });
})


.component('confirm', confirmComponent)

.name;

export default confirmModule;
