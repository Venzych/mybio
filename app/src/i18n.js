import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Me",
      hobby: "Hobbies",
      links: "Links",

      lightMode: "Light Mode",
      darkMode: "Dark Mode",

      language: "Language",
      english: "English",
      russian: "Russian",

      greeting: {
        part1: "Welcome!",
        part2:
          "This website is a starting project that also serves as my business card.",
        part3:
          "The site is translated into English. You can always change the language in the settings.",
        part4:
          "Also, this will be a collection of some localizations or things I like (after all, I'm making it with passion).",
      },

      aboutme: {
        part1: "My name is Artyom",
        part2:
          "I am a C#/.NET developer passionate about creating web applications, backends, and APIs. I love writing clean code and developing user-friendly and efficient solutions.",
        part3:
          "Technologies: C#, .NET, ASP.NET, Entity Framework, PostgreSQL, Swagger/OpenAPI, Docker.",
      },

      firstSecret: "I really like how WW looks in this font)",

      hobbies: {
        music: {
          part1:
            "Music accompanies me in different moments of life. It creates an atmosphere, helps me focus, relax, or, on the contrary, get energized. Sometimes it stays in the background, and sometimes it completely immerses me, making me experience every note.",
          part2:
            "I've always been interested not only in listening to music but also in understanding it on a deeper level. I learned to play the drums to feel the rhythm not just as a listener but as a musician. Right now, I'm especially into OG Buda, cold carti, Papin Olympos, and Platina — their sound reflects the mood I enjoy.",
        },
      },

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
