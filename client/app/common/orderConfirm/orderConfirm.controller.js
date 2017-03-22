class OrderConfirmController {
  constructor(CurrenciesModel, $interval) {
    'ngInject';
    /* Currency Defaults */
    this.CurrenciesModel = CurrenciesModel;

    /* Price reset timer - Linear progression bar */
    let self = this;
    self.activated = true;
    self.determinateValue = 1;
    self.totalSeconds = 120;
    self.totalMinutes = 120;
    self.min = 1;
    self.count = 0;

    $interval(function() {
      self.count += 1;
      self.totalSeconds -= 2;
      self.totalMinutes -= 2;
      self.sec = self.totalSeconds / 2;

      if (self.totalSeconds === 0) {
        self.totalSeconds = 120;
      }

      if (self.totalMinutes === -2) {
        self.min -= 1;
      }

      self.determinateValue += 0.82644628099;

      if (self.determinateValue > 100) {
        self.determinateValue = 0;
        self.totalSeconds = 120;
        self.totalMinutes = 120;
        self.min = 1;
      }

    }, 1000);

  }

  $onInit() {
    this.CurrenciesModel.getCryptoCurrencies()
      .then(cryptoCurrencies => this.cryptoCurrencies = cryptoCurrencies);

    this.CurrenciesModel.getFiatCurrencies()
      .then(fiatCurrencies => this.fiatCurrencies = fiatCurrencies);

    this.activeFiatCurrency = this.CurrenciesModel.getActiveFiatCurrency();
    this.activeCryptoCurrency = this.CurrenciesModel.getActiveCryptoCurrency();

    this.fiatCurrencyValue = this.CurrenciesModel.getFiatCurrencyValue();
    this.cryptoCurrencyValue = this.CurrenciesModel.getCryptoCurrencyValue();

    this.exchangeRate = this.CurrenciesModel.cryptoExchange(1);

    this.termsAccepted = false;
  }

}

export default OrderConfirmController;
