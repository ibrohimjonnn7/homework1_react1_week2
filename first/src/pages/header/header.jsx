export default function Header({
  img_header,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
}) {
  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className="header1"
          style={{
            display: "flex",
            fontSize: "22px",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <img
            src={img_header}
            alt=""
            style={{ width: "80px", height: "20px" }}
          />
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{text4}</p>
        </div>
        <div
          className="header2"
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            fontSize: "22px",
          }}
        >
          <p>{text5}</p>
          <button
            style={{
              padding: "10px",
              borderRadius: "5px",
              background: "blue",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            {text6}
          </button>
        </div>
      </header>
    </>
  );
}
