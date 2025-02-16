import { Anchor } from "antd";
import { useTranslation } from "react-i18next";

export default function MainMenu() {
  const { i18n, t } = useTranslation();

  const menuItems = [
    { href: "#home", title: t("home") },
    { href: "#about", title: t("about") },
    { href: "#hobby", title: t("hobby") },
    { href: "#links", title: t("links") },
  ];

  return (
    <div className="font-raleway fixed top-[12vh] left-[2vw] z-[1000] min-w-[7rem] w-[10vw] max-w-[12rem] text-left">
      <Anchor
        style={{
          padding: "10px 0",
        }}
        items={menuItems.map((item) => ({
          key: item.href,
          href: item.href,
          title: item.title,
        }))}
      />
    </div>
  );
}
