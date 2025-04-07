import { environment } from './environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


const baseElement = document.querySelector('base');
if (baseElement) {
  baseElement.setAttribute('href', environment.baseHref);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
