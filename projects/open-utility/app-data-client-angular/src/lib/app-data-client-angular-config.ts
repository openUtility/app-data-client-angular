import { InjectionToken } from "@angular/core";
import { Config } from "@openutility/app-data-client";

export const APPDATACLIENT_CONFIG_TOKEN = new InjectionToken<AppDataClientAngularConfig>('config');

export interface AppDataClientAngularConfig extends Config {

}
