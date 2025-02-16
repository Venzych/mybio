import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      hobby: "Hobby",
      links: "Links",

      lightMode: "Light Mode",
      darkMode: "Dark Mode",

      language: "Language",
      english: "English",
      russian: "Russian",

      greeting: {
        part1: "Hello!",
        part2: "",
        part3: "",
        part4: "",
      },

      aboutme: {
        part1: "",
        part2: "",
      },

      firstSecret: "Мне так нравится WW в этом шрифте",

      bio: "Links to my social media:",

      loading: "Loading...",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "Обо мне",
      hobby: "Увлечения",
      links: "Ссылки",

      lightMode: "Светлая тема",
      darkMode: "Темная тема",

      language: "Язык",
      english: "Английский",
      russian: "Русский",

      greeting: {
        part1: "Приветствую!",
        part2:
          "Данный сайт является стартовым проектом, который параллельно является моей визиткой.",
        part3:
          "Сайт переведён на английский. Вы всегда можете поменять язык в настройках.",
        part4:
          "Также тут будет скопление каких-то локалок или понравившихся мне штук(всё же делаю с душой).",
      },

      aboutme: {
        part1: "Меня зовут Артём",
        part2:
          "Я C#/.NET разработчик, увлекаюсь созданием веб-приложений, бэкенда и API. Люблю писать чистый код, разрабатывать удобные и эффективные решения.",
        part3:
          "Технологии: C#, .NET, ASP.NET, Entity Framework, PostgreSQL, Swagger/OpenAPI, Docker. ",
      },

      firstSecret: "Мне так нравится WW в этом шрифте)",

      hobbies: {
        music: {
          part1:
            "Музыка сопровождает меня в разных моментах жизни. Она создаёт атмосферу, помогает сосредоточиться, расслабиться или, наоборот, зарядиться энергией. Иногда она становится фоном, а иногда полностью погружает в себя, заставляя проживать каждую ноту.",
          part2:
            "Мне всегда было интересно не только слушать музыку, но и разбираться в ней глубже. Я учился играть на барабанной установке, чтобы прочувствовать ритм не только как слушатель, но и как музыкант. Сейчас мне особенно близка музыка OG Buda, cold carti, Папин Олимпос и Платины — их звучание отражает настроение, которое мне нравится.",
        },
      },

      bio: "Ссылки на мои социальные сети:",

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
