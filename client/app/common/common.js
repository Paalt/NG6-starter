import angular from 'angular';
import angularMaterial from 'angular-material';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import priceCalculator from './priceCalculator/priceCalculator'
import Footer from './footer/footer'
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  priceCalculator,
  Footer,
  User
])

.name;

export default commonModule;
