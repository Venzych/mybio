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
  const { i18n, t } = useTranslation();

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
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background:
                  "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(255, 0, 0, 0.5))",
              }}
            >
              <SettingsDropdown
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              ></SettingsDropdown>
            </Header>
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
