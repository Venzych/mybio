import i18n from "../src/i18n";

export function getSavedLanguage() {
  const savedLang = localStorage.getItem("language");
  if (savedLang) {
    i18n.changeLanguage(savedLang);
  }
}

export function changeLanguage(lng: string) {
  i18n.changeLanguage(lng);
  localStorage.setItem("language", lng);
}
