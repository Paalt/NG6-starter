class PriceCalculatorController {
  constructor() {
    /* Currency Defaults */
    this.fromFiatCurrency = 5000;
    this.toCryptoCurrency = 0.49;

    this.fiatCurrencies = [
      { id: 1, name: "Kroner", abbrev: "NOK", img: "app/common/priceCalculator/assets/FAB-NOK.png", valueVsBTC: 10083.7428, valueVsETH: 392.44359, valueVsLTC: 35.96266},
      { id: 2, name: "Euro", abbrev: "EUR", img: "app/common/priceCalculator/assets/FAB-EUR.png", valueVsBTC: 1440.25, valueVsETH: 42.86, valueVsLTC: 3.93 },
      { id: 3, name: "Dollar", abbrev: "USD", img: "app/common/priceCalculator/assets/FAB-USD.png", valueVsBTC: 1186.07, valueVsETH: 46.16, valueVsLTC: 4.23},
    ];

    this.cryptoCurrencies = [
      { id: 1, name: "Bitcoin", abbrev: "BTC", img: "app/common/priceCalculator/assets/FAB-BTC.png", valueVsNOK: 0.000099169526617, valueVsEUR: 0.00069432, valueVsUSD: 0.00064464},
      { id: 2, name: "Ethereum", abbrev: "ETH", img: "app/common/priceCalculator/assets/FAB-ETH.png", valueVsNOK: 0.002548136918226, valueVsEUR: 0.02333396, valueVsUSD: 0.02166429},
      { id: 3, name: "Litecoin", abbrev: "LTC", img: "app/common/priceCalculator/assets/FAB-LTC.png", valueVsNOK: 0.027806619421366, valueVsEUR: 0.25472577, valueVsUSD: 0.23649887 },
    ];

    this.fiatCurrency = this.fiatCurrencies[0].abbrev;
    this.cryptoCurrency = this.cryptoCurrencies[0].abbrev;

    /* FAB Defaults */
    this.fiatIsOpen = false;
    this.cryptoIsOpen = false;

    this.hover = false;

    this.activeFiatCurrency = this.fiatCurrencies[0];
    this.activeCryptoCurrency = this.cryptoCurrencies[0];
  }

  setNewFiatCurrency($event, fiatCurrency) {
    console.log(fiatCurrency.name);
    this.activeFiatCurrency = fiatCurrency;
  }

  setNewCryptoCurrency($event, cryptoCurrency) {
    console.log(cryptoCurrency.name);
    this.activeCryptoCurrency = cryptoCurrency;
  }

  fiatExchange(){
    if (this.activeFiatCurrency.id === 1) {
      this.toCryptoCurrency = this.fromFiatCurrency * this.activeCryptoCurrency.valueVsNOK;
    } else if (this.activeFiatCurrency.id === 2) {
      this.toCryptoCurrency = this.fromFiatCurrency * this.activeCryptoCurrency.valueVsEUR;
    } else if (this.activeFiatCurrency.id === 3) {
      this.toCryptoCurrency = this.fromFiatCurrency * this.activeCryptoCurrency.valueVsUSD;
    }
  }

  cryptoExchange() {
    if (this.activeCryptoCurrency.id === 1) {
      this.fromFiatCurrency = this.toCryptoCurrency * this.activeFiatCurrency.valueVsBTC;
    } else if (this.activeCryptoCurrency.id === 2) {
      this.fromFiatCurrency = this.toCryptoCurrency * this.activeFiatCurrency.valueVsETH;
    } else if (this.activeCryptoCurrency.id === 3) {
      this.fromFiatCurrency = this.toCryptoCurrency * this.activeFiatCurrency.valueVsLTC;
    }

  }
}

export default PriceCalculatorController;
