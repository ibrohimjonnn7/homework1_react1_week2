export default function Footer({
  img_footer,
  text1,
  img_footer2,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
  text12,
  text13,
  text14,
}) {
  return (
    <>
      <footer
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid gray",
        }}
      >
        {/*  */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={img_footer} alt="" />
            <p>{text1}</p>
          </div>
          <img src={img_footer2} alt="" style={{ marginTop: "20px" }} />
        </div>
        {/*  */}
        <div style={{ display: "flex", gap: "30px" }}>
          <div>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
            <p>{text5}</p>
            <p>{text6}</p>
          </div>
          <div>
            <p style={{ color: "blue" }}>{text7}</p>
            <p>{text8}</p>
            <p>{text9}</p>
            <p>{text10}</p>
            <p>{text11}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

