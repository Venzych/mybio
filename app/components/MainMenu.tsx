import { Anchor } from "antd";
import { useTranslation } from "react-i18next";

export default function MainMenu() {
  const { i18n, t } = useTranslation();

  const menuItems = [
    { href: "#home", title: t("home") },
    { href: "#about", title: t("about") },
    { href: "#links", title: t("links") },
  ];

  return (
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
  );
}
