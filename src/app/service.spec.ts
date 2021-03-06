import * as angular from 'angular';
import { IRootScopeService } from 'angular';
import 'angular-mocks';
import { Service } from './service';
import { MODULE_NAME } from './app.module.name';

describe('Service', () => {
  let service: Service;
  let $rootScope: IRootScopeService;

  beforeEach(angular.mock.module(MODULE_NAME));

  beforeEach(inject((_service_: any, _$rootScope_: any) => {
    service = _service_;
    $rootScope = _$rootScope_;
  }));

  it('should get message', () => {
    service.getMessage().then(result => {
      expect(result).toEqual('Like I promised :)');
    });

    $rootScope.$digest();
  });
});
