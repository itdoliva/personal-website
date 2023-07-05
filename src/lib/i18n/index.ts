import { browser } from '$app/environment'
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

const defaultLocale = 'en'

register('en', () => import('./en.json'));
register('pt', () => import('./en.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale,
});