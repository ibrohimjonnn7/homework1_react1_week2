export default function Section4({ img7, text1, text2 }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        <div>
          <img src={img7} alt="" />
        </div>
        <div
          style={{
            background: "#EAF2F5",
            padding: "20px",
            borderRadius: "30px",
          }}
        >
          <h3 style={{ fontSize: "33px" }}>{text1}</h3>
          <p style={{ fontSize: "22px" }}>{text2}</p>
        </div>
      </div>
    </>
  );
}
