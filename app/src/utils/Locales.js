import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from '../../res/strings/en.js';
import ja from '../../res/strings/ja.js';

export const getLocale = (language) => {
  if (language.includes('ja')) {
    return 'ja';
  }
  // return 'en'
  return 'en';
};

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = getLocale(locales[0].languageTag);
}

I18n.fallbacks = true;
I18n.translations = {
  ja,
  en,
};

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
