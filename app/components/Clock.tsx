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
      style={{
        position: "fixed",
        top: "80vh",
        left: "20px",
        zIndex: 1000,
        width: "120px",
        padding: "10px",
        background: darkMode
          ? "rgba(0, 0, 0, 0.9)"
          : "rgba(255, 255, 255, 0.9)",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontSize: "16px",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      {currentTime}
    </div>
  );
}
