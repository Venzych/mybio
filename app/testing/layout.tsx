// src/layout/RootLayout.tsx
"use client";
import "@ant-design/v5-patch-for-react-19";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { ConfigProvider, theme } from "antd";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Clock from "./components/Clock";
import SettingsDropdown from "./components/SettingsDropdown";
import Sidebar from "./components/Sidebar";
import { getSavedTheme } from "./utils/theme";
import { getSavedLanguage } from "./utils/language";
import "../globals.css";
import "../src/i18n.js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    setDarkMode(getSavedTheme());
    getSavedLanguage();
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
              }}
            >
              <SettingsDropdown darkMode={darkMode} setDarkMode={setDarkMode} />
            </Header>
            <Sidebar />
            <Clock darkMode={darkMode} />
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
