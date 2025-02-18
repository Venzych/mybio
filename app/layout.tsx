"use client";

import "@ant-design/v5-patch-for-react-19";
import "./globals.css";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { ConfigProvider, theme } from "antd";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./src/i18n.js";

import MainMenu from "./components/MainMenu";
import SettingsDropdown from "./components/SettingsDropdown";
import Clock from "./components/Clock";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);

    const savedLang = localStorage.getItem("language");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

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
              id="home"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background:
                  "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(255, 0, 0, 0.5))",
              }}
            >
              <div className="ml-auto">
                <SettingsDropdown
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              </div>
            </Header>
            <MainMenu />
            <Clock darkMode={darkMode} />
            <Content
              style={{
                maxWidth: "1920px",
                width: "70%",
                margin: "0 auto",
              }}
            >
              {children}
            </Content>

            <Footer className="text-center">Created by Venzy.</Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
