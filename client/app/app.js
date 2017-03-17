import angular from 'angular';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material'
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    angularAria,
    angularAnimate,
    angularMaterial,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  //Material design theme colors
  .config(($mdThemingProvider) => {
    "ngInject";

    $mdThemingProvider.definePalette('BitGatepalette', {
      '50': 'e1e4e8',
      '100': 'b3bbc6',
      '200': '808ea0',
      '300': '4d6079',
      '400': '273e5d',
      '500': '011c40',
      '600': '01193a',
      '700': '011432',
      '800': '01112a',
      '900': '00091c',
      'A100': '5a79ff',
      'A200': '2750ff',
      'A400': '002ef3',
      'A700': '0029da',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': [
        '50',
        '100',
        '200'
      ],
      'contrastLightColors': [
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        'A100',
        'A200',
        'A400',
        'A700'
      ]
    })

    $mdThemingProvider.theme('default')
      .primaryPalette('BitGatepalette')
    })

  .component('app', AppComponent);
