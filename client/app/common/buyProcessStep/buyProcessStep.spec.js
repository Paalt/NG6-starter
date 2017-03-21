import BuyProcessStepModule from './buyProcessStep'
import BuyProcessStepController from './buyProcessStep.controller';
import BuyProcessStepComponent from './buyProcessStep.component';
import BuyProcessStepTemplate from './buyProcessStep.html';

describe('BuyProcessStep', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BuyProcessStepModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BuyProcessStepController();
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
      expect(BuyProcessStepTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BuyProcessStepComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BuyProcessStepTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BuyProcessStepController);
      });
  });
});
