import {
  Injectable,
  signal,
  computed,
  inject,
  DOCUMENT
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export type AppLanguage = 'ar' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly _language = signal<AppLanguage>(
    this.getInitialLanguage()
  );

  readonly language = this._language.asReadonly();

  readonly direction = computed(() =>
    this.language() === 'ar' ? 'rtl' : 'ltr'
  );

  readonly isArabic = computed(() =>
    this.language() === 'ar'
  );

  constructor() {
    this.applyLanguage(this.language());
  }

  setLanguage(language: AppLanguage): void {
    this._language.set(language);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('app-language', language);
    }

    this.applyLanguage(language);
  }

  toggleLanguage(): void {
    this.setLanguage(
      this.language() === 'ar' ? 'en' : 'ar'
    );
  }

  private getInitialLanguage(): AppLanguage {

    if (!isPlatformBrowser(this.platformId)) {
      return 'ar';
    }

    const savedLanguage =
      localStorage.getItem('app-language');

    return savedLanguage === 'en' ? 'en' : 'ar';
  }

  private applyLanguage(language: AppLanguage): void {

    const dir = language === 'ar'
      ? 'rtl'
      : 'ltr';

    this.document.documentElement.lang = language;
    this.document.documentElement.dir = dir;

    this.document.body.dir = dir;
  }
}