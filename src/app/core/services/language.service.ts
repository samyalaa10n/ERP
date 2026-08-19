import {
  Injectable,
  signal,
  computed,
  inject,
  DOCUMENT,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

import {
  HttpClient
} from '@angular/common/http';

import {
  APP_LANGUAGES,
  AppLanguageCode,
  AppLanguage
} from '../localization/app-languages';


export type TranslationData = {
  [key: string]: any;
};


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly document =
    inject(DOCUMENT);

  private readonly platformId =
    inject(PLATFORM_ID);

  private readonly http =
    inject(HttpClient);


  // =====================================================
  // Current Language
  // =====================================================

  private readonly _language =
    signal<AppLanguageCode>(
      this.getInitialLanguage()
    );

  readonly language =
    this._language.asReadonly();


  // =====================================================
  // Available Languages
  // =====================================================

  readonly languages: readonly AppLanguage[] =
    APP_LANGUAGES;


  // =====================================================
  // Current Language
  // =====================================================

  readonly currentLanguage =
    computed<AppLanguage>(() => {

      const current =
        APP_LANGUAGES.find(
          (item: AppLanguage) =>
            item.code === this.language()
        );

      return current ?? APP_LANGUAGES[0];

    });


  // =====================================================
  // Direction
  // =====================================================

  readonly direction =
    computed<'ltr' | 'rtl'>(() => {

      return this.currentLanguage().direction;

    });


  readonly isRTL =
    computed<boolean>(() => {

      return this.direction() === 'rtl';

    });


  readonly isLTR =
    computed<boolean>(() => {

      return this.direction() === 'ltr';

    });


  // =====================================================
  // Translation
  // =====================================================

  private readonly _translations =
    signal<TranslationData>({});


  readonly translations =
    this._translations.asReadonly();


  // =====================================================
  // Constructor
  // =====================================================

  constructor() {

    const language =
      this.language();

    this.applyLanguage(language);

    this.loadLanguage(language);

  }


  // =====================================================
  // Set Language
  // =====================================================

  async setLanguage(
    language: AppLanguageCode
  ): Promise<void> {

    if (this.language() === language) {
      return;
    }


    this._language.set(language);


    if (
      isPlatformBrowser(this.platformId)
    ) {

      localStorage.setItem(
        'app-language',
        language
      );

    }


    this.applyLanguage(language);

    await this.loadLanguage(language);

  }


  // =====================================================
  // Is Language
  // =====================================================

  isLanguage(
    language: AppLanguageCode
  ): boolean {

    return this.language() === language;

  }


  // =====================================================
  // Toggle Language
  // =====================================================

  async toggleLanguage(): Promise<void> {

    const currentIndex =
      APP_LANGUAGES.findIndex(
        (item: AppLanguage) =>
          item.code === this.language()
      );


    const nextIndex =
      currentIndex >= 0
        ? (currentIndex + 1) % APP_LANGUAGES.length
        : 0;


    await this.setLanguage(
      APP_LANGUAGES[nextIndex].code
    );

  }


  // =====================================================
  // Load Language
  // =====================================================

  private loadLanguage(
    language: AppLanguageCode
  ): Promise<void> {

    return new Promise<void>((resolve) => {

      this.http
        .get<TranslationData>(
          `assets/i18n/${language}.json`
        )
        .subscribe({

          next: (
            translations: TranslationData
          ) => {

            this._translations.set(
              translations
            );

            resolve();

          },

          error: (
            error: unknown
          ) => {

            console.error(
              `Failed to load language: ${language}`,
              error
            );

            this._translations.set({});

            resolve();

          }

        });

    });

  }


  // =====================================================
  // Translate
  // =====================================================

  translate(key: string): string {

  const translations = this._translations();

  if (!translations || !key) {
    return key;
  }

  let value: any = translations;

  for (const part of key.split('.')) {

    if (
      value === null ||
      value === undefined
    ) {
      return "set Translate";
    }

    value = value[part];
  }

  return typeof value === 'string'
    ? value
    : "Contenu Translate";
}


  // =====================================================
  // Initial Language
  // =====================================================

  private getInitialLanguage():
    AppLanguageCode {

    if (
      !isPlatformBrowser(this.platformId)
    ) {

      return 'ar';

    }


    const savedLanguage =
      localStorage.getItem(
        'app-language'
      );


    const exists =
      APP_LANGUAGES.some(
        (item: AppLanguage) =>
          item.code === savedLanguage
      );


    if (exists) {

      return savedLanguage as AppLanguageCode;

    }


    return 'ar';

  }


  // =====================================================
  // Apply Language
  // =====================================================

  private applyLanguage(
    language: AppLanguageCode
  ): void {

    const languageInfo =
      APP_LANGUAGES.find(
        (item: AppLanguage) =>
          item.code === language
      );


    if (!languageInfo) {
      return;
    }


    this.document.documentElement.lang =
      languageInfo.code;


    this.document.documentElement.dir =
      languageInfo.direction;


    this.document.body.dir =
      languageInfo.direction;

  }

}