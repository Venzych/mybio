"use client";
import "@ant-design/v5-patch-for-react-19";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { Menu, Button, Dropdown, ConfigProvider, theme, Anchor } from "antd";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./globals.css";
import "./src/i18n.js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { i18n, t } = useTranslation();
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);

    const savedLang = localStorage.getItem("language");
    if (savedLang) i18n.changeLanguage(savedLang);

    // Функция для обновления времени
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    // Обновлять время каждую секунду
    const intervalId = setInterval(updateTime, 1000);

    // Начальный вызов для отображения времени сразу
    updateTime();

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [i18n]);

  // Переключение темы
  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  // Переключение языка
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const menuItems = [
    { href: "#home", title: t("home") },
    { href: "#about", title: t("about") },
    { href: "#links", title: t("links") },
  ];

  const settingsMenu = [
    {
      key: "darkMode",
      label: darkMode ? "☀️ " + t("lightMode") : "🌙 " + t("darkMode"),
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
    <html lang={i18n.language}>
      <body>
        <ConfigProvider
          theme={{
            algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          }}
        >
          <Layout style={{ minHeight: "100vh" }}>
            <Header
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background:
                  "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(255, 0, 0, 0.5))",
              }}
            >
              <Dropdown
                menu={{ items: settingsMenu }}
                open={open}
                onOpenChange={setOpen}
                trigger={["click"]}
              >
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
            </Header>
            <div
              style={{
                position: "fixed",
                top: "100px",
                left: "20px",
                zIndex: 1000,
                width: "120px",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Anchor
                style={{
                  fontSize: "20px",
                  padding: "10px 0",
                }}
                items={menuItems.map((item) => ({
                  key: item.href,
                  href: item.href,
                  title: item.title,
                }))}
              />
            </div>

            <div
              style={{
                position: "fixed",
                top: "80vh",
                left: "20px",
                zIndex: 1000,
                width: "120px",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                fontSize: "16px",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              {currentTime}
            </div>
            <Content
              style={{
                maxWidth: "1920px",
                width: "80%",
                margin: "0 auto",
                padding: "0 20px",
              }}
            >
              {children}
            </Content>

            <Footer style={{ textAlign: "center" }}>Created by Venzy.</Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
