import angular from 'angular';
import angularMaterial from 'angular-material';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import priceCalculator from './priceCalculator/priceCalculator'
import Footer from './footer/footer'
import User from './user/user';
import CurrenciesModel from './models/currencies';
import exchangeRateConfirm from './exchangeRateConfirm/exchangeRateConfirm';
import orderConfirm from './orderConfirm/orderConfirm';
import buyProcessStep from './buyProcessStep/buyProcessStep'

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  priceCalculator,
  Footer,
  User,
  CurrenciesModel,
  exchangeRateConfirm,
  orderConfirm,
  buyProcessStep
])

.name;

export default commonModule;
