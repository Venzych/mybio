import { useTranslation } from "react-i18next";

export default function Greeting() {
  const { t } = useTranslation();
  return (
    <div className="container border p-4">
      <h1 className="font-raleway text-[25px] font-bold text-center">
        {t("greeting.part1")}
      </h1>
      <p className="font-raleway text-[20px] font-bold text-left">
        {t("greeting.part2")}
      </p>
      <p className="font-raleway text-[20px] font-bold text-left">
        {t("greeting.part3")}
      </p>
      <p className="font-raleway text-[17px] text-left">
        P.S. {t("greeting.part4")}
      </p>
    </div>
  );
}
