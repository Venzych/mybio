import { useState } from "react";
import { Anchor, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const menuItems = [
  { href: "#home", title: "home" },
  { href: "#about", title: "about" },
  { href: "#hobby", title: "hobby" },
  { href: "#links", title: "links" },
];

export function MainMenu() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="hidden md:block fixed
      font-raleway top-[12vh] left-[2vw] z-[1000] min-w-[7rem] w-[10vw] max-w-[12rem] text-left"
      >
        <Anchor
          style={{
            padding: "10px 0",
          }}
          items={menuItems.map((item) => ({
            key: item.href,
            href: item.href,
            title: t(item.title),
          }))}
        />
      </div>
    </>
  );
}

export function MobileMainMenu() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <Button
          className=" 
          z-[1000] "
          type="default"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
      )}

      <Drawer
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        className="font-raleway"
      >
        <Menu
          mode="vertical"
          onClick={() => setOpen(false)}
          items={menuItems.map((item) => ({
            key: item.href,
            label: <a href={item.href}>{t(item.title)}</a>,
          }))}
        />
      </Drawer>
    </>
  );
}
