import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { toggleTheme } from "../utils/theme";

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
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const settingsMenu = (
    <Menu>
      <Menu.Item key="darkMode" onClick={() => toggleTheme}>
        {darkMode ? "☀️ " + t("lightMode") : "🌙 " + t("darkMode")}
      </Menu.Item>
      <Menu.SubMenu key="language" title={"🌍 " + t("language")}>
        <Menu.Item key="en" onClick={() => changeLanguage("en")}>
          {t("english")}
        </Menu.Item>
        <Menu.Item key="ru" onClick={() => changeLanguage("ru")}>
          {t("russian")}
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <Dropdown overlay={settingsMenu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        {t("settings")} <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default SettingsDropdown;
