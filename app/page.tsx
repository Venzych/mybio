"use client";

import "./globals.css";

import { useTranslation } from "react-i18next";
import { Content, Footer } from "antd/es/layout/layout";
import { Button, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { FaVk, FaTelegramPlane } from "react-icons/fa";

import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import Hobby from "./components/Hobby";
import Carousel from "./components/Carousel";
import { MobileMainMenu } from "./components/MainMenu";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="border p-4 mt-2">
      <Content className="border p-4 w-full">
        <Greeting />

        <div>
          <AboutMe />
          <div className="font-raleway text-[15px] font-bold text-right">
            {t("firstSecret")}
          </div>
          <Carousel />
        </div>

        <div className="block md:hidden fixed top-4.5 left-3">
          <MobileMainMenu />
        </div>

        <div className="h-[20vh]"></div>
        <Hobby />
      </Content>

      <Footer className="!text-[20px] font-bold shadow-[2px_2px_5px_rgba(0,0,0,0.2)]  mb-5 text-center">
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
