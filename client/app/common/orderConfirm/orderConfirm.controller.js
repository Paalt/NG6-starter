class OrderConfirmController {
  constructor(CurrenciesModel) {
    'ngInject';
    /* Currency Defaults */
    this.CurrenciesModel = CurrenciesModel;
  }

  $onInit() {
    this.CurrenciesModel.getCryptoCurrencies()
      .then(cryptoCurrencies => this.cryptoCurrencies = cryptoCurrencies);

    this.CurrenciesModel.getFiatCurrencies()
      .then(fiatCurrencies => this.fiatCurrencies = fiatCurrencies);

    this.activeFiatCurrency = this.CurrenciesModel.getActiveFiatCurrency();
    this.activeCryptoCurrency = this.CurrenciesModel.getActiveCryptoCurrency();
  }

  getActiveExchangeRate() {
    this.exchangeRate = this.CurrenciesModel.cryptoExchange(1);
  }
}

export default OrderConfirmController;
