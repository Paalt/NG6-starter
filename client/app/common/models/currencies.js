import angular from 'angular';
import CurrenciesModel from './currencies.model';

let currenciesModule = angular.module('currencies', [])

.service('CurrenciesModel', CurrenciesModel)

.name;

export default currenciesModule;
