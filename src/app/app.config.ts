import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LandingComponent } from './landing/landing.component';
import * as $ from 'jquery';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
