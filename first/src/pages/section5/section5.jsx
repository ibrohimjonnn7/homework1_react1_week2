export default function Section5({ text1, img_Calc, text2 }) {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>{text1}</h1> */}
      <div style={{}}>
        <div style={{ display: "flex", gap: "20px" }}>
          <img src={img_Calc} alt="" />
          <p>{text2}</p>
        </div>
      </div>
    </>
  );
}
