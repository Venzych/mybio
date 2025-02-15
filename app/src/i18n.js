import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      links: "Links",

      lightMode: "Light Mode",
      darkMode: "Dark Mode",

      language: "Language",
      english: "English",
      russian: "Russian",

      homeText: {
        part1: "Hello!",
        part2:
          "This site is the first project that is related to the backend, and in general, the first project on the front.",
        bio: "Links to my social media:",
      },

      loading: "Loading...",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "Обо мне",
      links: "Ссылки",

      lightMode: "Светлая тема",
      darkMode: "Темная тема",

      language: "Язык",
      english: "Английский",
      russian: "Русский",

      homeText: {
        part1: "Приветствую!",
        part2:
          "Данный сайт является первым проектом, который связан с бекэндом, да и в целом первый проект по фронту.",
        bio: "Ссылки на мои социальные сети:",
      },

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
