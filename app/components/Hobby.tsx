import { useTranslation } from "react-i18next";

export default function Hobby() {
  const { t } = useTranslation();
  return (
    <div id="hobby" className="font-raleway text-[20px] font-bold text-left">
      <h2>Section 2</h2>
      <p>Content for section 2...</p>
    </div>
  );
}
