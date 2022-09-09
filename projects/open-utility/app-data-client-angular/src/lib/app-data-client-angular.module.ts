import { InjectionToken, Injector, NgModule } from '@angular/core';
import adc_client from '@openutility/app-data-client';
import { APPDATACLIENT_CONFIG_TOKEN } from './app-data-client-angular-config';

export const SWITCH_FETCH = new InjectionToken<any>('config');

let switchServiceFactory = (injector: Injector) => {
  let config = injector.get(APPDATACLIENT_CONFIG_TOKEN); //retrieved token from injector
  return new adc_client.AppDataClientSwitch(config);
};

let appSwitchFactory = (srv: any) => {
  return (key: string, refresh: boolean = false) => srv.get(key, refresh);
};

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class AppDataClientAngularModule {
  static forRoot() {
    return {
      ngModule: AppDataClientAngularModule,
      providers: [{
        provide: adc_client.AppDataClientSwitch,
        useFactory: switchServiceFactory,
        deps: [Injector],
      },{
        provide: SWITCH_FETCH,
        useFactory: appSwitchFactory,
        deps: [adc_client.AppDataClientSwitch],
      }]
    };
 }
}

