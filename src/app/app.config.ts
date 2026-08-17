import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { AppTheme } from './core/theme/app-theme';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay, withNoIncrementalHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideRouter(routes), provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
    providePrimeNG({
      license: 'eyJpZCI6IjVkYzdiNzkzLWQzNGUtNDk0Ny1iZDI0LTA4MDEyZGE0MmU0YiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODYwMDM2ODcsImV4cCI6MTgxNzUzOTY4N30.-xdPMHjAizYVe5zpbmyJaIhMZ5l40jFXr_fJyuSMaD-0ZczciWKnfhLLMd1faFb5oPNkK1zfsT8zQO-qV9s3Cg',
      theme: {
        preset: AppTheme,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
          cssLayer: false
        }
      }
    })
  ]

};
