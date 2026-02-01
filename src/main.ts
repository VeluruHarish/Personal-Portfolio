import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';

bootstrapApplication(App,
  {
    providers: [
      provideAnimations(),
      providePrimeNG({
        ripple: true
      }),
      ...appConfig.providers
    ]
  })
  .catch((err) => console.error(err));
