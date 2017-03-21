import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Confirm from './confirm/confirm';


let componentModule = angular.module('app.components', [
  Home,
  About,
  Confirm
])

.name;

export default componentModule;
