import angular from 'angular';
import uiRouter from 'angular-ui-router';
import priceCalculatorComponent from './priceCalculator.component';

let priceCalculatorModule = angular.module('priceCalculator', [
  uiRouter
])

.component('priceCalculator', priceCalculatorComponent)

.name;

export default priceCalculatorModule;
