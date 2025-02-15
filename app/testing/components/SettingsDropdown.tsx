import { Dropdown, Button } from "antd";
import { useTranslation } from "react-i18next";

export default function SettingsDropdown({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  const { t } = useTranslation();

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const settingsMenu = [
    {
      key: "darkMode",
      label: darkMode ? "☀️ " + t("lightMode") : "🌙 " + t("darkMode"),
      onClick: toggleTheme,
    },
  ];

  return (
    <Dropdown menu={{ items: settingsMenu }} trigger={["click"]}>
      <Button
        type="text"
        icon={
          <img
            src="/images/settings.ico"
            alt="Settings"
            style={{ width: 28, height: 28 }}
          />
        }
        style={{ border: "none", padding: 0 }}
      />
    </Dropdown>
  );
}
