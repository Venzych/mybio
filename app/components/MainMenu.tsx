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
    <div className="font-raleway fixed top-[100px] left-[20px] z-[1000] w-[120px] p-[10px] text-[20px] text-left">
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
