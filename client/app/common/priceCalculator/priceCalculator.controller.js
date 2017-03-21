class PriceCalculatorController {
  constructor(CurrenciesModel) {
    'ngInject';
    /* Currency Defaults */
    this.CurrenciesModel = CurrenciesModel;

    /* FAB Defaults */
    this.fiatIsOpen = false;
    this.cryptoIsOpen = false;

    this.hover = false;

    //this.switch = false;
    this.currencyChanged = false;


  }

  $onInit() {
    this.CurrenciesModel.getCryptoCurrencies()
      .then(cryptoCurrencies => this.cryptoCurrencies = cryptoCurrencies);

    this.CurrenciesModel.getFiatCurrencies()
      .then(fiatCurrencies => this.fiatCurrencies = fiatCurrencies);

    this.activeFiatCurrency = this.CurrenciesModel.getActiveFiatCurrency();
    this.activeCryptoCurrency = this.CurrenciesModel.getActiveCryptoCurrency();
    this.fromFiatCurrency = 5000;
    this.toCryptoCurrency = 0.49;

  }

  onSwitchCurrencies() {
    this.currencyChanged = !this.currencyChanged;
  }

  onFiatCurrencySelected(fiatCurrency) {
    this.activeFiatCurrency = this.CurrenciesModel.setNewFiatCurrency(fiatCurrency);
    this.onSwitchCurrencies();
  }

  onCryptoCurrencySelected(cryptoCurrency) {
    this.activeCryptoCurrency = this.CurrenciesModel.setNewCryptoCurrency(cryptoCurrency);
    this.onSwitchCurrencies();
  }

  onFiatExchange() {
    this.toCryptoCurrency = this.CurrenciesModel.fiatExchange(this.fromFiatCurrency);
  }

  onCryptoExchange() {
    this.fromFiatCurrency = this.CurrenciesModel.cryptoExchange(this.toCryptoCurrency);
  }


}

export default PriceCalculatorController;
