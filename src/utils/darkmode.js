// @flow

// getTheme() can technically be run before window.__theme is set
export function getTheme() {
  return window.__theme;
}

export function setPreferredTheme(theme) {
  window.__setPreferredTheme(theme);
}

export function addThemeListener(listener) {
  if (typeof window === 'undefined' || !window.__themeListeners) {
    return;
  }
  window.__themeListeners.push(listener);
}

export function removeThemeListener(listener) {
  if (typeof window === 'undefined' || !window.__themeListeners) {
    return;
  }
  window.__themeListeners = window.__themeListeners.filter(l => l !== listener);
}
