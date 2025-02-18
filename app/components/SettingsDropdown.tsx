import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const SettingsDropdown = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const settingsMenu = [
    {
      key: "darkMode",
      label: !darkMode ? "☀️ " + t("lightMode") : "🌙 " + t("darkMode"),
      onClick: toggleTheme,
    },
    {
      key: "language",
      label: "🌍 " + t("language"),
      children: [
        {
          key: "en",
          label: t("english"),
          onClick: () => changeLanguage("en"),
        },
        {
          key: "ru",
          label: t("russian"),
          onClick: () => changeLanguage("ru"),
        },
      ],
    },
  ];

  return (
    <Dropdown menu={{ items: settingsMenu }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Image
          src={
            darkMode
              ? "/images/settings-dark.ico"
              : "/images/settings-light.ico"
          }
          alt="Settings"
          width={28}
          height={28}
          style={{ borderRadius: "50%" }}
        />
      </a>
    </Dropdown>
  );
};

export default SettingsDropdown;
