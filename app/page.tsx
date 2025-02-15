"use client";

import "./styles.css";

import { useTranslation } from "react-i18next";
import { Content, Footer } from "antd/es/layout/layout";
import { Button, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { FaVk, FaTelegramPlane } from "react-icons/fa";

import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import Hobby from "./components/Hobby";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="border p-4 mt-2">
      <Content className="border p-4 w-full">
        <Greeting />
        <AboutMe />
        <div className="font-raleway text-[15px] font-bold text-right">
          {t("firstSecret")}
        </div>
        <Hobby />
      </Content>

      <Footer className="highlight-text footer-text">
        <div id="links">{t("bio")}</div>
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
