import { useTranslation } from "react-i18next";

export default function Hobby() {
  const { t } = useTranslation();
  return (
    <div id="hobby" className="font-raleway text-[20px] font-bold text-left">
      <p>{t("hobbies.music.part1")}</p>
      <br />
      <p>{t("hobbies.music.part2")}</p>
    </div>
  );
}
