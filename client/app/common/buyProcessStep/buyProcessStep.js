import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buyProcessStepComponent from './buyProcessStep.component';

let buyProcessStepModule = angular.module('buyProcessStep', [
  uiRouter
])

.component('buyProcessStep', buyProcessStepComponent)

.name;

export default buyProcessStepModule;
