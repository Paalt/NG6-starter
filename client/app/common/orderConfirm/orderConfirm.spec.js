import OrderConfirmModule from './orderConfirm'
import OrderConfirmController from './orderConfirm.controller';
import OrderConfirmComponent from './orderConfirm.component';
import OrderConfirmTemplate from './orderConfirm.html';

describe('OrderConfirm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OrderConfirmModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OrderConfirmController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(OrderConfirmTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = OrderConfirmComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(OrderConfirmTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(OrderConfirmController);
      });
  });
});
