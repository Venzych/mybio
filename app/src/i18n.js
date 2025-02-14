// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      homeText: {
        part1: "Hello!",
        part2:
          "This site is the first project that is related to the backend, and in general, the first project on the front.",
        bio: "Links to my social media:",
      },

      language: "Language",
      english: "English",
      russian: "Russian",

      lightMode: "Light Mode",
      darkMode: "Dark Mode",

      loading: "Loading...",
    },
  },
  ru: {
    translation: {
      homeText: {
        part1: "Приветствую!",
        part2:
          "Данный сайт является первым проектом, который связан с бекэндом, да и в целом первый проект по фронту.",
        bio: "Ссылки на мои социальные сети:",
      },

      language: "Язык",
      english: "Английский",
      russian: "Русский",

      lightMode: "Светлая тема",
      darkMode: "Темная тема",

      loading: "Загрузка...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // язык по умолчанию
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
