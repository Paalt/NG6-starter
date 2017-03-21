import template from './exchangeRateConfirm.html';
import controller from './exchangeRateConfirm.controller';
import './exchangeRateConfirm.scss';

let exchangeRateConfirmComponent = {
  restrict: 'E',
  bindings: {
    currencyChanged: '<'
  },
  template,
  controller
};

export default exchangeRateConfirmComponent;
