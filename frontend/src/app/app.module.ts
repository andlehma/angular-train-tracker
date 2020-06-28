import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StopSelectorComponent } from './stop-selector/stop-selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorIndicatorComponent } from './color-indicator/color-indicator.component';
import { EtaCardComponent } from './eta-card/eta-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StopSelectorComponent,
    ColorIndicatorComponent,
    EtaCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
