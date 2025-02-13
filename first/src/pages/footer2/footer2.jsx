export default function Footer2({ text12, text13, text14 }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>{text12}</p>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <p>{text13}</p>
          <p>{text14}</p>
        </div>
      </div>
    </>
  );
}
