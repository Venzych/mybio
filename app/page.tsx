"use client";

import { useTranslation } from "react-i18next";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import "./styles.css";
import { Button, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { FaVk, FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Header
        style={{
          backgroundColor: "#4CAF50", // Задаём зелёный цвет фона
          color: "#fff", // Задаём белый цвет текста
        }}
      ></Header>

      <Content>
        <div id="home" className="container">
          <h1 className="gradient-text">{t("homeText.part1")}</h1>
          <p className="highlight-text">{t("homeText.part2")}</p>
        </div>
        <div id="about" style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
          <h2>Section 1</h2>
          <p>Content for section 1...</p>
        </div>

        <div style={{ height: "100vh", backgroundColor: "#e0e0e0" }}>
          <h2>Section 2</h2>
          <p>Content for section 2...</p>
        </div>
      </Content>

      <Footer className="highlight-text footer-text">
        <div id="links">{t("homeText.bio")}</div>
        <Space size="middle">
          {/* GitHub */}
          <Button
            type="default"
            shape="circle"
            icon={<GithubOutlined />}
            size="large"
            href="https://github.com/Venzych"
            target="_blank"
          />

          {/* Telegram */}
          <Button
            type="default"
            shape="circle"
            icon={<FaTelegramPlane />}
            size="large"
            href="https://t.me/Venzych"
            target="_blank"
          />

          {/* VK (используем react-icons) */}
          <Button
            type="default"
            shape="circle"
            icon={<FaVk />}
            size="large"
            href="https://vk.com/Venzych"
            target="_blank"
          />
        </Space>
      </Footer>
    </div>
  );
}
