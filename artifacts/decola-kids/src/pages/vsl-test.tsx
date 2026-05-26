export default function VslTest() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "40px 16px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div
          style={{
            position: "relative",
            paddingTop: "177.77777777777777%",
            width: "100%",
          }}
        >
          <iframe
            src="/vsl.html"
            title="VSL Test"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
