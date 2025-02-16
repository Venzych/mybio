import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className=" border p-4 ">
      <p className="font-raleway text-[20px] font-bold text-left">
        {t("aboutme.part1")}
      </p>
      <p className="font-raleway text-[20px] font-bold text-left">
        {t("aboutme.part2")}
      </p>
      <p className="font-raleway text-[20px] font-bold text-left">
        {t("aboutme.part3")}
      </p>
    </div>
  );
}
