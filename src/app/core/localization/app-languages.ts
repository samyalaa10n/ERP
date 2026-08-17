export type LanguageDirection = 'ltr' | 'rtl';

export type AppLanguageCode =
  | 'ar'
  | 'en'
  | 'fr'
  | 'de'
  | 'es'
  | 'it'
  | 'pt'
  | 'ru'
  | 'uk'
  | 'pl'
  | 'nl'
  | 'sv'
  | 'no'
  | 'da'
  | 'fi'
  | 'cs'
  | 'sk'
  | 'hu'
  | 'ro'
  | 'bg'
  | 'el'
  | 'tr'
  | 'he'
  | 'fa'
  | 'ur'
  | 'hi'
  | 'bn'
  | 'id'
  | 'ms'
  | 'th'
  | 'vi'
  | 'zh'
  | 'ja'
  | 'ko'
  | 'fil'
  | 'sw'
  | 'am'
  | 'af'
  | 'sr'
  | 'hr'
  | 'sl'
  | 'et'
  | 'lv'
  | 'lt'
  | 'ca'
  | 'eu'
  | 'gl'
  | 'is'
  | 'ga'
  | 'mt';

export interface AppLanguage {
  code: AppLanguageCode;
  name: string;
  nativeName: string;
  direction: LanguageDirection;
  flag: string;
}

export const APP_LANGUAGES: readonly AppLanguage[] = [

  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    flag: '🇪🇬'
  },

  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    flag: '🇺🇸'
  },

  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    flag: '🇫🇷'
  },

  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    flag: '🇩🇪'
  },

  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    flag: '🇪🇸'
  },

  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    direction: 'ltr',
    flag: '🇮🇹'
  },

  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    direction: 'ltr',
    flag: '🇵🇹'
  },

  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    direction: 'ltr',
    flag: '🇷🇺'
  },

  {
    code: 'uk',
    name: 'Ukrainian',
    nativeName: 'Українська',
    direction: 'ltr',
    flag: '🇺🇦'
  },

  {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    direction: 'ltr',
    flag: '🇵🇱'
  },

  {
    code: 'nl',
    name: 'Dutch',
    nativeName: 'Nederlands',
    direction: 'ltr',
    flag: '🇳🇱'
  },

  {
    code: 'sv',
    name: 'Swedish',
    nativeName: 'Svenska',
    direction: 'ltr',
    flag: '🇸🇪'
  },

  {
    code: 'no',
    name: 'Norwegian',
    nativeName: 'Norsk',
    direction: 'ltr',
    flag: '🇳🇴'
  },

  {
    code: 'da',
    name: 'Danish',
    nativeName: 'Dansk',
    direction: 'ltr',
    flag: '🇩🇰'
  },

  {
    code: 'fi',
    name: 'Finnish',
    nativeName: 'Suomi',
    direction: 'ltr',
    flag: '🇫🇮'
  },

  {
    code: 'cs',
    name: 'Czech',
    nativeName: 'Čeština',
    direction: 'ltr',
    flag: '🇨🇿'
  },

  {
    code: 'sk',
    name: 'Slovak',
    nativeName: 'Slovenčina',
    direction: 'ltr',
    flag: '🇸🇰'
  },

  {
    code: 'hu',
    name: 'Hungarian',
    nativeName: 'Magyar',
    direction: 'ltr',
    flag: '🇭🇺'
  },

  {
    code: 'ro',
    name: 'Romanian',
    nativeName: 'Română',
    direction: 'ltr',
    flag: '🇷🇴'
  },

  {
    code: 'bg',
    name: 'Bulgarian',
    nativeName: 'Български',
    direction: 'ltr',
    flag: '🇧🇬'
  },

  {
    code: 'el',
    name: 'Greek',
    nativeName: 'Ελληνικά',
    direction: 'ltr',
    flag: '🇬🇷'
  },

  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    direction: 'ltr',
    flag: '🇹🇷'
  },

  {
    code: 'he',
    name: 'Hebrew',
    nativeName: 'עברית',
    direction: 'rtl',
    flag: '🇮🇱'
  },

  {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    direction: 'rtl',
    flag: '🇮🇷'
  },

  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    direction: 'rtl',
    flag: '🇵🇰'
  },

  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    direction: 'ltr',
    flag: '🇮🇳'
  },

  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    direction: 'ltr',
    flag: '🇧🇩'
  },

  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    direction: 'ltr',
    flag: '🇮🇩'
  },

  {
    code: 'ms',
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
    direction: 'ltr',
    flag: '🇲🇾'
  },

  {
    code: 'th',
    name: 'Thai',
    nativeName: 'ไทย',
    direction: 'ltr',
    flag: '🇹🇭'
  },

  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    direction: 'ltr',
    flag: '🇻🇳'
  },

  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    direction: 'ltr',
    flag: '🇨🇳'
  },

  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    direction: 'ltr',
    flag: '🇯🇵'
  },

  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    direction: 'ltr',
    flag: '🇰🇷'
  },

  {
    code: 'fil',
    name: 'Filipino',
    nativeName: 'Filipino',
    direction: 'ltr',
    flag: '🇵🇭'
  },

  {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    direction: 'ltr',
    flag: '🇰🇪'
  },

  {
    code: 'am',
    name: 'Amharic',
    nativeName: 'አማርኛ',
    direction: 'ltr',
    flag: '🇪🇹'
  },

  {
    code: 'af',
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
    direction: 'ltr',
    flag: '🇿🇦'
  },

  {
    code: 'sr',
    name: 'Serbian',
    nativeName: 'Српски',
    direction: 'ltr',
    flag: '🇷🇸'
  },

  {
    code: 'hr',
    name: 'Croatian',
    nativeName: 'Hrvatski',
    direction: 'ltr',
    flag: '🇭🇷'
  },

  {
    code: 'sl',
    name: 'Slovenian',
    nativeName: 'Slovenščina',
    direction: 'ltr',
    flag: '🇸🇮'
  },

  {
    code: 'et',
    name: 'Estonian',
    nativeName: 'Eesti',
    direction: 'ltr',
    flag: '🇪🇪'
  },

  {
    code: 'lv',
    name: 'Latvian',
    nativeName: 'Latviešu',
    direction: 'ltr',
    flag: '🇱🇻'
  },

  {
    code: 'lt',
    name: 'Lithuanian',
    nativeName: 'Lietuvių',
    direction: 'ltr',
    flag: '🇱🇹'
  },

  {
    code: 'ca',
    name: 'Catalan',
    nativeName: 'Català',
    direction: 'ltr',
    flag: '🇪🇸'
  },

  {
    code: 'eu',
    name: 'Basque',
    nativeName: 'Euskara',
    direction: 'ltr',
    flag: '🇪🇸'
  },

  {
    code: 'gl',
    name: 'Galician',
    nativeName: 'Galego',
    direction: 'ltr',
    flag: '🇪🇸'
  },

  {
    code: 'is',
    name: 'Icelandic',
    nativeName: 'Íslenska',
    direction: 'ltr',
    flag: '🇮🇸'
  },

  {
    code: 'ga',
    name: 'Irish',
    nativeName: 'Gaeilge',
    direction: 'ltr',
    flag: '🇮🇪'
  },

  {
    code: 'mt',
    name: 'Maltese',
    nativeName: 'Malti',
    direction: 'ltr',
    flag: '🇲🇹'
  }

] as const;