import { useState, useEffect } from "react";

export default function Clock({ darkMode }: { darkMode: boolean }) {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`fixed bottom-[20vh] left-[3vw] z-1000 w-[120px] p-2 rounded-lg text-xl font-mono ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {currentTime}
    </div>
  );
}
