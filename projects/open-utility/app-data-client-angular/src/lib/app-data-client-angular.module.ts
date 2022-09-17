import { Injector, NgModule } from '@angular/core';
import { AppDataClientService } from './app-data-client.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class AppDataClientAngularModule {
  static forRoot() {
    return {
      ngModule: AppDataClientAngularModule,
      providers: [AppDataClientService]
    };
 }
}

