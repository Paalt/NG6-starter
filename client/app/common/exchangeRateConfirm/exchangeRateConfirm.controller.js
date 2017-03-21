class ExchangeRateConfirmController {
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

    this.exchangeRateConfirmationVisible = false;

  }

  $onChanges(changes) {
      if (changes.currencyChanged.currentValue != changes.currencyChanged.previousValue) {
        this.exchangeRateConfirmationVisible = !this.exchangeRateConfirmationVisible;
        this.activeCryptoCurrency = this.CurrenciesModel.getActiveCryptoCurrency();
        this.getActiveExchangeRate();
      }
    };

  getActiveExchangeRate() {
    this.exchangeRate = this.CurrenciesModel.cryptoExchange(1);
  }

  showExchangeRateConfirmation() {
    this.exchangeRateConfirmationVisible = !this.exchangeRateConfirmationVisible;
  }

}

export default ExchangeRateConfirmController;
