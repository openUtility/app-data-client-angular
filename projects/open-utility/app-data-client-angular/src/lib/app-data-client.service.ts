import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Config, default as AppDataClientSwitch} from '@openutility/app-data-client';
import { Observable, isObservable, Subscription } from 'rxjs';
import { APPDATACLIENT_CONFIG_TOKEN } from './app-data-client-angular-config';

@Injectable({
  providedIn: 'root'
})
export class AppDataClientService implements OnDestroy {

  private _conf!: Config;
  private _service!: AppDataClientSwitch;
  private _unSubscribe?: Subscription;

  constructor(@Inject(APPDATACLIENT_CONFIG_TOKEN) config: Config | Observable<Config>) {
    if (isObservable(config)) {
      this._unSubscribe = config.subscribe((cnf) => this._conf = cnf);
    } else {
      this._conf = config;
    }
    this._service = new AppDataClientSwitch(() => this._conf);
  }
  ngOnDestroy(): void {
    this._unSubscribe?.unsubscribe();
  }

  get(keyName: string, refresh: boolean = false): Promise<boolean> {
    return this._service.get(keyName, refresh);
  }

}
