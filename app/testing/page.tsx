export default function TestingPage() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        zIndex: -1,
        backgroundImage: 0
          ? "url('/images/dark-background.jpg')"
          : "url('/images/light-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      dasdada
    </div>
  );
}
