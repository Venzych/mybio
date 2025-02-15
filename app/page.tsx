"use client";

import "./styles.css";
import { useTranslation } from "react-i18next";
import { Content, Footer } from "antd/es/layout/layout";
import { Button, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { FaVk, FaTelegramPlane } from "react-icons/fa";

import Greeting from "./components/Greeting";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="border p-4">
      <Content>
        <div className="container">
          <h1 className="gradient-text">
            <Greeting></Greeting>
          </h1>

          <p className="highlight-text">{t("homeText.part2")}</p>
        </div>

        <div id="about" style={{ height: "50vh" }}>
          <h2>Section 1</h2>
          <p>Content for section 1...</p>
        </div>

        <div style={{ height: "50vh" }}>
          <h2>Section 2</h2>
          <p>Content for section 2...</p>
        </div>
      </Content>

      <Footer className="highlight-text footer-text">
        <div id="links">{t("homeText.bio")}</div>
        <Space size="middle">
          <Button
            type="default"
            shape="circle"
            icon={<GithubOutlined />}
            size="large"
            href="https://github.com/Venzych"
            target="_blank"
          />

          <Button
            type="default"
            shape="circle"
            icon={<FaTelegramPlane />}
            size="large"
            href="https://t.me/Venzych"
            target="_blank"
          />

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
