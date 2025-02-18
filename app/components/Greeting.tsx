import { useTranslation } from "react-i18next";

export default function Greeting() {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="max-w-full mx-auto my-5 p-5 max-h-full rounded-lg shadow-md text-left transition-all duration-300 border"
    >
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
